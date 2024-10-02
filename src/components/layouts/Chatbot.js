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
import { imagePrefix } from "../abstract/MockImage";

const MessageThreadBot = (props) => {
  const { message } = props;
  return (
    <Box sx={{ padding: "5px", display: "flex" }}>
      <Avatar sx={{ bgcolor: green[500], margin: "10px 10px 0 0 " }}>
        <SmartToy />
      </Avatar>
      <Box
        sx={{
          backgroundColor: "rgb(240,240,240)",
          padding: "20px",
          borderRadius: "15px",
          textAlign: "left",
        }}
      >
        <img src={imagePrefix + message} height="300px" width="300px"></img>
      </Box>
    </Box>
  );
};

const MessageThreadUser = (props) => {
  const { message } = props;
  return (
    <Box sx={{ padding: "5px", display: "flex", justifyContent: "flex-end" }}>
      <Box
        sx={{
          backgroundColor: "rgb(240,240,240)",
          padding: "20px",
          borderRadius: "15px",
          textAlign: "left",
        }}
      >
        {message}
      </Box>
      <Avatar sx={{ bgcolor: orange[500], margin: "10px 0 0 10px " }}>
        <SupportAgentSharp />
      </Avatar>
    </Box>
  );
};

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    // Get the div element
    let divElement = document.getElementById("scrollDiv");
    // Scroll to the bottom of the div
    divElement.scrollTop = divElement.scrollHeight;
  };
  useEffect(scrollToBottom, [messages]);

  const handleChangeInput = (evt) => {
    setInput(evt.target.value);
  };

  const handleClickSend = async () => {
    if (input === "") return;
    const message = { sender: "user", message: input };

    const arr = [...messages, message];
    setMessages(arr);
    setInput("");

    const response = await fetch('http://34.147.195.29:5000/getImage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: input }),
    });

    const data = await response.json();

    const botMessage = { sender: "bot", message: data.content }

    setMessages([...arr, botMessage])
  };

  const handleClickNewChat = () => {
    setMessages([{ sender: "bot", message: "How can I help you?" }]);
  };

  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(to bottom right,rgb(201,208,216), rgb(230,230,230))",
        height: "100%",
        // width: "100%",
        borderRadius: "15px",
        padding: "30px 15px 15px",
      }}
    >
      <Box sx={{ height: "25%" }}>
        <Box sx={{ marginBottom: "15px" }}>
          <Typography variant="h4">Chat with our AI</Typography>
          <Typography variant="body1">
            Ask any question and our AI will answer!
          </Typography>
        </Box>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<ModeComment />}
          sx={{ borderRadius: "20px" }}
          onClick={handleClickNewChat}
        >
          New chat
        </Button>
      </Box>
      <Box
        sx={{ height: "75%", backgroundColor: "#fff", borderRadius: "12px" }}
      >
        <Box
          id="scrollDiv"
          ref={messagesEndRef}
          sx={{
            height: "380px",
            padding: "10px",
            overflowY: "auto",
            "&::-webkit-scrollbar": { display: "none" },
            // display: "flex",
            // flexDirection: "column",
            // justifyContent: "flex-end",
          }}
        >
          {messages.map((msg) =>
            msg.sender === "bot" ? (
              <MessageThreadBot message={msg.message} />
            ) : (
              <MessageThreadUser message={msg.message} />
            )
          )}
        </Box>
        <Box
          sx={{
            width: "85%",
            borderRadius: "25px",
            overflow: "hidden",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            placeholder="Type your message here..."
            variant="filled"
            sx={{ width: "100%" }}
            value={input}
            onKeyDown={(evt) => {
              evt.key === "Enter" && handleClickSend(evt);
            }}
            onChange={handleChangeInput}
            autocomplete="off"
          />
          <IconButton
            // color="black"
            aria-label="add an alarm"
            sx={{
              position: "absolute",
              right: "15px",
              top: "8px",
              backgroundColor: "#fff",
              color: "black",
            }}
            onClick={handleClickSend}
          >
            <Send />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Chatbot;
