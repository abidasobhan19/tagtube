import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";

const Tag = ({ tags }) => {
  //   console.log(videos);

  const [value, setValue] = useState("");

  const handleChange = (e) => {};

  useEffect(() => setValue(getValuesFromVideo()), [tags]);

  const getValuesFromVideo = () => {
    let ttt = "";
    tags.map((item) => {
      ttt = ttt + item + "\n";
    });

    return ttt;
  };

  return (
    <Box display="flex" flexDirection="column" flexGrow="1">
      <Typography variant="h6">Generated Tags</Typography>

      <Box display="flex" flexGrow="1">
        <textarea
          style={{ width: "100%", height: "100%" }}
          label="Message:"
          value={value}
          onChange={handleChange}
        ></textarea>
      </Box>
    </Box>
  );
};

export default Tag;
