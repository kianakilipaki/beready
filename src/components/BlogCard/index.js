import './styles.scss';
import React from 'react';

const BlogCard = () => {
  return (
    <div className="blog-card">
      <img src="path_to_image.jpg" alt="Blog Post" className="blog-image" />
      <div className="blog-content">
        <h3 className="blog-title">Blog Post Title</h3>
        <p className="blog-excerpt">
          A brief excerpt of the blog post goes here. This should summarize the content and entice readers to click.
        </p>
        <a href="/post/1" className="read-more">Read More</a>
      </div>
    </div>
  );
};

export default BlogCard;