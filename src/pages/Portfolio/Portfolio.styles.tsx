import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  masonry: {
    columnCount: 2,
    columnGap: '50px',
    columnWidth: '50%',
    [theme.breakpoints.down('sm')]: {
      columnCount: 1,
      columnWidth: '100%',
      columnGap: '20px',
    },
  },
}));

export default useStyles;
