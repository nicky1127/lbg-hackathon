import { Paper, Typography } from "@mui/material";
import React from "react";

const CustSentiment = () => {
  return (
    <Paper
      sx={{
        backgroundColor: "#fff",
        borderRadius: "15px",
        overflow: "hidden",
        padding: "20px",
      }}
    >
      <Typography
        sx={{ fontSize: "20px", marginBottom: "10px", textAlign: "left" }}
      >
        Customer Sentiment Scale
      </Typography>
      <img
        src="/images/mood_scale.png"
        style={{ width: "50%", height: "100%" }}
      />
    </Paper>
  );
};

export default CustSentiment;
