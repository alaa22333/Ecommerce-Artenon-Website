import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useProductsContext } from '../Contexts/ProductsContext'
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import MainButton from '../components/MainButton';
import { theme } from '../theme';
const ErrorPage = ({title,buttonTitle,href}) => {



    return (
      <Stack direction="column" textAlign="center" marginY={27} gap={4}>
      <Box>
      
        <ErrorRoundedIcon sx={{fontSize:{md:'8rem',xs:'4rem'},color:theme.palette.secondary.main}} />
      </Box>
      <Typography sx={{fontSize:{md:'2rem',xs:'1.3rem'}}}>{title}</Typography>
      <MainButton href={href} title={buttonTitle} />
    </Stack>
  ) 
  
 
}

export default ErrorPage
