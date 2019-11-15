import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Animate } from 'react-move';
import { easeQuadInOut } from 'd3-ease';

import 'react-circular-progressbar/dist/styles.css';
import { Typography, Box } from '@material-ui/core';

interface CircularProgressionType {
  title: string;
  percentage: number;
}
const CircularProgression = ({
  title,
  percentage,
}: CircularProgressionType) => {
  const [, setIsAnimated] = useState(false);
  useEffect(() => {
    setIsAnimated(isAnimated => !isAnimated);
  }, []);
  return (
    <Box
      width="100px"
      height="100%"
      alignItems="center"
      display="flex"
      flexDirection="column"
    >
      <Box marginTop={3}>
        <Animate
          start={() => ({
            value: 0,
          })}
          update={() => ({
            value: [percentage],
            timing: {
              duration: 1400,
              ease: easeQuadInOut,
            },
          })}
        >
          {({ value }) => {
            return (
              <CircularProgressbar
                value={value}
                text={`${Math.round(value)}%`}
                strokeWidth={4}
                styles={buildStyles({
                  strokeLinecap: 'butt',
                  pathColor: '#40c4ff',
                  textColor: '#fff',
                  pathTransition: 'none',
                })}
              />
            );
          }}
        </Animate>
      </Box>
      <Box marginTop={2} justifyContent="center" marginBottom={5}>
        <Typography align="center" variant="overline" color="textPrimary">
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularProgression;
