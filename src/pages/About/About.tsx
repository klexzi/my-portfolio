import React from 'react';
import { Typography, Divider, Grid } from '@material-ui/core';

import DeveloperIcon from '../../assets/developer-icon.svg';
import OptimizationIcon from '../../assets/optimization-icon.svg';
import DatabaseIcon from '../../assets/database-icon.svg';
import DataSecurityIcon from '../../assets/data-security-icon.svg';
import AboutContent from '../../components/AboutContent/AboutContent';
import Page from '../Page/Page';
import { usePageStyles } from '../../helpers/hooks';

const About = () => {
  const classes = usePageStyles();
  return (
    <Page>
      <Typography
        variant="h2"
        component="h2"
        className={classes.headline}
        color="textPrimary"
      >
        About me
      </Typography>
      <Typography
        component="p"
        color="textSecondary"
        className={classes.content}
      >
        Kelechi Nwosu is a software Engineer from Nigeria with great enthusiasm
        for technology. Mentored software engineers and also thousands of
        members of the National Association of Computer Engineering Students
        (NACOMES) in which he was the vice president. He has over 6 years of
        programming experience and over 4 active years of experience has a
        software engineer. During this period, he has developed lots of exciting
        applications for various sectors of the industry. <br /> <br />
        Mr. Kelechi’s other interest include playing video games, football, and
        also loves music.
      </Typography>
      <Divider variant="fullWidth" className={classes.divider} />
      <Typography variant="h4" component="h4" color="textPrimary">
        My Services
      </Typography>
      <Grid container className={classes.section} spacing={2}>
        <Grid item xs={12} md={6}>
          <AboutContent icon={DeveloperIcon} title="Development">
            Building a custom tailored solution based on your technical
            specification.
          </AboutContent>
        </Grid>
        <Grid item xs={12} md={6}>
          <AboutContent
            icon={OptimizationIcon}
            title="Optimization"
            animationDelay={500}
          >
            Audit your web application, perform technical improvements and write
            meta tags.
          </AboutContent>
        </Grid>
        <Grid item xs={12} md={6}>
          <AboutContent
            icon={DatabaseIcon}
            title="Database"
            animationDelay={1000}
          >
            SSL certificate installation and configuration, redirection
            configuration on your website.
          </AboutContent>
        </Grid>
        <Grid item xs={12} md={6}>
          <AboutContent
            icon={DataSecurityIcon}
            title="Data Security"
            animationDelay={1500}
          >
            Strategy with leading data protection technology to safeguard your
            critical data.
          </AboutContent>
        </Grid>
      </Grid>
    </Page>
  );
};

export default About;
