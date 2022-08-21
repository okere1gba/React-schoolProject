
import * as React from "react";
import "./deathregiistration.css";
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

export default function DeathReg () {
  const myStyles = { padding: "30px 20px", width: 500, margin: "20px auto" };
  const headerStyles = { margin: 0 };
  const avatarStyles = { backgroundColor: "gray" };

  const formStyle = { padding: "20px" };
  const dividerStyles = { backgroundColor: "gray", mt: 6, width: "100%", height: "1px" }

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
            Please fill this Death Registration form correctly
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
              Particulars of the Deceased
            </Typography>
          </Grid>
          <Divider style={dividerStyles} />
          <Grid sx={{ m: 0 }} container>
            <Grid style={setMargin} xs={12}>
              <TextField
                id="standard-basic"
                label="Name of Deceased(Surname First)"
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
                  label="Occupation"
                  variant="standard"
                  sx={{ width: "100%", pl: 0 }}
                />
              </Grid>

              <Grid xs={4}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Marital Status
                  </InputLabel>
                  <NativeSelect
                    defaultValue={1}
                    inputProps={{
                      name: "age",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={1}>Single</option>
                    <option value={2}>Married</option>
                    <option value={3}>Separated</option>
                    <option value={4}>Divorced</option>
                    <option value={5}>Widowed</option>
                   
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
                    control={<Radio/>}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid style={setMargin} xs={4}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label="Date of Death"
                  inputFormat="MM/dd/yyyy"
                  value={value}
                  sx={{ pl: 0, width: "50%" }}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={4} sx={{ mt: 3, width:" 25%"}} align="center">
            <TextField
              id="outlined-number"
              label="Age"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid style={setMargin} sx={{ pl: 0 }} xs={12}>
              <TextField
                id="standard-basic"
                label="State of Origin of Deceased"
                variant="standard"
                sx={{ pl: 0, width: "100%" }}
              />
            </Grid>
            
          </Grid>


          {/* fathers crigdentials*/}
          <Grid sx={{ mt: 6 }} align="center">
            <Typography className="text1" variant="h6">
              Particulars of Informant
            </Typography>
          </Grid>

          <Divider style={dividerStyles} />

          <Grid sx={{ m: 0 }} container>
            <Grid style={setMargin} xs={12}>
              <TextField
                id="standard-basic"
                label="Full Name(Surname First)"
                variant="standard"
                sx={{ pl: 0, width: "100%" }}
              />
            </Grid>
            <Grid style={setMargin} xs={12}>
              <TextField
                id="standard-basic"
                label="Address of Usual PLace of Residence"
                variant="standard"
                sx={{ width: "100%", pl: 0 }}
              />
            </Grid>

            <Grid style={setMargin} sx={{ pl: 0 }} xs={12}>
              <TextField
                id="standard-basic"
                label="Relationship to the Deceased"
                variant="standard"
                sx={{ pl: 0, width: "100%" }}
              />
            </Grid>

            <Grid style={setMargin} sx={{ pl: 0 }} xs={12}>
              <TextField
                id="standard-basic"
                label="State of Origin of Informant"
                variant="standard"
                sx={{ pl: 0, width: "100%" }}
              />
            </Grid>

          </Grid>

          <Grid align="center" style={setMargin} sx={{ pl: 0 }}>
            <Button  sx={{ backgroundColor: "gray"}} variant="contained">Submit Form</Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
}
