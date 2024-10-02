import {
  Person,
  Phone,
  QueryBuilder,
  PsychologyAlt,
} from "@mui/icons-material";
import { Box, Chip, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const DetailsItem = (props) => {
  const { value, Icon } = props;
  return (
    <Box sx={{ display: "flex", alignItems: "center", margin: "10px" }}>
      <Box sx={{ marginRight: "10px", display: "flex", alignItems: "center" }}>
        <Icon />
      </Box>
      {value}
    </Box>
  );
};

const details = [
  {
    icon: Person,
    value: "Paul Smith",
  },
  {
    icon: Phone,
    value: "07833772635",
  },
  {
    icon: PsychologyAlt,
    value: "Order Statements",
  },
  {
    icon: QueryBuilder,
    value: "00:15:23",
  },
];

const IndicatorAnalysis = (props) => {
  const [displayedText, setDisplayedText] = useState("");

  const { text, speed } = props;

  useEffect(() => {
    const words = text.split(" ");
    let currentWordIndex = 0;

    const interval = setInterval(() => {
      if (currentWordIndex < words.length) {
        setDisplayedText((prev) => prev + words[currentWordIndex] + " ");
        currentWordIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <Paper
      sx={{
        backgroundColor: "#fff",
        borderRadius: "15px",
        overflow: "hidden",
        padding: "20px",
      }}
      elevation={12}
    >
      <Typography variant="h5">Customer Needs </Typography>
      <Chip
        label="hearing-impaired"
        variant="outlined"
        sx={{ marginRight: "5px" }}
      />
      <Chip label="Italian speaking" variant="outlined" />
      <Typography variant="body1">{displayedText}</Typography>
    </Paper>
  );
};

export default IndicatorAnalysis;
