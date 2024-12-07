import 'regenerator-runtime/runtime';
// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import UserDetail from "./UserDetail";

const NotFound = () => <div>Loading...</div>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        {/* Fallback route for invalid URLs */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
