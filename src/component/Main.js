import React, { useState } from "react";
import Nav from "./nav";
import Search from "./search";
import { Box, Typography } from "@material-ui/core";
import Tag from "./tag";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import bg1 from "../image/bg1.png";
const Main = () => {
  const [tags, setTags] = useState([]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      style={{ width: "100%", height: "85vh" }}
    >
      <Nav />
      <Box display="flex" flexGrow="1" style={{ padding: 10 }}>
        <Box
          display="flex"
          style={{ width: "100%", height: "100%", backgroundColor: "white" }}
        >
          <Box
            display="flex"
            flexDirection="column"
            style={{ width: "50%", height: "100%" }}
          >
            <Box display="flex" justifyContent="center">
              <img src={bg1} alt="Logo" style={{ width: 300, height: 300 }} />
            </Box>

            <Typography style={{ padding: 10 }}>
              Adding tag on your youtube channels video is one of the most
              common and important thing. you have to to do it if you want to
              grow up your channel by increasing traffic on your videos. you
              know youtube is the second largest search engine and tags are the
              main ranking factor. when users type any keyword thats are related
              to your tags, then your video will appear in their search results.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            style={{ width: "50%", height: "100%" }}
          >
            <Search setTags={setTags} />
            <Tag tags={tags} />
          </Box>
        </Box>
      </Box>

      {/* <Search setTags={setTags} />
      <Tag tags={tags} /> */}
    </Box>
  );
};

export default Main;
