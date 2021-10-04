import * as React from "react";

import { Form } from "./Form";
import * as apiClient from "./apiClient";

const Blog = () => {
  const [fashion_blog, setFashion_Blog] = React.useState([]);
  const [isAdding, setIsAdding] = React.useState(false);
  console.log("1", fashion_blog);

  // const addPost = (post) => {
  //   console.log("addPost", post);
  //   const thing = apiClient
  //     .addPost(post)
  //     .then(loadBlogs)
  //     .catch((e) => {
  //       console.log(e);
  //     });
  //   console.log(thing);
  // };
  const addPost = (post) => apiClient.addPost(post).then(loadBlogs);

  const loadBlogs = () => apiClient.getBlog().then(setFashion_Blog);
  React.useEffect(() => {
    loadBlogs();
  }, []);

  console.log("2", fashion_blog);

  const addBlog = (blog) =>
    apiClient.addBlog(blog).then(loadBlogs).then(setIsAdding(false));

  return (
    <section>
      <BlogsList blogs={fashion_blog} addBlogs={addBlog} addPost={addPost} />
    </section>
  );
};

const BlogsList = ({ blogs, addBlog, addPost }) => {
  const [showForm, updateShowForm] = React.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    // if (canAdd) {
    // AddBlogs(blogs);
    updateShowForm(!showForm);
    console.log("This button works!");
    //   setBlogs("");
    // }
  };
  return (
    <>
      <h1>Fashion for the Four Seasons</h1>
      <h6>Spring, Summer, Fall, Winter</h6>
      {blogs.map(({ id, season, image_url, image_description, date }) => (
        <ul key={id}>
          <h2>{season}</h2> <img src={image_url} alt={blogs.season} />
          <br />
          <li>{image_description}</li> <br /> <h3>{date}</h3>
        </ul>
      ))}
      <button onClick={onSubmit}>Add Blog Post</button>
      {showForm ? <Form addPost={addPost} /> : null}
    </>
  );
};

const AddBlogs = ({ AddBlogs }) => {
  const [blogs, setBlogs] = React.useState("");

  const canAdd = blogs !== "";

  const onSubmit = (e) => {
    e.preventDefault();
    if (canAdd) {
      AddBlogs(blogs);
      setBlogs("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        New task:{" "}
        <input
          onChange={(e) => setBlogs(e.currentTarget.value)}
          value={blogs}
        />
      </label>
      <button disabled={!canAdd}>Add</button>
    </form>
  );
};

export default Blog;
