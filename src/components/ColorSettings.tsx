import React from "react";
import { Box } from "@mui/material";
import CustomSlider from "./CustomSlider";
import ColorPicker from "./ColorPicker";
import { ShadowSettings } from "./ShadowSettings";

export interface ColorSettings {
  shadowSettings: ShadowSettings;
  handleShadowSettingsChange: (newShadowSettings: ShadowSettings) => void;
}

export function ColorSettings({
  shadowSettings,
  handleShadowSettingsChange,
}: ColorSettings) {
  const handleOpacityChange = (value: number) => {
    const newShadowSettings = shadowSettings.clone();
    newShadowSettings.opacity = value;
    handleShadowSettingsChange(newShadowSettings);
  };

  const handleShadowColorChange = (newColor: string) => {
    const newShadowSettings = shadowSettings.clone();
    newShadowSettings.shadowColor = newColor;
    handleShadowSettingsChange(newShadowSettings);
  };

  const handleBoxColorChange = (newColor: string) => {
    const newShadowSettings = shadowSettings.clone();
    newShadowSettings.boxColor = newColor;
    handleShadowSettingsChange(newShadowSettings);
  };

  const handleBgColorChange = (newColor: string) => {
    const newShadowSettings = shadowSettings.clone();
    newShadowSettings.bgColor = newColor;
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
      width="100%"
    >
      <Box width="40%">
        <CustomSlider
          label="Shadow Color Opacity"
          value={shadowSettings.opacity}
          min={0}
          max={100}
          step={2}
          handleChange={handleOpacityChange}
          unit={""}
        />
      </Box>
      <Box width="40%">
        <ColorPicker
          color={shadowSettings.bgColor}
          handleColorChange={(newColor) => {
            handleBgColorChange(newColor);
          }}
          label="Background Color"
        />
      </Box>
      <Box width="40%">
        <ColorPicker
          color={shadowSettings.boxColor}
          handleColorChange={(newColor) => {
            handleBoxColorChange(newColor);
          }}
          label="Box Color"
        />
      </Box>
      <Box width="40%">
        <ColorPicker
          color={shadowSettings.shadowColor}
          handleColorChange={(newColor) => {
            handleShadowColorChange(newColor);
          }}
          label="Shadow Color"
        />
      </Box>
    </Box>
  );
}
