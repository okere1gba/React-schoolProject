import { Stack, Typography } from "@mui/material";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { Box, height } from "@mui/system";

const Home = () => {
  return (
    <Stack sx={{ backgroundColor: "#0F2D25", color: "white" }}>
      <Box>
        <AddBusinessIcon sx={{ fontSize: 100 }} />
        <Typography variant="h3">Qos market Place</Typography>
      </Box>
      <Box margin="0 10rem">
        <Typography align="center" variant="h1" sx={{ fontWeight: "bold" }}>
          Build your dream business quickly and easily
        </Typography>
      </Box>
      <Box margin="0 10rem">
        <Typography align="center" variant="h6">
          Start strong and grow with confidence. For a limited time, sign up for
          a free trial and enjoy 3 months of Shopify for $1/month on select
          plans—offer ends 08/25
        </Typography>
      </Box>
      <Box border="1px solid red" display="flex" width="50%">
        hello
      </Box>
    </Stack>
  );
};

export default Home;
