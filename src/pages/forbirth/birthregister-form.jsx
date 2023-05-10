import * as React from "react";
import "./birth.css";
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
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import { useState, useEffect } from "react";
import npcContract from "../../blockchain/localcontract";
import Web3 from "web3";

export default function BirthForm() {
  const myStyles = { padding: "30px 20px", width: 500, margin: "20px auto" };
  const headerStyles = { margin: 0 };
  const avatarStyles = { backgroundColor: "green" };
  // const [userId, setuserId] = useState(0);
  const [result, setresult] = useState("");

  const [empid, setempid] = useState(Number);
  const [name, setname] = useState("");
  const [hospitalRegistered, sethospitalRegistered] = useState("");
  const [placeOfbirth, setplaceOfbirth] = useState("");
  const [fatherName, setfatherName] = useState("");
  const [motherName, setmotherName] = useState("");
  const [lga, setlga] = useState("");
  const [value, setValue] = useState(new Date("2022-12-15T21:11:54"));

  // for web3 state

  const [web3, setWeb3] = useState(null);
  const [Address, setAddress] = useState("");
  // const [npcContract, setnpcContract] = useState(null);
  const [showForm, setShowForm] = useState(true);
  const [loading, setloading] = useState(false);

  // console.log(
  //   empid,
  //   name,
  //   value,
  //   hospitalRegistered,
  //   placeOfbirth,
  //   placeOfbirth,
  //   fatherName,
  //   motherName,
  //   lga
  // );
  const inputHandlerforEmpid = (event) => {
    setempid(event.target.value);
  };
  const inputHandlerforName = (event) => {
    setname(event.target.value);
  };
  // const inputHandler3 = (event) => {
  //   setdateRegistered(event.target.value);
  // };

  const inputHandlerforHospitalRegistered = (event) => {
    sethospitalRegistered(event.target.value);
  };
  const inputHandlerforPlaceofBirth = (event) => {
    setplaceOfbirth(event.target.value);
  };

  const inputHandlerforFathersName = (event) => {
    setfatherName(event.target.value);
  };

  const inputHandlerforMothersName = (event) => {
    setmotherName(event.target.value);
  };
  const inputHandlerforLga = (event) => {
    setlga(event.target.value);
  };

  const formStyle = { padding: "20px" };
  const dividerStyles = {
    backgroundColor: "green",
    mt: 6,
    width: "100%",
    height: "1px",
  };

  const connectWalletHandler = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        setWeb3(web3);
        setShowForm(false);
        // get list of accounts
        // creating local contract copy
        // const localcontract = localnpcContracts(web3);
        // setnpcContract(localcontract);
      } catch (err) {
        if (err.message === "Assignment to constant variable.") {
          alert("Please continue,You are Signed in");
        }
      }
    } else {
      alert("Please install Metamask");
    }
  };
  // useEffect(() => {
  //   getMassageHandler();
  // }, []);
  // console.log("web3..", web3);
  const AddIndividualHandler = async () => {
    setloading(true);

    const account = await web3.eth.getAccounts();

    // console.log("hhhhh.....", account[0]);

    await npcContract.methods
      .addindividual(
        empid,
        name,
        value,
        hospitalRegistered,
        placeOfbirth,
        fatherName,
        motherName,
        lga
      )
      .send({
        from: account[0],
        gas: 2500000,
      })
      .on("transactionHash", function () {
        console.log("Hash");
      })
      .on("receipt", function () {
        console.log("Receipt");
      })
      .on("confirmation", function () {
        console.log("Confirmed");
      })
      .on("error", async function () {
        alert("Uploaded completed");
        setloading(false);
      });

    //   const myinfo = await npcContract.methods
    //     .addindividual(
    //       empid,
    //       name,
    //       value,
    //       hospitalRegistered,
    //       placeOfbirth,
    //       fatherName,
    //       motherName,
    //       lga
    //     )
    //     .send({ from: Address });
    //   // console.log("3");
    //   // console.log("Data::::: ", myinfo);
    // } catch (err) {
    //   setError(err.message);
    // }
  };

  // const inputHandler = (event) => {
  //   setuserId(event.target.value);
  // };

  // console.log("result::::", Address);
  // const connect = async () => {
  //   const account = await web3.eth.getAccounts();
  //   console.log("hhhhh.....", account[0]);
  // };
  // connect();
  const [newmessage, setnewmessage] = useState("");

  useEffect(() => {
    getMassageHandler();
  }, []);

  const getMassageHandler = async () => {
    const message = await npcContract.methods.mymassage().call();
    setnewmessage(message);
  };

  // console.log("blockchain message", newmessage);

  const handleChangeforDate = (newValue) => {
    setValue(newValue);
  };
  const setMargin = { marginTop: 30, padding: 0 };

  return (
    <>
      <Grid sx={{ bgColor: "gray" }}>
        <Paper elevation={10} style={myStyles}>
          {showForm ? (
            <Grid align="center">
              <Typography variant="h5">{newmessage}</Typography>
              <Typography variant="body2">
                Thanks for using our birth registration portal. <br /> Please
                connect your wallet to get started
              </Typography>
              <Button
                sx={{
                  margin: "0.5rem 1rem",
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  borderRadius: "1rem",
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  color: "white",
                  height: "3.5rem",
                  width: "10rem",
                }}
                variant="contained"
                onClick={connectWalletHandler}
              >
                Connect wallet
              </Button>
            </Grid>
          ) : (
            <Box>
              <Grid item xs={4} sx={{ mt: 3 }} align="center">
                <Avatar style={avatarStyles}>
                  <AppRegistrationIcon />
                </Avatar>
                <Box sx={{ margin: "1rem 0rem" }}>
                  <h2 style={headerStyles}> Please register</h2>
                  <Typography variant="caption">
                    Please fill this Brith Registertion form correctly
                  </Typography>
                </Box>

                <TextField
                  id="outlined-number"
                  label="Registration ID"
                  type="number"
                  onChange={inputHandlerforEmpid}
                  helperText="Get ID from Birth Center"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              {/* childs crigdentials*/}
              <Grid align="center">
                <Typography sx={{ mt: 3 }} variant="h6">
                  Childs Cridentials
                </Typography>
              </Grid>
              <Divider style={dividerStyles} />
              <Grid sx={{ m: 0 }} container>
                <Grid style={setMargin} xs={12}>
                  <TextField
                    id="standard-basic"
                    label="Childs Name(Surname First)"
                    variant="standard"
                    onChange={inputHandlerforName}
                    sx={{ marginBottom: "1rem", pl: 0, width: "100%" }}
                  />
                </Grid>
                <Grid xs={12}>
                  <TextField
                    id="standard-basic"
                    label="Hospital Registered"
                    onChange={inputHandlerforHospitalRegistered}
                    variant="standard"
                    sx={{ width: "100%", pl: 0 }}
                  />
                </Grid>
                <Grid
                  container
                  direction={"row"}
                  sx={{ mt: 3, justifyContent: "space-between" }}
                >
                  <Grid xs={12}>
                    <TextField
                      id="standard-basic"
                      label="Place of Birth"
                      onChange={inputHandlerforPlaceofBirth}
                      variant="standard"
                      sx={{ width: "100%", pl: 0 }}
                    />
                  </Grid>

                  {/* <Grid xs={4}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Type of Birth
                  </InputLabel>
                  <NativeSelect
                    defaultValue={1}
                    inputProps={{
                      name: "age",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={1}>Single</option>
                    <option value={2}>Mutiple</option>
                  </NativeSelect>
                </FormControl>
              </Grid> */}
                </Grid>

                {/* <Grid style={setMargin} sx={{ pl: 0 }} xs={8}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </Grid> */}

                <Grid style={setMargin} xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="Date of Birth"
                      inputFormat="MM/dd/yyyy"
                      value={value}
                      sx={{ pl: 0, width: "50%" }}
                      onChange={handleChangeforDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
              {/* fathers crigdentials*/}
              <Grid sx={{ mt: 6 }} align="center">
                <Typography className="text1" variant="h6">
                  Fathers Cridentials
                </Typography>
              </Grid>

              <Divider style={dividerStyles} />

              <Grid sx={{ m: 0 }} container>
                <Grid style={setMargin} xs={12}>
                  <TextField
                    id="standard-basic"
                    label="Fathers Name(Surname First)"
                    onChange={inputHandlerforFathersName}
                    variant="standard"
                    sx={{ pl: 0, width: "100%" }}
                  />
                </Grid>

                {/* <Grid style={setMargin} sx={{ pl: 0 }} xs={12}>
            <TextField
              id="standard-basic"
              label="State of Origin"
              onChange={inputHandler8}
              variant="standard"
              sx={{ pl: 0, width: "100%" }}
            />
          </Grid> */}
              </Grid>
              {/* mothers crigdentials*/}
              <Grid sx={{ mt: 6 }} align="center">
                <Typography className="text1" variant="h6">
                  Mothers Cridentials
                </Typography>
              </Grid>

              <Divider style={dividerStyles} />

              <Grid sx={{ m: 0 }} container>
                <Grid style={setMargin} xs={12}>
                  <TextField
                    id="standard-basic"
                    label="Mothers Name(Surname First)"
                    onChange={inputHandlerforMothersName}
                    variant="standard"
                    sx={{ pl: 0, width: "100%" }}
                  />
                </Grid>

                {/* <Grid
            container
            direction={"row"}
            sx={{ mt: 3, justifyContent: "space-between" }}
          >
            <Grid xs={6}>
              <TextField
                id="standard-basic"
                label="Address"
                variant="standard"
                sx={{ width: "100%", pl: 0 }}
              />
            </Grid>
            <Grid xs={4}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Marrital Satus
                </InputLabel>
                <NativeSelect
                  defaultValue={2}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={1}>Single</option>
                  <option value={2}>Married</option>
                  <option value={3}>Divoriced</option>
                  <option value={4}>Separated</option>
                  <option value={5}>Widowed</option>
                </NativeSelect>
              </FormControl>
            </Grid>
          </Grid> */}
              </Grid>

              <Grid sx={{ mt: 6 }} align="center">
                <Typography className="text1" variant="h6">
                  Other Info
                </Typography>
              </Grid>

              <Divider style={dividerStyles} />
              <Grid style={setMargin} sx={{ pl: 0 }} xs={12}>
                <TextField
                  id="standard-basic"
                  label="State of Origin"
                  onChange={inputHandlerforLga}
                  variant="standard"
                  sx={{ pl: 0, width: "100%" }}
                />
              </Grid>
              <Grid align="center" style={setMargin} sx={{ pl: 0 }}>
                <Button
                  onClick={AddIndividualHandler}
                  sx={{
                    marginTop: "1rem",
                    background:
                      "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  }}
                  variant="contained"
                >
                  {loading ? <CircularProgress size={25} /> : "Submit Form"}
                </Button>

                {/* <Button
                  onClick={AddIndividualHandler}
                  sx={{ backgroundColor: "green" }}
                  variant="contained"
                >
                  Submit Form
                </Button> */}
              </Grid>
            </Box>
          )}
        </Paper>
      </Grid>
    </>
  );
}
