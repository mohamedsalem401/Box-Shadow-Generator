import React from "react";
import "./App.css";
import BoxShadowGenerator from "./BoxShadowGenerator";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={4}
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      marginTop={10}
    >
      <BoxShadowGenerator></BoxShadowGenerator>
    </Box>
  );
}

export default App;
