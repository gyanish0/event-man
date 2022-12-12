import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Service = () => {
    return (
        <Box sx={{
            height: "100vh",
            background: "#53575b",
            color: "#fff",
            display: "flex",
            alignItems: "center"
        }}>
            <Container maxWidth="xxl">
                <Grid container spacing={3}>
                    <Grid item lg={7} md={7} sm={7}>
                        <Box sx={{
                            "h3": {
                                textAlign: "center",
                                fontSize: "50px",
                                fontWeight: 400
                            }
                        }}>
                            <Typography variant="h3">Work with us today!</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={5} md={5} sm={5}>
                        <Box sx={{
                            "h4": {
                                fontSize: "27px",
                                fontWeight: 270
                            },
                            "h5": {
                                fontSize: "20px",
                                fontWeight: 300
                            }
                        }}>
                            <Typography variant="h4">
                                Email Address
                            </Typography>
                            <Typography variant="h5">
                                Test@gmail.com
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                "h4": {
                                    fontSize: "30px",
                                    fontWeight: 300
                                },
                                "h5": {
                                    fontSize: "20px",
                                    fontWeight: 300
                                }
                            }}>
                            <Typography variant="h4">
                                Phone Number
                            </Typography>
                            <Typography variant="h5">
                                + 91 7701866732
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Service