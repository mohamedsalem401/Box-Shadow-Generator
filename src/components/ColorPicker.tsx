import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import { ChromePicker } from "react-color";

interface ColorPickerProps {
  color: string;
  handleColorChange: (color: string) => void;
  label: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  color,
  handleColorChange,
  label,
}) => {
  const colorRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  const handleShowToggle = () => {
    setShow(!show);
  };

  return (
    <Box
      sx={{
        border: "1px solid #777",
        borderRadius: "8px",
        flex: 1,
        textAlign: "left",
        padding: "8px 16px",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <Box
        onClick={() => {
          handleShowToggle();
        }}
        ref={colorRef}
      >
        <small style={{ color: "rgb(115, 115, 143)", fontSize: "12px" }}>
          {label}
        </small>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginTop: "6px",
            color: "rgb(38, 39, 75)",
          }}
        >
          <span
            style={{
              width: "20px",
              height: "20px",
              display: "inline-block",
              borderRadius: "4px",
              background: color,
            }}
          ></span>{" "}
          <small>{color}</small>
        </Typography>
      </Box>
      {show && (
        <Box
          sx={{
            position: "absolute",
            zIndex: 100,
            top: "calc(100% + 10px)",
            left: 0,
          }}
        >
          <ChromePicker
            disableAlpha={true}
            color={color}
            onChange={(color) => {
              handleColorChange(color.hex);
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default ColorPicker;
