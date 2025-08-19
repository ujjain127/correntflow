import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Careers from './Careers';
import ApplicationForm from './ApplicationForm';
import Docs from './Docs';

function AppRouter() {
  return (
    <Router basename="/correntflow">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
