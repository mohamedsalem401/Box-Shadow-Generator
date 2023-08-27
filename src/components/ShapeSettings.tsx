import { Box } from "@mui/material";
import CustomSlider from "./CustomSlider";
import { ShadowSettings } from "./ShadowSettings";

export interface ShapeSettings {
  shadowSettings: ShadowSettings;
  handleShadowSettingsChange: (newShadowSettings: ShadowSettings) => void;
}

export function ShapeSettings({
  shadowSettings,
  handleShadowSettingsChange,
}: ShapeSettings) {
  const handleHorizontalChange = (value: number) => {
    const newShadowSettings = shadowSettings.clone();
    newShadowSettings.horizontal = value;
    handleShadowSettingsChange(newShadowSettings);
  };

  const handleVerticalChange = (value: number) => {
    const newShadowSettings = shadowSettings.clone();
    newShadowSettings.vertical = value;
    handleShadowSettingsChange(newShadowSettings);
  };

  const handleBlurChange = (value: number) => {
    const newShadowSettings = shadowSettings.clone();
    newShadowSettings.blur = value;
    handleShadowSettingsChange(newShadowSettings);
  };

  const handleSpreadChange = (value: number) => {
    const newShadowSettings = shadowSettings.clone();
    newShadowSettings.spread = value;
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
          label="X-Offset"
          value={shadowSettings.horizontal}
          min={-50}
          max={50}
          step={1}
          handleChange={handleHorizontalChange}
          unit="px"
        />
      </Box>
      <Box width="40%">
        <CustomSlider
          label="Y-Offset"
          value={shadowSettings.vertical}
          min={-50}
          max={50}
          step={1}
          handleChange={handleVerticalChange}
          unit="px"
        />
      </Box>
      <Box width="40%">
        <CustomSlider
          label="Blur"
          value={shadowSettings.blur}
          min={0}
          max={50}
          step={1}
          handleChange={handleBlurChange}
          unit="px"
        />
      </Box>
      <Box width="40%">
        <CustomSlider
          label="Spread"
          value={shadowSettings.spread}
          min={0}
          max={50}
          step={1}
          handleChange={handleSpreadChange}
          unit="px"
        />
      </Box>
    </Box>
  );
}
