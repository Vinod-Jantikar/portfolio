import { Box, Grid, Typography, Card, CardContent, CardMedia, Chip } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { projectData } from "../constant";

const Projects = () => {
    return (
        <Box id="projects" sx={{ marginTop: "80px", padding: "20px" }}>
            {/* Section Title */}
            <Typography
                textAlign="center"
                sx={{
                    fontSize: { lg: 30, md: 30, sm: 25, xs: 20 },
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    color: "#ccd6f6",
                    textTransform: "uppercase",
                }}
                component={motion.div}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                My Projects 🚀
            </Typography>

            {/* Project Grid */}
            <Grid container spacing={4} justifyContent="center" marginTop="20px">
                {projectData.map((project, index) => (
                    <Grid item xs={12} sm={6} md={5} lg={4} key={index}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            style={{
                                borderRadius: "12px",
                                overflow: "hidden",
                                boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
                                transition: "all 0.3s ease-in-out",
                            }}
                        >
                            <Card
                                sx={{
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    position: "relative",
                                    background: '#151c38',
                                    "&:hover": {
                                        boxShadow: "0px 12px 25px rgba(0,0,0,0.2)",
                                    },
                                }}
                            >
                                {/* Project Image */}
                                <Box
                                    sx={{
                                        position: "relative",
                                        overflow: "hidden",
                                        "&:hover img": {
                                            transform: "scale(1.1)",
                                            filter: "brightness(85%)",
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={project.imgUrl}
                                        alt={project.projectName}
                                        sx={{
                                            // objectFit: "cover",
                                            transition: "transform 0.4s ease-in-out, filter 0.3s ease-in-out",
                                        }}
                                    />
                                </Box>

                                {/* Project Details */}
                                <CardContent sx={{ padding: "16px" }}>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: "bold", color: "#c9adf7", marginBottom: "8px" }}
                                    >
                                        {project.projectName}
                                    </Typography>

                                    <Typography variant="body2" sx={{ color: "#ccd6f6", fontSize: "14px" }}>
                                        {project.summary}
                                    </Typography>

                                    {/* Tech Stack Chips */}
                                    <Box sx={{ marginTop: "10px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                                        {project.techStacks.slice(0, 4).map((tech, index) => (
                                            <Chip
                                                key={index}
                                                label={tech}
                                                sx={{
                                                    backgroundColor: "#f1f3f4",
                                                    fontSize: "12px",
                                                    fontWeight: "500",
                                                    color: "#333",
                                                }}
                                            />
                                        ))}
                                        {project.techStacks.length > 4 && (
                                            <Chip label="More..." sx={{ backgroundColor: "#ff9800", color: "white" }} />
                                        )}
                                    </Box>

                                    {/* Links */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            marginTop: "10px",
                                        }}
                                    >
                                        {project.githubLink && (
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                                <Typography
                                                    component="span"
                                                    sx={{
                                                        fontSize: "12px",
                                                        color: "#1976D2",
                                                        fontWeight: "bold",
                                                        "&:hover": { textDecoration: "underline" },
                                                    }}
                                                >
                                                    GitHub Repo
                                                </Typography>
                                            </a>
                                        )}
                                        {project.deployedLink && (
                                            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                                                <Typography
                                                    component="span"
                                                    sx={{
                                                        fontSize: "12px",
                                                        color: "#388E3C",
                                                        fontWeight: "bold",
                                                        "&:hover": { textDecoration: "underline" },
                                                    }}
                                                >
                                                    Live Demo
                                                </Typography>
                                            </a>
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
