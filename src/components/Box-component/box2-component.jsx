import React from "react";
import Box from "@mui/material/Box";
import {
  Typography,
  Grid,
  Button,
  FormControl,
  OutlinedInput,
  Paper,
} from "@mui/material";

import AddBusinessIcon from "@mui/icons-material/AddBusiness";

const ContainerInfo = () => {
  const paperBoxStyles = {
    display: "flex",
    border: "5px solid",
    height: "30vh",
    width: "50%",
    alignItems: "center",
    borderRadius: 10,
  };

  return (
    <>
      <Box
        style={{
          backgroundColor: "#0F2D25",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box style={paperBoxStyles}>
          <Box style={{ margin: "0 50px" }}>
            <Typography variant="h3" align="center" style={{ color: "white" }}>
              Build your dream business for $1/month
            </Typography>
            <Box>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "white" }}
              >
                Start strong and grow with confidence. For a limited time, sign
                up for a free trial and enjoy 3 months of Shopify for $1/month
                on select plans—offer ends 08/25.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box style={paperBoxStyles}>
          <Box
            sx={{
              width: "100%",
              height: "auto",
            }}
          >
            <Grid
              align="center"
              container
              direction={"row"}
              sx={{
                margin: "10px 30px",
                width: "80%",
                justifyContent: "space-evenly",
              }}
            >
              <Grid>
                <FormControl
                  sx={{
                    width: "50ch",
                    backgroundColor: "white",
                    borderRadius: 1,
                  }}
                >
                  <OutlinedInput placeholder="Please enter text" />
                </FormControl>
              </Grid>

              <Button sx={{ hight: "auto" }} variant="contained">
                Start free trial
              </Button>

              <Box>
                <Typography
                  variant="body2"
                  style={{ textAlign: "center", color: "white", marginTop: 20 }}
                >
                  Start strong and grow with confidence. For a limited time,
                  sign up for a free trial and enjoy 3 months of Shopify for
                  $1/month on select plans—offer ends 08/25.
                </Typography>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default ContainerInfo;
