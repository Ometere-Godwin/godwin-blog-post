"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Post, postsApi } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";
import { Avatar } from "@/components/ui/avatar";
import { User } from "lucide-react";

export function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await postsApi.getPosts();
        setPosts(data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch posts. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [toast]);

  if (isLoading) {
    return <div className="text-center">Loading posts...</div>;
  }

  if (posts.length === 0) {
    return <div className="text-center">No posts found.</div>;
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <article key={post.id} className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Avatar className="h-10 w-10 bg-gray-200 flex items-center justify-center">
              <User className="h-6 w-6 text-gray-500" />
            </Avatar>
            <div>
              <h3 className="font-medium text-gray-900">{post.author}</h3>
              <p className="text-sm text-gray-500">
                {format(new Date(post.created_at), "PPP")}
              </p>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">{post.content}</p>
          <div className="border-t pt-4 mt-4">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                Written by {post.author}
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
