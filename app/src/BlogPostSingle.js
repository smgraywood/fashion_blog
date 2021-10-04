import * as React from "react";

//useParams takes care of specical routes for react routers
import { useParams } from "react-router-dom";

import BlogPost from "./BlogPost";
import * as apiClient from "./apiClient";

const BlogPostSingle = () => {
  const [post, setPost] = React.useState(null);
  const params = useParams();
  console.log(params);
  const loadBlogs = async () => {
    const postSingle = await apiClient.getBlog(params.id);
    setPost(postSingle);
  };

  React.useEffect(() => {
    loadBlogs();
  });

  return <>{post ? <BlogPost post={post} /> : null}</>;
};

export default BlogPostSingle;
