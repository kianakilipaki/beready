import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';
import About from './pages/About';

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/blog', component: Blog },
  { path: '/post/:id', component: Post },
  { path: '/about', component: About }
];

export default routes;