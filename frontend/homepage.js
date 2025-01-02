import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/postService';
import PostForm from '../components/PostForm';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>PUKaR Posts</h1>
      <PostForm />
      <div>
        {posts.map((post) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <video src={post.videoUrl} controls />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
