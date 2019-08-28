import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  masonry: {
    columnCount: 2,
    columnGap: '50px',
    columnWidth: '50%',
    '&:@media only screen and (max-width: 479px)': {
      columnCount: 1,
      columnWidth: '100%',
    },
  },
});

export default useStyles;
