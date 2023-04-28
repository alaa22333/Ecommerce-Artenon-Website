import React from 'react'
import { useProductsContext } from '../Contexts/ProductsContext'
import Product from './Product'
import { Box } from '@mui/material'
import { useFiltersContext } from '../Contexts/filterConstext'

const GridView = () => {
const {filteredProducts}=useFiltersContext()

    return (
   <Box marginTop={3} display='flex' sx={{marginLeft: {lg:'32%'},justifyContent:{xs:'center',lg:'left'} ,minHeight:'100%',  }} flexWrap='wrap' gap={3}  >
    {filteredProducts.map((item,i)=>{
return(<Box key={i} flexShrink='0'  sx={{width:{lg:'30%',md:'30%',sm:'40%',xs:'90%'}}}>  <Product key={i} data={item} {...item}/></Box>)
    })}
   </Box>
  )
}

export default GridView
