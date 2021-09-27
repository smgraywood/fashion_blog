import express from "express";

import * as db from "./db.mjs";

const blogRouter = express.Router();

blogRouter.get("/", async (request, response) => {
  const blog = await db.getBlog();
  response.json(blog);
});

blogRouter.use(express.json());
blogRouter.post("/", async (request, response) => {
  const contact = await db.addBlog(request.body);
  response.status(201).json(contact);
});
blogRouter.put("/:id", async (request, response) => {
  console.log(request.body);
  const contact = await db.updateBlog(request.body, request.params.id);
  response.json(contact);
});

export default blogRouter;
