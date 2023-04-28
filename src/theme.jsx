import { createTheme } from'@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#f97316",
      hover:'#fb923c'
    },
    background: "#ffffffb3",
    neutral: "#64748b",

    typography: {
      fontFamily:['open-sans','san-serif','dynalight'].join(','),
      fontSize: 11,
      h1: {
        fontFamily:'Dynalight',
        fontSize: 48,
      },
      h2: {
        fontFamily:'Dynalight',
        fontSize: 36,
      },
      h3: {
        fontSize: 20,
      },
    
    h4: {
      fontSize: 14,
    },
  },
  boxShadow:{
    main:"#b5b1a5 1px 1px 39px",
    secondary:'#b5b1a5 1px 1px 7px',
  },transitionDuration:{main:'500ms'}
}
});
