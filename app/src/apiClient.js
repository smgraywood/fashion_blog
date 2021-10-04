export const getBlog = () => _get("/api/fashion_blog");

export const addBlog = (blog) => _post("/api/fashion_blog", blog);

// export const updateBlog = (blog, id) => _put(`/api/fashion_blog/${id}`, blog);

const _get = async (url) => (await fetch(url)).json();

// export const addPost = (post) =>
//   fetch("/api/fashion_blog/", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(post),
//   }).then((res) => res.json());
export const addPost = (post) => _post("/api/fashion_blog", post);
// export const addPost = (post) => _post("/api/fashion_blog/", post);

// const _put = async (url, body) => {
//   const res = await fetch(url, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(body),
//   });
//   let result;
//   try {
//     result = await res.json();
//   } catch {}

//   return result;
// };

const _post = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {}

  return result;
};
