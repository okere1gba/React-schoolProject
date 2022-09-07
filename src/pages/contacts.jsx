import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  FormControl,
  OutlinedInput,
  Paper,
  Card,
  Link,
  TextField,
  TextareaAutosize,
} from "@mui/material";

const Contacts = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          margin: "3rem",
          fontSize: 20,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        For more information and inquries Please contact us throuth the
        following Channels
      </Typography>
      <Box
        sx={{
          display: "flex",

          alignItems: "center",
          width: "80%",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        }}
      >
        <Paper
          sx={{
            margin: "0.5rem",
            height: "10rem",
            width: "10rem",
          }}
          elevation={3}
        ></Paper>
        <Paper
          sx={{
            margin: "0.5rem",
            height: "10rem",
            width: "10rem",
          }}
          elevation={3}
        ></Paper>
        <Paper
          sx={{
            margin: "0.5rem",
            height: "10rem",
            width: "10rem",
          }}
          elevation={3}
        ></Paper>
        <Paper
          sx={{
            margin: "0.5rem",
            height: "10rem",
            width: "10rem",
          }}
          elevation={3}
        ></Paper>
      </Box>
      <Paper
        sx={{
          width: { xs: "80vw", sm: "80vw", md: "50vw", lg: "50vw" },
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "2rem",
          justifyContent: "center",
        }}
        elevation={3}
      >
        <Typography sx={{ fontWeight: "bolder", margin: "5rem" }} variant="h4">
          Contact us
        </Typography>

        <FormControl
          sx={{
            borderRadius: 2,
            backgroundColor: "white",
            margin: "1rem 0",
            width: "100%",
          }}
        >
          <OutlinedInput placeholder="Please enter your Name" />
        </FormControl>

        <FormControl
          sx={{
            borderRadius: 2,
            backgroundColor: "white",
            margin: "1rem 0",
            width: "100%",
          }}
        >
          <OutlinedInput placeholder="Please enter a vaild email" />
        </FormControl>

        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Some Added information"
          style={{ width: 500 }}
        />

        <Button sx={{ margin: "0.5rem 1rem" }} variant="contained">
          Submit
        </Button>
      </Paper>
    </Box>
  );
};

export default Contacts;
