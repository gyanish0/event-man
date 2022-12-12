import { Box } from '@mui/material'
import React from 'react'
import haldiImg from "../assets/haldi.webp"
const Haldi = () => {
    return (
        <Box
            sx={{
                background: `url(${haldiImg})`,
                height: "100vh",
                position: "relative",
                backgroundPosition: "center bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                overflow: "hidden",
            }}
        >

        </Box>
    )
}

export default Haldi