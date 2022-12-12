import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Weeding = () => {
    return (
        <Box
            sx={{
                p: "50px 0 0px 0",
                textAlign: "center",
                "h2": {
                    fontFamily: "'Anek Devanagari', sans-serif",
                    fontWeight: 300,
                    color: "#ff7cbf",
                    p: "20px"
                },
                "h3": {
                    fontFamily: "'Anek Devanagari', sans-serif",
                    fontWeight: 300
                }
            }}>
            <Container maxWidth="xxl">
                <Box>
                    <Typography variant='h2'>So You're getting Hitched</Typography>
                    <Typography variant='h3'>
                        If you’re here, your search for the best wedding planner ends with us.
                    </Typography>
                    <br />
                    <Typography variant='h3'>
                        Whether you wish to go for a rustic wedding, beach wedding, luxury palace wedding,or an
                        elegant wedding with a few guests, you can have it all planned and hosted exactly as you
                        desire.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Weeding