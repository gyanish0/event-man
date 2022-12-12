import { Box, Container, Typography } from "@mui/material";
import React from "react";
import rose from "../assets/rose.jpg";
const TimeLEss = () => {
    return (
        <Box>
            <Container maxWidth="xxl">
                <Box
                    sx={{
                        fontWeight: 500,
                        fontSize: "60px",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h2">
                        As an event planning, we strive to take the beginnings and turn them
                        into comprehensively planned and designed artistic celebrations.
                    </Typography>
                </Box>
            </Container>
            <Box
                sx={{
                    background: `url(${rose})`,
                    height: "100vh",
                    position: "relative",
                    backgroundPosition: "center bottom",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    overflow: "hidden",
                    h4: {
                        p: "30px 0 60px 0",
                        textAlign: "center",
                        fontSize: "62px",
                        fontWeight: "500",
                    },
                    h2: {
                        fontSize: "65px",
                        fontWeight: "600",
                        textAlign: "center",
                    },
                }}
            >
                <Container maxWidth="xxl">
                    <Box>
                        <Typography variant="h4">
                            From destination weddings, social events and parties, public
                            concerts, live events to large-scale gatherings, our vision is to
                            turn your biggest dreams into reality.
                        </Typography>
                        <Typography variant="h2" sx={{
                            p: "60px 0 50px 0 "
                        }}>
                            AT TIMELESS TALES, WE TAKE ON PERSONALISED STORYTELLING COUPLED
                            WITH INGENIOUS CELEBRATORY EVENTS AND TURN THEM INTO THE MOST
                            MAGNIFICENT AFFAIRS.
                        </Typography>
                        <Typography variant="h2" sx={{
                            mt: "20px"
                        }}>
                            WE WELCOME YOU TO BECOME A PART OF OUR STORY.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default TimeLEss;
