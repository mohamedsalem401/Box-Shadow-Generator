import React from "react";
import { Box } from "@mui/material";
import CodeOutput from "./CodeOutput";
import { ShadowSettings } from "./ShadowSettings";

export function Output({ shadowSettings }: { shadowSettings: ShadowSettings }) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={4}
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          bgcolor: shadowSettings.bgColor,
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Box
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "15px",
            backgroundColor: shadowSettings.boxColor,
            boxShadow: shadowSettings.getCSS(),
          }}
        ></Box>
      </Box>
      <Box marginBottom={6}>
        <CodeOutput
          language="css"
          code={shadowSettings.getBoxShadow()}
          fileName={""}
        />
      </Box>
    </Box>
  );
}
