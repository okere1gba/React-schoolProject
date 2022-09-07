import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Error = () => {
  return (
    <Box
      sx={{
        background:
          "radial-gradient(circle, rgba(232,227,227,1) 17%, rgba(1,0,11,0.9951330874146533) 52%);",
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
          textShadow: "10px 30px 10px gray",
          fontSize: 200,
          fontWeight: "bolder",
        }}
        varient="h1"
      >
        404
      </Typography>

      <h2>Page Not Found</h2>

      <p>Opps sorry, The Page you are looking for doesn't exist.</p>

      <Button sx={{ margin: "0.5rem 1rem" }} color="error" variant="contained">
        Go back Home page
      </Button>
    </Box>
  );
};

export default Error;
