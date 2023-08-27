import React from "react";
import {
  Checkbox,
  Box,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import { ShadowSettings } from "./ShadowSettings";
import { ShapeSettings } from "./ShapeSettings";
import { ColorSettings } from "./ColorSettings";

export function Settings({
  shadowSettings,
  handleShadowSettingsChange,
}: {
  shadowSettings: ShadowSettings;
  handleShadowSettingsChange: (newShadowSettings: ShadowSettings) => void;
}) {
  const handleInsetToggle = () => {
    const newShadowSettings = shadowSettings.clone();
    newShadowSettings.inset = !newShadowSettings.inset;
    handleShadowSettingsChange(newShadowSettings);
  };

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
        display="flex"
        flexDirection="column"
        gap={2}
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        width="40%"
      >
        <Typography variant="h6">Size</Typography>
        <ShapeSettings
          shadowSettings={shadowSettings}
          handleShadowSettingsChange={handleShadowSettingsChange}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        width="40%"
      >
        <Typography variant="h6">Color</Typography>
        <ColorSettings
          shadowSettings={shadowSettings}
          handleShadowSettingsChange={handleShadowSettingsChange}
        />
      </Box>

      <Grid item xs={6}>
        <FormControlLabel
          value="end"
          control={<Checkbox onChange={handleInsetToggle} />}
          label="Inset"
          labelPlacement="end"
        />
      </Grid>
    </Box>
  );
}
