import express from "express";

import * as db from "./db.mjs";

const blogRouter = express.Router();

blogRouter.get("/", async (request, response) => {
  const blog = await db.getBlog();
  response.json(blog);
});

// must use before .post method
blogRouter.use(express.json());
// adding a post
// blogRouter.post("/api/fashion_blog", async (req, res, next) => {
//   console.log("Hello, world")
//   // res.status(201).json("Hi!");
//   res.status(201).json(await db.addPost(req.body));
// })
// res.status(201).json(await db.addPost(req.body));

blogRouter.use(express.json());
blogRouter.post("/", async (request, response, next) => {
  const contact = await db.addBlog(request.body);
  response.status(201).json(contact);
});
// blogRouter.put("/:id", async (request, response) => {
//   console.log(request.body);
//   const contact = await db.updateBlog(request.body, request.params.id);
//   response.json(contact);
// });

export default blogRouter;
