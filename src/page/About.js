import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import flower from "../assets/flower.jpg";
import weeding from "../assets/weeding.jpg";
const About = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Container maxWidth="xxl">
                <Box>
                    <Grid container spacing={1}>
                        <Grid item xs={5}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <img
                                    src={flower}
                                    alt="img"
                                    style={{ width: "500px", height: "650px" }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={7}>
                            <Box
                                sx={{
                                    textAlign: "-webkit-center",
                                    h3: {
                                        color: "#4E6274",
                                    },
                                    h6: {
                                        color: "#4E6274",
                                    },
                                    img: {
                                        width: "800px",
                                        height: "400px",
                                        position: "absolute",
                                        top: "228px",
                                        right: "-24px",
                                    },
                                }}
                            >
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    width: "50%",
                                }}>
                                    <Box>
                                        <Typography variant="h3">About us</Typography>
                                        <Typography variant="h6">
                                            The Timeless Tales is a Event planning service agency
                                            dedicated to giving clients a perfect event .
                                        </Typography>
                                        <Typography variant="h6">
                                            Guided by passion and professional experience, we can make
                                            your most magical wedding dreams happen.
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        position: "relative",
                                    }}
                                >
                                    <img src={weeding} alt="weeding" />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default About;
