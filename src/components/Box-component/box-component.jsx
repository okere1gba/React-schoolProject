import React from "react";
import Box from "@mui/material/Box";
import {
  Typography,
  Paper,
  Card,
} from "@mui/material";

import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

import PeopleIcon from "@mui/icons-material/People";
import StoreIcon from "@mui/icons-material/Store";

const BoxContainer = () => {

    const boxStyles1 = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      };
      const paperStyles ={
        background: "linear-gradient(to right bottom, #FCFEF4, #FFFFFF)",
        margin: 2,
        width: "30%",
        height: "100%",
        textAlign: "center"
      }
  return (
    <Box
      style={{
        ...boxStyles1,
        height: "70vh",
        width: "100vw",
        background: "linear-gradient(to right bottom, #FCFEF4, #FFFFFF)",
      }}
    >
      <Box
        style={{
          ...boxStyles1,
          height: "40vh",
          width: "100vw",
          background: "linear-gradient(to right bottom, #FCFEF4, #FFFFFF)",
        }}
      >
        <Card
          style={{
            background: "linear-gradient(to right bottom, #FCFEF4, #FFFFFF)",
            display: "flex",
            flexWrap: "wrap",
            width: "50vw",
            height: "35vh",
            justifyContent: "space-evenly",
          }}
        >
          <Paper
            elevation={0}
            style={paperStyles}
          >
            <div style={boxStyles1}>
              <StoreIcon style={{ fontSize: 60 }} />
            </div>
            <Typography variant="h5">Customizable templates</Typography>
            <Typography variant="body1" style={{ marginTop: 15, padding: 4 }}>
              Free website designs to launch your store quickly and easily.
            </Typography>
          </Paper>

          <Paper
            elevation={0}
            style={paperStyles}
          >
            <div style={boxStyles1}>
              <CardGiftcardIcon style={{ fontSize: 60 }} />
            </div>
            <Typography variant="h5">All in one</Typography>
            <Typography variant="body1" style={{ marginTop: 15, padding: 4 }}>
              Shopify takes care of everything from marketing and payments to
              secure transactions and shipping.
            </Typography>
          </Paper>

          <Paper
            elevation={0}
            style={paperStyles}
          >
            <div style={boxStyles1}>
              <PeopleIcon style={{ fontSize: 60 }} />
            </div>

            <Typography variant="h5">A safe and efficient platform</Typography>
            <Typography variant="body1" style={{ marginTop: 15, padding: 4 }}>
              Millions of users trust Shopify to manage their online stores.
            </Typography>
          </Paper>
        </Card>
      </Box>
    </Box>
  );
};

export default BoxContainer;
