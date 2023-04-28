import { Box, CircularProgress } from '@mui/material'
import React from 'react'
import logo2 from '../assets/data/logo2.webp'
const Loading = () => {
  return (
   <Box textAlign='center' width='100%'  sx={{marginTop:'20rem',}} >
   <img src={logo2} width={120}></img>
   </Box>
  )
}

export default Loading
