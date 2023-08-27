import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Typography, Container, Slider, Stack, Box } from "@mui/material";
import { ChromePicker } from "react-color";
// import Header from "./common/Header";
import { ShadowSettings } from "./components/ShadowSettings";
import { Settings } from "./components/Settings";
import { Output } from "./components/Output";

const BoxShadowGenerator = () => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [shadowSettings, setShadowSettings] = useState<ShadowSettings>(
    new ShadowSettings()
  );
  const handleShadowSettingsChange = (newShadowSettings: ShadowSettings) => {
    setShadowSettings(newShadowSettings);
  };

  useEffect(() => {
    const handler = (e: any) => {
      // if (colorRef && showColorPicker && !colorRef.current?.contains(e.target)) {
      setShowColorPicker(false);
      // } else return;
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [showColorPicker]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={10}
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
    >
      <Settings
        shadowSettings={shadowSettings}
        handleShadowSettingsChange={handleShadowSettingsChange}
      />
      <Output shadowSettings={shadowSettings} />
    </Box>
  );
};

export default BoxShadowGenerator;
