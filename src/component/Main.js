import React, { useState } from "react";
import Nav from "./nav";
import Search from "./search";
import Tag from "./tag";
const Main = () => {
  const [videos, setVideos] = useState([]);

  return (
    <div>
      <Nav />
      <Search setVideos={setVideos} />
      <Tag videos={videos} />
    </div>
  );
};

export default Main;
