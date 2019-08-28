import { makeStyles, Theme } from '@material-ui/core';

export const usePageStyles = makeStyles((theme: Theme) => ({
  headline: {
    fontSize: '60px',
    marginBottom: '10px',
  },
  content: {
    padding: '40px 0 40px 0',
  },
  divider: {
    marginBottom: '30px',
  },
  section: {
    padding: '40px 0 40px 0',
  },
}));
