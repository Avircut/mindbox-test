import { createTheme, responsiveFontSizes } from '@mui/material';
import { grey } from '@mui/material/colors';

export const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: grey[50],
        dark: grey[300],
      },
      secondary: {
        main: grey[400],
      },
    },
    spacing: 4,
    typography: {
      h3: {
        fontSize: '1.12rem',
      },
    },
    components: {
      MuiTab: {
        styleOverrides: {
          root: { textTransform: 'none' },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: ({ theme }) => ({
            zIndex: theme.zIndex.drawer + 1,
            background: theme.palette.background.default,
          }),
        },
      },
    },
  }),
);
