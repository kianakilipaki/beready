import React from 'react';
import BlogList from '../Blog/blogList.tsx';
import './styles.scss';

const Home = () => {

  return (
    <div className="home">
      <h1>Welcome to <span className='be-ready'>BE READY</span> Mesh</h1>
      <p>Your resource for disaster preparedness, community resilience, and self-reliance.</p>
      <BlogList  />
    </div>
  );
};

export default Home;