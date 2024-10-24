import React, { useState, useEffect } from 'react';
import BlogCard from '../../components/BlogCard/index.tsx';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/posts.json')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Failed to fetch posts:", err));
  }, []);

  return (
    <div>
      {posts.length > 0 ? (
        posts.map(post => (
          <BlogCard
            id={post.id}
            heading={post.heading}
            imageUrl={post.imageUrl}
            excerpt={post.excerpt}
            postLink={`/post/${post.id}`}
          />
        ))
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
};

export default BlogList;