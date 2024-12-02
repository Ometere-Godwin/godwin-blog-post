"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CreatePostForm } from '@/components/posts/create-post-form';
import { useAuthStore } from '@/store/auth-store';

export default function CreatePostPage() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Create New Post</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <CreatePostForm />
      </div>
    </div>
  );
}