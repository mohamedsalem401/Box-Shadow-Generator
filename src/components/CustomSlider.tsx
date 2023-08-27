import { Stack, Typography, Slider, Box } from "@mui/material";
import React from "react";

interface CustomSlider {
  value: number;
  label: string;
  handleChange: (newValue: number) => void;
  min: number;
  max: number;
  step: number;
  unit: string;
}

const CustomSlider = ({
  value,
  label,
  handleChange,
  min = 0,
  max = 100,
  step = 1,
  unit = "",
}: CustomSlider) => {
  return (
    <Stack width="100%" alignItems="start">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#636388",
          gap: "3px",
          lineHeight: "27px",
        }}
      >
        <Typography sx={{ fontSize: "12px" }}>{label}: </Typography>
        <Typography
          sx={{ fontSize: "14px", fontWeight: 500, color: "#2c2c44" }}
        >
          {value}
          {unit}
        </Typography>
      </Box>
      <Slider
        aria-labelledby="size-slider"
        value={value}
        onChange={(event, value) => {
          handleChange(value as number);
        }}
        min={min}
        max={max}
        step={step}
      />
    </Stack>
  );
};

export default CustomSlider;
