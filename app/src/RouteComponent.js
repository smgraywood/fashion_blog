import React from "react";

import { Routes, Route, Link } from "react-router-dom";

export default function RouteComponent() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/SeasonalFashion/Spring"> Spring</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/Spring" element={<Spring />} />
          {/* <Route path="/api/fashion_blog/:id" element={<BlogPostSingle />} /> */}
        </Routes>
      </main>
    </>
  );
}
