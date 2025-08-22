import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router';

import Nav from '../components/nav';

// import pages
import FrontPage from './FrontPage/FrontPage';
import TasksPage from './TasksPage/TasksPage';
import AboutPage from './AboutPage/AboutPage';
import SignIn from './SignIn/SignIn';
import ErrorPage from './ErrorPage/ErrorPage';

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
