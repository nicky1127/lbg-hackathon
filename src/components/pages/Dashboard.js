import { Box } from "@mui/material";
import React from "react";
import Header from "../abstract/Header";
import Grid from "@mui/material/Grid2";
import CustSentiment from "../layouts/CustSentiment";
import Chatbot from "../layouts/Chatbot";
import CustDetails from "../layouts/CustDetails";

import WelcomeConv from "../layouts/WelcomeConv";

import Greeting from "../layouts/Greeting";
import IndicatorAnalysis from "../layouts/IndicatorAnalysis";
import HistoryTimeline from "../layouts/HistoryTimeline";

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
        {/* <Grid size={12}>
          {" "}
          <WelcomeConv />
        </Grid> */}
        <Grid size={5}>
          <Box sx={{ marginBottom: "40px" }}>
            <Grid container spacing={2} sx={{ margin: "5px" }}>
              <Grid size={12}>
                <WelcomeConv />
              </Grid>
              <Grid size={6}>
                <CustSentiment />
              </Grid>

              <Grid size={6}>
                <Greeting
                  speed={40}
                  text={`Thanks you for calling Lloyds banking Group today, before i take a look at your query, I'd like to wish you a happy birthday! 🍰`}
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid container spacing={2} sx={{ margin: "5px" }}>
              <Grid size={6}>
                <CustDetails />
              </Grid>
              <Grid size={6}>
                <IndicatorAnalysis
                  speed={40}
                  text={`Mr. Smith is hearing-impaired and prefers text-based communication. As English is not their first language, they may need a translator to understand complex fraud-related information.`}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid size={4}>
          <HistoryTimeline />
        </Grid>
        <Grid size={3}>
          <Chatbot />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
