import React, { useState } from "react";

import { Box, TextField, InputAdornment, IconButton } from "@material-ui/core";
import axios from "axios";

import { Search as SearchIcon, Clear } from "@material-ui/icons";

const url = "https://forbit.tech/api/api/tags";

const Search = ({ setTags }) => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const searchButtonClick = (e) => {
    const data = { query: keyword };

    axios
      .post(url, data)
      .then((response) => {
        setTags(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchButtonClick();
    }
  };

  return (
    <TextField
      id="input-with-icon-textfield"
      name="keyword"
      value={keyword}
      onChange={handleChange}
      variant="outlined"
      fullWidth
      onKeyDown={handleKeyDown}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={searchButtonClick}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setKeyword("")}>
              <Clear />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
