import React from 'react';
import { Typography, Divider, Box, Grid } from '@material-ui/core';

import Page from '../Page/Page';
import { usePageStyles } from '../../helpers/hooks';
import CircularProgression from '../../components/CircularProgression/CircularProgression';
import LinearSkillProgress from '../../components/LinearSkillProgress/LinearSkillProgress';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ExperienceDetails from '../../components/ExperienceDetails/ExperienceDetails';
import Education from '../../data/education';
import Experience from '../../data/experience';

const Resume = () => {
  const classes = usePageStyles();
  const educationList = new Education().educationList();
  const experienceList = new Experience().experienceList();
  return (
    <Page>
      <Typography
        variant="h2"
        component="h2"
        className={classes.headline}
        color="textPrimary"
      >
        Resume
      </Typography>
      <Typography
        variant="body1"
        component="p"
        color="textSecondary"
        className={classes.content}
      >
        Web Developer with 4 years of experience in designing and developing
        applications, testing, debugging, and training staff within programming
        technologies. Proven ability in optimizing web functionality that
        improve data retrieval and workflow efficiencies.
      </Typography>
      <Divider variant="fullWidth" />
      <Box
        paddingTop={5}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <SectionTitle title="Soft Skills" />
        <Grid container justify="center" alignItems="center" spacing={1}>
          <Grid item xs>
            <CircularProgression title="Communication" percentage={85} />
          </Grid>
          <Grid item xs>
            <CircularProgression title="Collaboration" percentage={80} />
          </Grid>
          <Grid item xs>
            <CircularProgression title="Speed" percentage={75} />
          </Grid>
          <Grid item xs>
            <CircularProgression title="Creativity" percentage={86} />
          </Grid>
        </Grid>
      </Box>
      <Box
        paddingTop={5}
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop={5}
        marginBottom={5}
      >
        <SectionTitle title="Technical Skills" />

        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <LinearSkillProgress title="Html5" endValue={80} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LinearSkillProgress title="CSS" endValue={76} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LinearSkillProgress title="Javascript" endValue={90} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LinearSkillProgress title="React" endValue={86} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LinearSkillProgress title="NodeJs" endValue={85} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LinearSkillProgress title="Git" endValue={71} />
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box
        paddingTop={5}
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop={1}
        marginBottom={5}
      >
        <Box marginBottom={5}>
          <SectionTitle title="My Experience" />
        </Box>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h5" color="textPrimary">
                Education
              </Typography>
            </Box>
            {educationList.map((education, i) => (
              <ExperienceDetails key={i} {...education} />
            ))}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h5" color="textPrimary">
                Work History
              </Typography>
            </Box>
            {experienceList.map(experience => (
              <ExperienceDetails {...experience} />
            ))}
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default Resume;
