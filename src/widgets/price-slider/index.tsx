import { FC } from "react";
import { IconButton, Slider, Stack, Typography } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
export interface PriceSliderProps {}

const PriceSlider: FC<PriceSliderProps> = () => {
  return (
    <Stack spacing={1}>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Typography fontWeight={800} variant="h6">
          Price
        </Typography>
        <IconButton size="medium" edge="start" sx={{ color: "text.primary" }}>
          <FilterAltOutlinedIcon />
        </IconButton>
      </Stack>
      <Slider
        size="small"
        defaultValue={[0, 1000]}
        max={1000}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Typography>Range</Typography>
        <Typography>$5-$20</Typography>
      </Stack>
    </Stack>
  );
};

export default PriceSlider;
