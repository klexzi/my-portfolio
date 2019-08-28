import React, { useState, useEffect } from 'react';
import { Slider, Typography, withStyles } from '@material-ui/core';

interface LinearSkillProgressProps {
  endValue: number;
  title: string;
}
const SkillSlider = withStyles({
  root: {
    height: 6,
  },
  rail: {
    height: 8,
  },
  track: {
    height: 8,
  },
  thumb: {
    height: 0,
  },
})(Slider);
const LinearSkillProgress: React.SFC<LinearSkillProgressProps> = ({
  endValue,
  title,
}) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const incrementValue = () => {
      setValue(value + 1);
    };
    const timer = setInterval(incrementValue, 1);
    if (value >= endValue) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [value, endValue, setValue]);
  return (
    <div>
      <SkillSlider
        value={value}
        aria-labelledby="discrete-slider-always"
        step={10}
        valueLabelDisplay="on"
      />
      <Typography
        variant="overline"
        color="textPrimary"
        style={{ fontSize: '15px' }}
      >
        {title}
      </Typography>
    </div>
  );
};

export default LinearSkillProgress;
