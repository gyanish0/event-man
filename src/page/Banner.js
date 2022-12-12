import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import homeImg from "../assets/homeimg.jpg"
const Banner = () => {
    return (
        <Box
            sx={{
                background: `url(${homeImg})`,
                height: "100vh",
                position: "relative",
                backgroundPosition: "center bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                overflow: "hidden",
            }}
        >
            <Container maxWidth="xxl">
                <Box sx={{
                    "h1": {
                        textAlign: "center",
                        color: "#57597c",
                        textShadow: "2px 2px #4f00ff",
                        fontSize: "130px",
                        fontWeight: 400
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }}>
                    <Typography variant='h1'>TIMELESS TALES</Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Banner