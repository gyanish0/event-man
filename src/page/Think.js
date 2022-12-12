import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Think = () => {
    // "fontFamily": "'Dancing Script', cursive"
    return (
        <Box>
            <Container maxWidth="xxl">
                <Box
                    sx={{
                        p: "20px 0 0 0",
                        h2: {
                            fontFamily: "'Dancing Script', cursive !important",
                            color: "#ff7cbf",
                            textAlign: "center",
                            // lignHeight: "60px",
                            fontWeight: 700,
                        },
                    }}
                >
                    <Typography variant="h2">
                        We think out of the box
                        <Typography variant="h2">to create bespoke events &</Typography>
                        <Typography variant="h2">luxurious celebrations</Typography>
                    </Typography>
                </Box>
                <Box
                    sx={{
                        h2: {
                            pt: "20px",
                            textDecoration: "underline",
                            textAlign: "center",
                            fontWeight: 500,
                            fontSize: "70px",
                        },
                        h3: {
                            fontSize: "45px",
                            textAlign: "center",
                            padding: "20px",
                        },
                        h4: {
                            color: "#6f5a3c",
                            fontSize: "40px",
                            fontWeight: "500",
                            textAlign: "center",
                            padding: "40px 0 40px 0",
                        },
                    }}
                >
                    <Typography variant="h2">About us:- Our Mission & Vision</Typography>
                    <Typography variant="h3">
                        Timeless Tales is a full service event management firm based in
                        India .We bring a fresh, unique approach to the event management
                        industry.
                    </Typography>
                    <Typography variant="h4">
                        Timeless Tales Provide A-Z Wedding Planning services involved in an
                        event planning from social media promotions, entertainment, wedding
                        décor, catering, best wedding venue booking assistance to minute
                        arrangements like wedding stationary , itinerary, gift trousseau and
                        others with a focus of providing one stop all solutions specially
                        for events like Destination Weddings.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Think;
