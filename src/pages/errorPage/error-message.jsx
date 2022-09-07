import { Box, Typography, Button } from "@mui/material";

import React from "react";

const ErrorMessage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",

        height: "100vh",
        textAlign: "center",
        padding: {
          xs: "3rem 0",
          sm: "3rem 12rem",
          md: "3rem 6rem",
          lg: "3rem 12rem",
        },
      }}
    >
      <Typography
        sx={{
          textShadow: "10px 25px 10px gray",
          fontSize: {
            xs: 50,
            sm: 50,
            md: 200,
            lg: 200,
          },
          fontWeight: "bolder",
        }}
        varient="h1"
      >
        \(^=^)/
      </Typography>

      <h2>Page Not Found</h2>

      <p>Opps sorry, The Page you are looking for was not found </p>

      <Button sx={{ margin: "0.5rem 1rem" }} color="error" variant="contained">
        Go back Home page
      </Button>
    </Box>
  );
};

export default ErrorMessage;
