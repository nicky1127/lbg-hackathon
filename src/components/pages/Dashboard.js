import { Box } from "@mui/material";
import React from "react";
import Header from "../abstract/Header";
import Grid from "@mui/material/Grid2";
import CustSentiment from "../layouts/CustSentiment";
import Chatbot from "../layouts/Chatbot";

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
      <Grid container spacing={2} sx={{ padding: "50px", height: "90vh" }}>
        <Grid size={9}>
          <Box>
            <Grid container spacing={2} sx={{ margin: "5px" }}>
              <Grid size={4}>
                <CustSentiment />
              </Grid>
              <Grid size={4}>Customer Details</Grid>
              <Grid size={4}>Greetings</Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid size={3}>
          <Chatbot />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
