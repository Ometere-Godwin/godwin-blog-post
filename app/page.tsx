import { PostList } from '@/components/posts/post-list';

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Latest Posts</h1>
      <PostList />
    </div>
  );
}