import { FC, useState } from "react";
import { IconButton, Slider, Stack, Typography } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

export interface PriceSliderProps {
  onChangeRange?: (range: number[]) => void;
}

const initValue = [0, 1000];

const PriceSlider: FC<PriceSliderProps> = ({ onChangeRange }) => {
  const [priceRange, setPriceRange] = useState<number[]>(initValue);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
    onChangeRange && onChangeRange(newValue as number[]);
  };
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
        defaultValue={initValue}
        value={priceRange}
        onChange={handleChange}
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
        <Typography>{`$${priceRange[0]}-$${priceRange[1]}`}</Typography>
      </Stack>
    </Stack>
  );
};

export default PriceSlider;
