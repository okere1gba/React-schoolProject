import React from "react";
import Box from "@mui/material/Box";

import {
  Typography,
  Grid,
  Button,
  FormControl,
  OutlinedInput,
  Paper,
  Card,
  createTheme,
} from "@mui/material";

import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

import PeopleIcon from "@mui/icons-material/People";
import StoreIcon from "@mui/icons-material/Store";
import useStyles from "./styles";
import clsx from "clsx";
import { ThemeProvider, useTheme } from "@emotion/react";
import { height } from "@mui/system";

const Home = () => {
  // usetate first
  // usehoooks
  // event handles
  const classes = useStyles();

  return (
    <>
      <Box className={classes.headerBox}>
        <Box className={clsx(classes.flexColumn, classes.headerinner)}>
          <Box
            sx={{ textAlign: "center", display: "flex", flexDirection: "row" }}
          >
            <Box>
              <AddBusinessIcon sx={{ fontSize: 100 }} />
            </Box>

            <Box
              sx={{
                padding: "2rem 0",
                textAlign: "center",
              }}
            >
              <Typography sx={{ fontSize: 30 }}>QOS Market Place</Typography>
            </Box>
          </Box>

          <Box className={classes.headerBoxText}>
            <Typography
              variant="h1"
              className={classes.typography}
              sx={{ fontSize: { xs: 50, sm: 50, md: 50, lg: 70, xl: 100 } }}
            >
              Build your dream business for $1/month
            </Typography>
            <Box>
              <Typography variant="h5" className={classes.typography}>
                Start strong and grow with confidence. For a limited time, sign
                up for a free trial and enjoy 3 months of Shopify for $1/month
                on select plans—offer ends 08/25.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                },
                height: "100%",
                margin: "2rem 0",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormControl
                sx={{
                  borderRadius: 2,
                  backgroundColor: "white",
                  margin: "1remrem 0",
                  width: "20rem",
                }}
              >
                <OutlinedInput placeholder="Please enter text" />
              </FormControl>
              <Button
                sx={{
                  margin: "0.5rem 1rem",
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  border: 0,

                  borderRadius: 3,
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  color: "white",
                  height: "3.5rem",
                  width: "10rem",
                }}
                variant="contained"
              >
                Start free trial
              </Button>
            </Box>

            <Box>
              <Typography variant="body2" className={classes.typography}>
                Start strong and grow with confidence. For a limited time, sign
                up for a free trial and enjoy 3 months of Shopify for $1/month
                on select plans—offer ends 08/25.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            margin: {
              xs: "3rem 0",
              sm: "3rem 12rem",
              md: "3rem 6rem",
              lg: "3rem 12rem",
            },
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
            backgroundImage:
              "linear-gradient(to right bottom, #FCFEF4, #FFFFFF)",
          }}
        >
          <Box className={classes.cardBoxStyles}>
            <div className={classes.cardIconstyles}>
              <StoreIcon fontSize="6rem" className={classes.cardIconFont} />
            </div>
            <Typography variant="h5">Customizable templates</Typography>
            <Typography variant="body1" className={classes.typography2}>
              Free website designs to launch your store quickly and easily.
            </Typography>
          </Box>
          <Box className={classes.cardBoxStyles}>
            <div className={classes.cardIconstyles}>
              <CardGiftcardIcon
                fontSize="6rem"
                className={classes.cardIconFont}
              />
            </div>
            <Typography variant="h5">All in one</Typography>
            <Typography variant="body1" className={classes.typography2}>
              Shopify takes care of everything from marketing and payments to
              secure transactions and shipping.
            </Typography>
          </Box>
          <Box className={classes.cardBoxStyles}>
            <div className={classes.cardIconstyles}>
              <PeopleIcon fontSize="6rem" className={classes.cardIconFont} />
            </div>

            <Typography variant="h5">A safe and efficient platform</Typography>
            <Typography variant="body1" className={classes.typography2}>
              Millions of users trust Shopify to manage their online stores.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#0F2D25",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        }}
      >
        <Box>
          <Typography variant="h3" className={classes.typography}>
            Build your dream business for $1/month
          </Typography>
          <Box>
            <Typography variant="body1" className={classes.typography}>
              Start strong and grow with confidence. For a limited time, sign up
              for a free trial and enjoy 3 months of Shopify for $1/month on
              select plans—offer ends 08/25.
            </Typography>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              margin: "1rem 2rem",
              justifyContent: "center",
            }}
          >
            <Box>
              <FormControl
                sx={{
                  borderRadius: 2,
                  backgroundColor: "white",
                  margin: "0 8px",
                  width: "20rem",
                }}
              >
                <OutlinedInput placeholder="Please enter text" />
              </FormControl>
            </Box>
            <Box>
              <Button
                sx={{
                  margin: "0.5rem 1rem",
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  border: 0,

                  borderRadius: 3,
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  color: "white",
                  height: "3.5rem",
                  width: "10rem",
                }}
                variant="contained"
              >
                Start free trial
              </Button>
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{ color: "white", textAlign: "center", padding: "2rem" }}
              variant="body2"
            >
              Start strong and grow with confidence. For a limited time, sign up
              for a free trial and enjoy 3 months of Shopify for $1/month on
              select plans—offer ends 08/25.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Home;
