import React from "react";
import { Typography, List, ListItem } from "@mui/material";
import { v4 as uuid } from "uuid";

const PriceRangeList = ({ items }) => {
  return (
    <>
      <Typography variant="caption">Price ranges:</Typography>
      <List
        sx={{
          listStyleType: "disc",
          paddingLeft: "28px",
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
                padding: 0,
              }}
            >
              <Typography variant="caption">{item}</Typography>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default PriceRangeList;
