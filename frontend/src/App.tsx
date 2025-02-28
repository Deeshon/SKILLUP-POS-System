import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout';

// Dynamically import all components from the `pages` directory
const pages = import.meta.glob('./pages/**/*.tsx', { eager: true }) as Record<
  string,
  { default: React.ComponentType }
>;

// Import the 404 Not Found page
const NotFound = pages['./pages/notFound.tsx']?.default || (() => <h1>404 - Page Not Found</h1>);

function generateRoutes() {
  return Object.entries(pages).map(([path, module]) => {
    const Component = module.default;

    // Generate the route path based on the file structure
    const routePath = path
      .replace('./pages', '') // Remove leading './pages'
      .replace(/\/index\.tsx$/, '') // Remove index.tsx for folders
      .replace(/\.tsx$/, '') // Remove '.tsx'
      .replace(/\/+/g, '/'); // Normalize slashes

    const finalPath = routePath === '/home' ? '/' : routePath.toLowerCase();
    return <Route key={finalPath} path={finalPath}  element={
      <Layout>
        <Component />
      </Layout>
    } />;
  });
}

function App() {
  return (
    <Router>
      <Routes>
        {generateRoutes()}
        {/* Add a catch-all route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;