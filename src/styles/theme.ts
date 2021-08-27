import { extendTheme } from '@chakra-ui/react';

export const palette = {
  background: '#e1e5ea',
  border: '#ccc',
  lightGray: '#e8e8e8',
  darkGray: '#e7e5e5',
  darkBlue: '#02475e',
  lightRed: '#f05454',
  darkRed: '#ce1212'
};

export const customTheme = extendTheme({
  styles: {
    global: {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      },
      'html, body': {
        bgColor: palette.background,
        color: palette.darkBlue,
        lineHeight: 0
      }
    }
  },
  fonts: {
    body: 'Montserrat'
  }
});
