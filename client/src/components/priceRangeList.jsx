import React from "react";
import { Typography, List, ListItem } from "@mui/material";
import { v4 as uuid } from "uuid";

const PriceRangeList = ({ items }) => {
  return (
    <>
      <Typography variant="body1">Price ranges:</Typography>
      <List
        sx={{
          listStyleType: "disc",
          paddingLeft: "16px",
          "& .MuiListItem-root": {
            display: "list-item",
          },
        }}
      >
        {items.map((item) => {
          return (
            <ListItem
              key={uuid()}
              sx={{
                paddingLeft: 0,
              }}
            >
              {item}
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default PriceRangeList;
