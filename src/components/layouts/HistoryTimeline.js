import {
  Avatar,
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  ModeComment,
  Send,
  SmartToy,
  SupportAgentSharp,
} from "@mui/icons-material";
import { green, orange } from "@mui/material/colors";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "01/10/24 14:20",
    cardTitle: "Interest change",
    url: "http://www.history.com",
    cardSubtitle: "Issue resolved",
    cardDetailedText:
      "customer educated on new interest is applied. Sent interest explaination letter.",
  },
  {
    title: "30/9/24 12:55",
    cardTitle: "Card declined in a shop ",
    url: "http://www.history.com",
    cardSubtitle: "Issue resolved",
    cardDetailedText: "Advised to use chip + PIN instead of contactless",
  },
];

const HistoryTimeline = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", message: "How can I help you?" },
    {
      sender: "user",
      message: "What's the customer's name? ",
    },
  ]);

  const scrollToBottom = () => {
    // Get the div element
    let divElement = document.getElementById("scrollDiv");
    // Scroll to the bottom of the div
    divElement.scrollTop = divElement.scrollHeight;
  };
  useEffect(scrollToBottom, [messages]);

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "15px",
        overflow: "hidden",
        padding: "20px",
        height: "550px",
      }}
    >
      <Typography
        sx={{ fontSize: "20px", marginBottom: "10px", textAlign: "left" }}
      >
        Key incidents
      </Typography>
      <Chrono items={items} mode="VERTICAL" disableToolbar itemWidth={100} />
    </Box>
  );
};

export default HistoryTimeline;
