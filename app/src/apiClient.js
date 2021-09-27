export const getBlog = () => _get("/api/fashion_blog");

export const addBlog = (blog) => _post("/api/fashion_blog", blog);

export const updateBlog = (blog, id) => _put(`/api/fashion_blog/${id}`, blog);

const _get = async (url) => (await fetch(url)).json();

const _put = async (url, body) => {
  const res = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await res.json();
  } catch {}

  return result;
};

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
