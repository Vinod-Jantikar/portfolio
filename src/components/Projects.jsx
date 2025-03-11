import { Box, Grid, Typography, Card, CardContent, CardMedia, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { projectData } from "../constant";

const Projects = () => {
    return (
        <Box id="projects" sx={{ marginTop: "80px", padding: "40px 20px", textAlign: "center" }}>
            {/* Section Title */}
            <Typography
                component={motion.h2}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                sx={{
                    fontSize: { lg: 32, md: 30, sm: 26, xs: 22 },
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    color: "#ccd6f6",
                    textTransform: "uppercase",
                    marginBottom: "30px",
                }}
            >
                My Projects 🚀
            </Typography>

            {/* Project Grid */}
            <Grid container spacing={4} justifyContent="center">
                {projectData.map((project, index) => (
                    <Grid item xs={12} sm={6} md={5} lg={4} key={index}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card
                                sx={{
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    position: "relative",
                                    background: "rgba(21, 28, 56, 0.9)",
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    transition: "all 0.3s ease-in-out",
                                    "&:hover": {
                                        boxShadow: "0px 12px 30px rgba(0,0,0,0.3)",
                                    },
                                }}
                            >
                                {/* Project Image */}
                                <Box sx={{ position: "relative", overflow: "hidden" }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={project.imgUrl}
                                        alt={project.projectName}
                                        sx={{
                                            transition: "transform 0.4s ease-in-out, filter 0.3s ease-in-out",
                                            "&:hover": {
                                                transform: "scale(1.1)",
                                                filter: "brightness(85%)",
                                            },
                                        }}
                                    />
                                </Box>

                                {/* Project Details */}
                                <CardContent sx={{ padding: "20px" }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: "bold",
                                            color: "#c9adf7",
                                            marginBottom: "8px",
                                            textAlign: "center",
                                        }}
                                    >
                                        {project.projectName}
                                    </Typography>

                                    <Typography variant="body2" sx={{ color: "#ccd6f6", fontSize: "14px" }}>
                                        {project.summary}
                                    </Typography>

                                    {/* Tech Stack Chips */}
                                    <Box
                                        sx={{
                                            marginTop: "12px",
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: "6px",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {project.techStacks.slice(0, 4).map((tech, index) => (
                                            <motion.div
                                                key={index}
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Chip
                                                    label={tech}
                                                    sx={{
                                                        backgroundColor: "#f1f3f4",
                                                        fontSize: "12px",
                                                        fontWeight: "500",
                                                        color: "#333",
                                                        cursor: "pointer",
                                                    }}
                                                />
                                            </motion.div>
                                        ))}
                                        {project.techStacks.length > 4 && (
                                            <Chip label="More..." sx={{ backgroundColor: "#ff9800", color: "white" }} />
                                        )}
                                    </Box>

                                    {/* Links */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            gap: "10px",
                                            marginTop: "15px",
                                        }}
                                    >
                                        {project.githubLink && (
                                            <Button
                                                variant="outlined"
                                                component="a"
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{
                                                    fontSize: "12px",
                                                    color: "#1976D2",
                                                    borderColor: "#1976D2",
                                                    textTransform: "none",
                                                    "&:hover": {
                                                        backgroundColor: "#1976D2",
                                                        color: "#fff",
                                                    },
                                                }}
                                            >
                                                GitHub Repo
                                            </Button>
                                        )}
                                        {project.deployedLink && (
                                            <Button
                                                variant="contained"
                                                component="a"
                                                href={project.deployedLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{
                                                    fontSize: "12px",
                                                    backgroundColor: "#388E3C",
                                                    textTransform: "none",
                                                    "&:hover": {
                                                        backgroundColor: "#2E7D32",
                                                    },
                                                }}
                                            >
                                                Live Demo
                                            </Button>
                                        )}
                                    </Box>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;
