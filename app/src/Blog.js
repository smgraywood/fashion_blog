import * as React from "react";

import * as apiClient from "./apiClient";

const Blog = () => {
  const [fashion_blog, setFashion_Blog] = React.useState([]);
  const [isAdding, setIsAdding] = React.useState(false);
  console.log("1", fashion_blog);

  const loadBlogs = () => apiClient.getBlog().then(setFashion_Blog);
  React.useEffect(() => {
    loadBlogs();
  }, []);

  console.log("2", fashion_blog);

  const addBlog = (blog) =>
    apiClient.addBlog(blog).then(loadBlogs).then(setIsAdding(false));

  return (
    <section>
      <BlogsList blogs={fashion_blog} addBlogs={addBlog} />
    </section>
  );
};

const BlogsList = ({ blogs, addBlogs }) => {
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
      {blogs.map(({ id, Season, image_url, image_description, date }) => (
        <ul key={id}>
          <img src={image_url} alt={blogs.Season} />
          <li>{Season}</li> <li>{image_description}</li> <li>{date}</li>
        </ul>
      ))}
      <button onClick={onSubmit}>Add Blog</button>
      {showForm ? <h1>This is where the form will be</h1> : null}
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
