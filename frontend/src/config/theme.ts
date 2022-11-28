import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#207780',
      dark: '#16585F',
    },
    secondary: {
      main: '#C8A15C',
      light: '#FFE8D2',
      dark: '#777167',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});

export default theme;
