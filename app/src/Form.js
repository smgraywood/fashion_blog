import React, { useState } from "react";

import Blog from "./Blog";
import * as apiClient from "./apiClient";

function Form({ Form, addPost }) {
  const [season, setSeason] = useState("");
  const [image_URL, setImage_URL] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  console.log(season);
  const handleSeason = (e) => {
    setSeason(e.target.value);
  };

  const handleImage_URL = (e) => {
    setImage_URL(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    addPost({
      season: season,
      image_url: image_URL,
      image_description: description,
      date: date,
    });
    // setPlayers(state);
    // ???
  };

  return (
    <div>
      <br />
      <form>
        <h3 id="blog">New Blog Post</h3>
        <label>
          Season:{" "}
          <input
            type="text"
            name="Season"
            value={season}
            // onSubmit={handleSubmit}
            onChange={handleSeason}
          />
        </label>{" "}
        <br />
        <label>
          Image_URL:{" "}
          <input
            type="text"
            name="Image_URL"
            value={image_URL}
            // onSubmit={handleSubmit}
            onChange={handleImage_URL}
          />
        </label>{" "}
        <br />
        <label>
          Description:{" "}
          <input
            type="text"
            name="Description"
            value={description}
            // onSubmit={handleSubmit}
            onChange={handleDescription}
          />
        </label>{" "}
        <br />
        <label>
          Date:{" "}
          <input
            type="text"
            name="Date"
            value={date}
            // onSubmit={handleSubmit}
            onChange={handleDate}
          />
        </label>{" "}
        <br />
        <br />
        <button id="addblog" onClick={handleSubmit}>
          Add Blog
        </button>
        {/* <h5>
          Player 1: {state.Player_Name} {state.X_or_O}
        </h5> */}
      </form>
    </div>
  );
}
export { Form };
