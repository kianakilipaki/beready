import React from 'react';
import BlogCard from '../../components/BlogCard'
import './styles.scss';

const Home = () => (
  <div className="home">
    <BlogCard />
    <div className='logo'></div>
    <h1>Welcome to BE READY Mesh</h1>
    <p>Your resource for disaster preparedness, community resilience, and self-reliance.</p>
  </div>
);

export default Home;