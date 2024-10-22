import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';

const Post = () => {
  const { id } = useParams();

  return (
    <div className="post">
      <h1>Post Title {id}</h1>
      <p>Post content...</p>
    </div>
  );
};

export default Post;