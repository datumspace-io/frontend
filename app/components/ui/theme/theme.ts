import { createTheme } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';

export const muiTheme = createTheme({
  palette: {
    primary: blue,
    background: {
      default: grey[50],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: blue[900],
        },
      },
    },
  },
});