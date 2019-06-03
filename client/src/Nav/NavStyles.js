import { makeStyles } from '@material-ui/styles';

// export const useNavStyles = makeStyles(
export const useNavStyles = makeStyles(theme => ({
  "nav": {
    background: "black",
    "display": "flex"
  },
  "brandMark": {
    flexGrow: 1, 
    "font-size": "2.1rem",
    "font-style": "normal",
    "font-weight": 100,
    "letter-spacing": "7px"
  },

  fab: {
    "background-color": "black",
    "border-radius": 0,
    "margin-top": theme.spacing(2),
    "margin-bottom": theme.spacing(2),
    '&:hover': {
      background: "#d5d5d5",
    },
  },
}));
  