import { Settings } from '@mui/icons-material'
import { Box, Button, IconButton } from '@mui/material'
import React from 'react'
import { useMainContext } from '../Contexts/mainContext'

const SettingsComp = () => {
  const {setOpenFilters,openFilters}=useMainContext()
  return (
    <Box position='fixed' top='54%'  zIndex={20} sx={{ paddingBlock:'5px',paddingRight :'1px',borderRadius:'3px',background: '#00000045',display:{lg:'none',sm: 'block'}}} right={0}>
     <IconButton onClick={()=>setOpenFilters(!openFilters)}> <Settings/></IconButton>
    </Box>
  )   


}

export default SettingsComp
