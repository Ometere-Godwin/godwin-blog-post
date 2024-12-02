"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PostList } from '@/components/posts/post-list';
import { useAuthStore } from '@/store/auth-store';

export default function DashboardPage() {
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
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Your Dashboard</h1>
      <PostList />
    </div>
  );
}