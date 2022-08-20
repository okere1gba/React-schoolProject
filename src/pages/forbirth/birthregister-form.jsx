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

export default function BirthForm() {
  const myStyles = { padding: "30px 20px", width: 500, margin: "20px auto" };
  const headerStyles = { margin: 0 };
  const avatarStyles = { backgroundColor: "#1976D2" };

  const formStyle = { padding: "20px" };

  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const setMargin = { marginTop: 30, padding: 0 };

  return (
    <Grid sx={{ bgColor: "gray" }}>
      <Paper elevation={10} style={myStyles}>
        <Grid align="center">
          <Avatar style={avatarStyles}>
            <AppRegistrationIcon />
          </Avatar>
          <h2 style={headerStyles}> Please register</h2>
          <Typography variant="caption">
            Please fill this Brith Registertion form correctly
          </Typography>
        </Grid>

        <form style={formStyle}>
          <Grid item xs={4} sx={{ mt: 3 }} align="center">
            <TextField
              id="outlined-number"
              label="Registration ID"
              type="number"
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
          <Divider />
          <Grid sx={{ m: 0 }} container>
            <Grid style={setMargin} xs={12}>
              <TextField
                id="standard-basic"
                label="Childs Name(Surname First)"
                variant="standard"
                sx={{ pl: 0, width: "100%" }}
              />
            </Grid>
            <Grid
              container
              direction={"row"}
              sx={{ mt: 3, justifyContent: "space-between" }}
            >
              <Grid xs={6}>
                <TextField
                  id="standard-basic"
                  label="Place of Birth"
                  variant="standard"
                  sx={{ width: "100%", pl: 0 }}
                />
              </Grid>

              <Grid xs={4}>
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
              </Grid>
            </Grid>

            <Grid style={setMargin} sx={{ pl: 0 }} xs={8}>
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
            </Grid>

            <Grid style={setMargin} xs={4}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label="Date of Birth"
                  inputFormat="MM/dd/yyyy"
                  value={value}
                  sx={{ pl: 0, width: "50%" }}
                  onChange={handleChange}
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

          <Divider sx={{ mt: 6, width: "100%" }} />

          <Grid sx={{ m: 0 }} container>
            <Grid style={setMargin} xs={12}>
              <TextField
                id="standard-basic"
                label="Fathers Name(Surname First)"
                variant="standard"
                sx={{ pl: 0, width: "100%" }}
              />
            </Grid>
            <Grid style={setMargin} xs={12}>
              <TextField
                id="standard-basic"
                label="Address"
                variant="standard"
                sx={{ width: "100%", pl: 0 }}
              />
            </Grid>

            <Grid style={setMargin} sx={{ pl: 0 }} xs={12}>
              <TextField
                id="standard-basic"
                label="State of Origin"
                variant="standard"
                sx={{ pl: 0, width: "100%" }}
              />
            </Grid>
          </Grid>
          {/* mothers crigdentials*/}
          <Grid sx={{ mt: 6 }} align="center">
            <Typography className="text1" variant="h6">
              Mothers Cridentials
            </Typography>
          </Grid>

          <Divider sx={{ mt: 6, width: "100%" }} />

          <Grid sx={{ m: 0 }} container>
            <Grid style={setMargin} xs={12}>
              <TextField
                id="standard-basic"
                label="Mothers Name(Surname First)"
                variant="standard"
                sx={{ pl: 0, width: "100%" }}
              />
            </Grid>

            <Grid
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
            </Grid>

            <Grid style={setMargin} sx={{ pl: 0 }} xs={12}>
              <TextField
                id="standard-basic"
                label="State of Origin"
                variant="standard"
                sx={{ pl: 0, width: "100%" }}
              />
            </Grid>
          </Grid>

          <Grid align="center" style={setMargin} sx={{ pl: 0 }}>
            <Button variant="contained">Submit Form</Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
}
