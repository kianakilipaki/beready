import React from 'react';
import BlogCard from '../../components/BlogCard/index.tsx'
import './styles.scss';

const Blog = () => (
  <div className="blog">
    <h2>Latest Posts</h2>
    <BlogCard />
    <BlogCard />
  </div>
);

export default Blog;