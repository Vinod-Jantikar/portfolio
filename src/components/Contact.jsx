import { BsFillPhoneFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { Box, Stack, Typography, IconButton, Divider } from "@mui/material";

const Contact = () => {
    return (
        <Box id="contact" sx={{ mt: 8, px: 3, textAlign: "center" }}>
            {/* Section Title */}
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#ccd6f6" }}>
                Get In Touch
            </Typography>
            <Divider sx={{ my: 2, backgroundColor: "#4A5568" }} />

            {/* Contact Info */}
            <Stack spacing={3} alignItems="center" sx={{ mt: 3 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <MdMail size="22px" color="#64ffda" />
                    <Typography variant="body1" sx={{ color: "#e2e8f0" }}>
                        vinodjantikar999@gmail.com
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                    <BsFillPhoneFill size="20px" color="#64ffda" />
                    <Typography variant="body1" sx={{ color: "#e2e8f0" }}>
                        +91 9483977282
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                    <ImLocation2 size="20px" color="#64ffda" />
                    <Typography variant="body1" sx={{ color: "#e2e8f0" }}>
                        Bidar, Karnataka
                    </Typography>
                </Stack>
            </Stack>

            {/* Social Links */}
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                sx={{ mt: 4 }}
            >
                <IconButton component={Link} to="https://github.com/Vinod-Jantikar" target="_blank" sx={{ color: "#ccd6f6", transition: "0.3s", '&:hover': { color: "#64ffda" } }}>
                    <FaGithub size="28px" />
                </IconButton>
                <IconButton component={Link} to="https://www.linkedin.com/in/vinod-jantikar" target="_blank" sx={{ color: "#ccd6f6", transition: "0.3s", '&:hover': { color: "#64ffda" } }}>
                    <FaLinkedin size="28px" />
                </IconButton>
            </Stack>

            {/* Footer */}
            <Typography sx={{ mt: 4, color: "#a0aec0", fontSize: "14px" }}>
                © 2024 Jantikar Vinod. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Contact;
