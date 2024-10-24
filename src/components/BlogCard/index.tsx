import './styles.scss';
import React from 'react';

export interface CardProps {
  id?: number;
  heading?: string;
  imageUrl?: string;
  excerpt?: string;
  postLink?: string;
}

const BlogCard = ({ heading, imageUrl, excerpt, postLink }: CardProps) => {
  return (
    <div className="blog-card">
      {imageUrl && <img src={imageUrl} alt="Blog Post" className="blog-image" />}
      <div className="blog-content">
        <h3 className="blog-title">{heading}</h3>
        <p className="blog-excerpt">{excerpt}</p>
        <a href={postLink} className="read-more">Read More</a>
      </div>
    </div>
  );
};

export default BlogCard;