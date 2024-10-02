import {
  Person,
  Phone,
  QueryBuilder,
  PsychologyAlt,
} from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";

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

const CustDetails = () => {
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
      {/* {details.map((el) => (
        <DetailsItem value={el.value} Icon={el.icon} />
      ))} */}

      <Typography variant="h5">Call Overview</Typography>
      <Typography variant="body1">
        The customer is callling to order a credit card statement, as the
        previous advisor couldn't resolve the issue, the customer was
        transferred.
      </Typography>
    </Paper>
  );
};

export default CustDetails;
