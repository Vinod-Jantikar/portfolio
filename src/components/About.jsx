import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "center",
                textAlign: { xs: "center", md: "left" },
                // height: "100vh",
                padding: { xs: 4, md: 9 },
                gap: { xs: 4, md: 8 },
                color: "#fff",
            }}
        >
            {/* Left Section - Text */}
            <Box
                sx={{
                    flex: 1,
                    maxWidth: { xs: "100%", md: "50%" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "flex-start" },
                }}
            >
                <motion.h1
                    className="headline"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Transforming Concepts into <span className="highlight">Seamless User Experiences</span>
                </motion.h1>

                <motion.p
                    className="subtext"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                >
                    Hi! I'm <span className="name">Vinod Jantikar</span>, a Full Stack Developer from <span className="country">India</span>.
                </motion.p>
            </Box>

            {/* Right Section - Image with Irregular Border */}
              {/* Right Section - Image */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
                sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: { xs: "100%", md: "50%" }, 
                }}
            >
                <img
                    src="assets/profile.jpg" 
                    alt="Vinod Jantikar"
                    className="profile-img"
                />
            </Box>
        </Box>
    );
};

export default About;