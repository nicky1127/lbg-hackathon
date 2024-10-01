import { Box } from "@mui/material";
import React from "react";
import Header from "../abstract/Header";
import Grid from "@mui/material/Grid2";
import CustSentiment from "../layouts/CustSentiment";

const Dashboard = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(to bottom right,rgb(233,235,237), rgb(250,250,250))",
        height: "100vh",
      }}
    >
      <Header />
      <Grid container spacing={2} sx={{ margin: "50px" }}>
        <Grid size={4}>
          <CustSentiment />
        </Grid>
        <Grid size={4}></Grid>
        <Grid size={4}></Grid>
        <Grid size={12}></Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
