import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

//always render single post
const BlogPost = ({ post }) => {
  return (
    <>
      {/* <Link to={`/fashion_blog/${post.id}`}>
        <p>{post.season}</p>
      </Link> */}
      <p>{post.image_url}</p>
      <p>{post.image_description}</p> <p>{post.date}</p>
    </>
  );
};

export default BlogPost;
