import { Box, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme'
import { useProductsContext } from '../Contexts/ProductsContext'
import { useFiltersContext } from '../Contexts/filterConstext'

const Error = () => {

  return (
    <Box mt={-100} textAlign='center'  sx={{marginLeft:{lg:'32%'}}}>
        <Typography sx={{color:theme.palette.secondary.main,fontSize:'1.4rem'}}>Sorry, no products matched your search.</Typography>
    </Box>
  )
}

export default Error
