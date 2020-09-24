import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import { Fragment } from "react";
import axios from "axios";

const Tag = ({ tags }) => {
  //   console.log(videos);

  const [myTags, setMyTags] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {};

  useEffect(() => setValue(getValuesFromVideo()), [tags]);

  // useEffect(() => {
  //   if (videos.length > 0) {
  //     videos.map((item) => {
  //       const url =
  //         "https://www.googleapis.com/youtube/v3/videos?part=contentDetails&part=snippet&part=id&id=" +
  //         item +
  //         "&key=AIzaSyDv39NYwKF33F9NKbFjcFur43JttKlOZjs";

  //       axios
  //         .get(url)
  //         .then((response) => {
  //           const item = response.data.items[0];

  //           if (item) {
  //             const tags = item.snippet.tags;

  //             if (tags) {
  //               setMyTags((old) => [...old, tags]);
  //             }
  //           }
  //         })
  //         .catch((err) => console.log(err));
  //     });
  //   }
  // }, [videos]);

  const getValuesFromVideo = () => {
    let ttt = "";
    tags.map((item) => {
      ttt = ttt + item + "\n";
    });

    return ttt;
    // let video = "";
    // videos.map((item) => {
    //   video = video + item;
    //   console.log(video);
    //   const url =
    //     "https://www.googleapis.com/youtube/v3/videos?part=contentDetails&part=snippet&part=id&id=" +
    //     videos +
    //     "&key=AIzaSyDv39NYwKF33F9NKbFjcFur43JttKlOZjs";
    //   console.log(url);
    //   axios.get(url).then((response) => {
    //     const items = response.data.items;
    //     items.map((item) => {
    //       const tags = item.snippet.tags;
    //       let text = "";
    //       if (tags) {
    //         tags.map((tag) => {
    //           text = text + tag + "\n";
    //           console.log(text);
    //         });
    //       }
    //       return text;
    //     });
    //   });
    // });
  };

  // const getTagFromVideo = (video) => {
  //   const url =
  //     "https://www.googleapis.com/youtube/v3/videos?part=contentDetails&part=snippet&part=id&id=" +
  //     videos +
  //     "&key=AIzaSyDv39NYwKF33F9NKbFjcFur43JttKlOZjs";

  //    axios
  //    .get(url)
  //     .then((response) => {
  //       const items = response.data.items;

  //       items.map((item) => {
  //         const tags = item.snippet.tags;

  //         let text = "gdfgfdgdfg";
  //         tags.map((tag) => {
  //           text = text + tag + "\n";
  //         });

  //          console.log(tags);

  //   });

  //     .catch((err) => console.log(err));

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
