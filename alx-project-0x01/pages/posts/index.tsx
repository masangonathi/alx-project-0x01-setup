// pages/posts/index.tsx
import React from 'react';
import PostCard from '../../components/common/PostCard';

const Posts: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <PostCard title="Post 1" content="This is the content of post 1." />
      <PostCard title="Post 2" content="This is the content of post 2." />
    </div>
  );
};

export default Posts;
