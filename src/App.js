import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeftSidebar from './components/LeftSidebar';
import ProjectList from './pages/ProjectList';
import ProjectEdit from './pages/ProjectEdit';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <LeftSidebar />
        <div style={{ marginLeft: '200px', padding: '20px', width: '100%' }}>
          <Routes>
            <Route path="/" element={<ProjectList />} />
            <Route path="/edit/:id" element={<ProjectEdit />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
