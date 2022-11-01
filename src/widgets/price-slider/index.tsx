import { FC } from "react";
import { Slider, Stack } from "@mui/material";

export interface PriceSliderProps {}

const PriceSlider: FC<PriceSliderProps> = () => {
  return (
    <Stack spacing={5}>
      <Slider
        size="small"
        defaultValue={[0, 1000]}
        max={1000}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
    </Stack>
  );
};

export default PriceSlider;
