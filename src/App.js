import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;