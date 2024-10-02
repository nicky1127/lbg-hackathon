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
        <Grid size={9}>
          <Box sx={{ marginBottom: "40px" }}>
            <Grid container spacing={2} sx={{ margin: "5px" }}>
              <Grid size={12}>
                <WelcomeConv />
              </Grid>
              <Grid size={4}>
                <CustSentiment />
              </Grid>
              <Grid size={4}>
                <CustDetails />
              </Grid>
              <Grid size={4}>
                <Greeting
                  speed={40}
                  text={`Hi, Mr. Smith. Thanks for your patience.`}
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid container spacing={2} sx={{ margin: "5px" }}>
              <Grid size={8}>
                <IndicatorAnalysis
                  speed={40}
                  text={`Mr. Smith is a hearing-impaired person who has experienced a fraud
        incident. Due to their hearing impairment, they rely on alternative
        communication methods such as written text, email, or messaging, rather
        than spoken language. English is not their first language, which may
        create additional challenges in understanding complex information,
        especially related to sensitive topics like fraud. As a result, they
        might require the assistance of a translator to fully comprehend
        communications in their native language.`}
                />
              </Grid>
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
