import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Services = () => {
    return (
        <Box
            sx={{
            }}
        >
            <Container maxWidth="xxl">
                <Box
                    sx={{
                        textAlign: "center",
                        marginTop: "30px",
                        "h2": {
                            color: "#4E6274",
                            fontWeight: "500",
                            fontSize: "75px",
                        }
                    }}
                >
                    <Typography variant="h2">Our Services</Typography>
                </Box>
                <Box sx={{
                    p: "200px",
                    "h3": {
                        color: "#4E6274",
                        textAlign: "center",
                        fontSize: "40px",
                        p: "60px"
                    },
                    "h4": {
                        color: "#4E6274",
                        textAlign: "center",
                        fontSize: "25px"

                    }
                }}>
                    <Grid container spacing={3}>
                        <Grid item lg={4} md={4} sm={4}>
                            <Typography variant="h3">
                                Wedding Planning
                            </Typography>
                            <Typography variant="h4" sx={{ mt: "45px" }}>
                                Sit back and relax! We'll
                                figure everything out for
                                you, from planning
                                to hosting.
                            </Typography>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4}>
                            <Typography variant="h3">
                                Full Service
                            </Typography>
                            <Typography variant="h4" sx={{ mt: "45px" }}>
                                Don't know where to start?
                                Let's figure out your
                                planning timeline
                                and checklist!
                            </Typography>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4}>
                            <Typography variant="h3">
                                Birthday party & Anniversary
                            </Typography>
                            <Typography variant="h4">
                                Need help with planning?
                                We got you! Let us be the
                                extra hand you need on
                                your special day
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Services;
