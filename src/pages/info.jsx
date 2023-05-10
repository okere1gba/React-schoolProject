import {
  Avatar,
  Grid,
  Paper,
  Typography,
  TextField,
  Divider,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import npcContract from "../blockchain/localcontract";
import { useState, useEffect } from "react";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import Web3 from "web3";

const Info = () => {
  const [userId, setuserId] = useState(0);
  const [result, setresult] = useState("");
  const [resultData, setresultData] = useState(false);
  const [loading, setloading] = useState(false);
  // useEffect(() => {
  //   getMassageHandler();
  // }, []);

  const getIndividualHandler = async () => {
    // const account = await web3.eth.getAccounts()
    setloading(true);
    try {
      const myinfo = await npcContract.methods.getidividual(userId).call();
      setresult(myinfo);
      setresultData(true);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  // const value = result[1];
  // console.log("outputing....", value);

  const inputHandler = (event) => {
    setuserId(event.target.value);
  };

  // console.log(userId);

  const avatarStyles = { backgroundColor: "green" };
  const headerStyles = { margin: 0 };
  return (
    <>
      <Box
        sx={{
          height: "55vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        align="center"
      >
        <Box
          sx={{
            width: "20rem",
            height: "50rem",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid align="center">
            <Typography variant="h5">Retrieve Your Records</Typography>
            <Avatar style={avatarStyles}>
              <FamilyRestroomIcon />
            </Avatar>

            {/* <Typography variant="caption">
            Please fill in your data identity to retrive your stored data
          </Typography> */}
          </Grid>

          <TextField
            id="standard-basic"
            label="Record ID Number"
            variant="standard"
            onChange={inputHandler}
            sx={{ pl: 0, width: "50%" }}
          />
          <Button
            onClick={getIndividualHandler}
            sx={{
              marginTop: "1rem",
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            }}
            variant="contained"
          >
            {loading ? <CircularProgress size={25} /> : "Retrive Records"}
          </Button>
        </Box>
      </Box>

      {resultData ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TableContainer component={Paper} sx={{ margin: "4rem" }}>
            <Typography variant="h6" align="center">
              Your Blockchain Records
            </Typography>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell align="left">Childs Name</TableCell>
                  <TableCell align="left">{result[0]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Fathers Name</TableCell>
                  <TableCell align="left">{result[1]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Mothers Name</TableCell>
                  <TableCell align="left">{result[2]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Date of Registration</TableCell>
                  <TableCell align="left">{result[3]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Hospital of Registration </TableCell>
                  <TableCell align="left">{result[4]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Place of Birth</TableCell>
                  <TableCell align="left">{result[5]}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Local Goverment of Origin</TableCell>
                  <TableCell align="left">{result[6]}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">
            Please make a request with your ID
          </Typography>
        </Box>
      )}
    </>
  );
};
export default Info;
