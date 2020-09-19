import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import axios from "axios";

const Search = ({ setVideos }) => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const searchButtonClick = (e) => {
    const url =
      "https://www.googleapis.com/youtube/v3/search?maxResults=100000&order=relevance&q=" +
      keyword +
      "&videoType=any&key=AIzaSyDv39NYwKF33F9NKbFjcFur43JttKlOZjs";

    console.log(url);
    axios
      .get(url)
      .then((response) => {
        const items = response.data.items.filter((item) => item.id.videoId);

        const videos = [];
        items.map((item) => {
          videos.push(item.id.videoId);
        });

        // var json = JSON.stringify(videos);
        // console.log(json);

        setVideos(videos);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <TextField
        style={{ marginTop: 150, width: "50%" }}
        label="Search Keyword"
        variant="standard"
        name="keyword"
        value={keyword}
        onChange={handleChange}
      />

      <Button
        style={{ marginTop: 152, height: 50, marginLeft: 20 }}
        variant="contained"
        color="primary"
        onClick={searchButtonClick}
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
