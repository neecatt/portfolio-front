import { Box, Img, Text } from '@chakra-ui/react'
import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
    <Box display={'flex'} justifyContent={'center'} alignContent='center' className=' justify-center align-middle'>
      <Text className='flex max-w-lg justify-center item-center text-5xl'>I'm<Text as='span' className='font-bold text-blue-300'>Nijat Abdullazada</Text>, Web Developer.
      </Text>
      <Img></Img>
    </Box>
    
    
    
    
    </>
  )
}

export default Home