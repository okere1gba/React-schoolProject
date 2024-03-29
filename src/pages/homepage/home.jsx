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
  Link,
} from "@mui/material";

import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";

import PeopleIcon from "@mui/icons-material/People";
import StoreIcon from "@mui/icons-material/Store";
import useStyles from "./styles";
import clsx from "clsx";
import { ThemeProvider, useTheme } from "@emotion/react";
import { height } from "@mui/system";
import Web3 from "web3";

const Home = () => {
  // usetate first
  // usehoooks
  // event handles
  const classes = useStyles();

  let web3;

  const connectWalletHandler = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        web3 = new Web3(window.ethereum);
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("Please install Metamask");
    }
  };

  return (
    <>
      <Box className={classes.headerBox}>
        <Box className={clsx(classes.flexColumn, classes.headerinner)}>
          <Box
            sx={{
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
              },
            }}
            className={classes.mainIconBox}
          >
            <Box>
              <EscalatorWarningIcon
                sx={{
                  textAlign: "center",
                  fontSize: 50,
                }}
              />
            </Box>

            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: 27, sm: 27, md: 27, lg: 25, xl: 25 },
                  fontFamily: "'Courgette', cursive;",
                }}
              >
                Birth Registration
              </Typography>
            </Box>
          </Box>

          <Box className={classes.headerBoxText}>
            <Typography
              variant="h1"
              className={classes.typography}
              sx={{
                fontWeight: "bold",
                fontSize: { xs: 40, sm: 40, md: 50, lg: 70, xl: 70 },
                marginTop: "3rem",
              }}
            >
              A Decentralized registration portal
            </Typography>
            <Box sx={{ marginTop: "3rem" }}>
              <Typography
                sx={{ fontSize: { xs: 17, sm: 17, lg: 25, xl: 25 } }}
                variant="h5"
                className={classes.typography}
              >
                Ensure immutability with your birth records, with blockchain
                technology
              </Typography>
            </Box>

            <Box
              sx={{
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                },
              }}
              className={classes.middleContainer}
            >
              {/* <FormControl
                sx={{
                  borderRadius: 2,
                  backgroundColor: "white",
                  margin: "1remrem 0",
                  width: "20rem",
                }}
              >
                <OutlinedInput placeholder="Please enter your email" />
              </FormControl> */}
              <Button
                sx={{ margin: "0.5rem 1rem" }}
                className={classes.buttonStyles}
                variant="contained"
                onClick={connectWalletHandler}
              >
                Connect wallet
              </Button>
            </Box>

            <Box sx={{ marginBottom: "3rem" }}>
              <Typography sx={{ fontSize: 13 }} className={classes.typography}>
                Connect with you crypto wallet and upload your data
                <br />
                <Link href="#" color="inherit">
                  View our terms and conditions
                </Link>
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
          }}
          className={classes.centerBox}
        >
          <Box className={classes.cardBoxStyles}>
            <div className={classes.cardIconstyles}>
              <EscalatorWarningIcon
                color="success"
                fontSize="6rem"
                className={classes.cardIconFont}
              />
            </div>
            <Typography variant="h5">Project Title</Typography>
            <Typography variant="body1" className={classes.typography2}>
              Project on A prototype system for birth and death registration
              using blockchain technology
            </Typography>
          </Box>
          <Box className={classes.cardBoxStyles}>
            <div className={classes.cardIconstyles}>
              <CardGiftcardIcon
                color="success"
                fontSize="6rem"
                className={classes.cardIconFont}
              />
            </div>
            <Typography variant="h5">The scope of our study</Typography>
            <Typography variant="body1" className={classes.typography2}>
              The scope of our study will be limited to building a prototype
              system design that will makes a decentralized birth and death
              registration process possible.
            </Typography>
          </Box>
          <Box className={classes.cardBoxStyles}>
            <div className={classes.cardIconstyles}>
              <PeopleIcon
                color="success"
                fontSize="6rem"
                className={classes.cardIconFont}
              />
            </div>

            <Typography variant="h5">What is a smart contract?</Typography>
            <Typography variant="body1" className={classes.typography2}>
              A smart contract is an agreement between two people or entities in
              the form of computer code, programmed to execute automatically.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
          }}
        >
          <Box>
            <Typography variant="h4">
              Building a decentralized system for birth registration.
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ marginTop: "2rem" }} variant="body1">
              Project on A prototype system for birth and death registration
              using blockchain technology
            </Typography>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "2rem",
              justifyContent: "center",
              padding: "0 3rem",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
              },
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
                <OutlinedInput placeholder="Please enter your email" />
              </FormControl>
            </Box>
            <Box>
              <Button
                sx={{ margin: "0.5rem 1rem" }}
                className={classes.buttonStyles}
                variant="contained"
              >
                Start free trial
              </Button>
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{
                color: "white",
                textAlign: "center",
                padding: "0.5rem 2rem",
              }}
              variant="body2"
            >
              Sign up with QOS for free, also you can <br />
              <Link href="#" color="inherit">
                View our terms and conditions
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Home;
