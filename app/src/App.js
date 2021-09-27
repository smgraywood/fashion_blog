import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Blog from "./Blog";

const App = () => (
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Admin />} />
    </Routes>
  </main>
);

const Home = () => (
  <>
    <h1>{process.env.REACT_APP_TITLE}</h1>
    <h2>{process.env.REACT_APP_SUBTITLE}</h2>
    <Blog />
  </>
);

const Admin = () => (
  <>
    <h1>Admin</h1>
  </>
);

export default App;
