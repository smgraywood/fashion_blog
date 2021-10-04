import * as React from "react";

import BlogPost from "./BlogPost";
import * as apiClient from "./apiClient";

const BlogList = () => {
  const [posts, setBlogs] = React.useState([]);

  const loadBlogs = async () => {
    const postList = await apiClient.getBlogs();
    setBlogs(postList);
  };

  React.useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <>
      {posts.map((post) => {
        return <BlogPost key={post.id} post={post} />;
      })}
    </>
  );
};

export default BlogList;
