import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import taleImg from "../assets/taleimg.jpg"
import downArrow from "../assets/downArrow.svg"
import birdImg from "../assets/birdImg.png"
const TaleTo = () => {
    return (
        <Box
            sx={{
                height: "100vh",
            }}
        >
            <Grid container spacing={1}>
                <Grid item xs={7}>
                    <img src={taleImg} alt="img" style={{ width: "100%", height: "100vh" }} />
                </Grid>
                <Grid item xs={5}>
                    <Box sx={{
                        p: "50px"
                    }}>
                        <Box
                            sx={{
                                p: "10px",
                                display: "flex",
                                justifyContent: "center",
                                "img": {
                                    width: "220px",
                                    height: "80px"
                                }
                            }}>
                            <img src={birdImg} alt="" />
                        </Box>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            "h5": {
                                border: "1px solid #4E6274",
                                borderRadius: "50px",
                                color: "#4E6274",
                                fontSize: "20px",
                                p: "10px"
                            }
                        }}>
                            <Typography variant='h5'>
                                THE TIMELESS TALE
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "100px 0",
                        "h1": {
                            color: "#4E6274",
                            textAlign: "center"
                        }
                    }}>
                        <Typography variant='h1'>
                            A Tale to Remember
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            textAlign: "center",
                            p: "85px",
                            "img": {
                                width: "80px"
                            }
                        }}
                    >
                        <img src={downArrow} alt="" />
                        {/* <ArrowDownwardIcon /> */}
                    </Box>
                </Grid>
            </Grid>
        </Box >
    )
}

export default TaleTo