import './App.css'
import { SwipeableDrawer, IconButton, Box, Typography } from '@mui/material'
import { useState } from 'react'
import { AiOutlineMenu, AiTwotoneMail } from 'react-icons/Ai'
import { FcGallery } from 'react-icons/Fc'
import { MdOutlineVideoSettings } from 'react-icons/Md'
import { GiQuillInk } from 'react-icons/Gi '
import { MdPhone } from 'react-icons/Md'
import { GrLogin } from 'react-icons/Gr'
import photos from './photos'
import Pics from './photos'
import { Link } from 'react-router-dom'



const Sidemenu = () => {
    const [cards, setCard] = useState(photos)

    const [isopen, setIsopen] = useState(false)

    return (
        <>
            {/* <Box  alignItems={'center'}>       */}




            <Box sx={{ width: '100%', backgroundColor: 'black', color: 'white', height: '100$' }}>
                <Typography>

                    <a href='lightbox' className='link'><FcGallery />  Home</a>
                    <a href='vids' className='link'><MdOutlineVideoSettings />   Gallery</a>
                    <a href='links' className='link'><GiQuillInk />  photos </a>
                    <a href='' className='link'> <AiTwotoneMail />  Email</a>
                    <a href='' className='link'><MdPhone />צור קשר</a>
                    <a href='' className='link'> <GrLogin /> Log in</a>




                </Typography>
            </Box>
        </>
    )
}
export default Sidemenu