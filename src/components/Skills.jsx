import { Box, Grid, Typography, Paper, Divider } from "@mui/material";
import { RiReactjsFill } from "react-icons/ri";
import { SiRedux, SiExpress, SiJavascript, SiJest, SiMui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { TbBrandTypescript } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io5";
import { BsGit } from "react-icons/bs";
import { FaBootstrap } from "react-icons/fa6";
import { SiRedis } from "react-icons/si";

const skills = {
    frontend: [
        { name: "React", icon: <RiReactjsFill size="50px" style={{ color: "#61DAFB" }} /> },
        { name: "Redux", icon: <SiRedux size="50px" style={{ color: "#764ABC" }} /> },
        { name: "JavaScript", icon: <SiJavascript size="50px" style={{ color: "#F7DF1E" }} /> },
        { name: "TypeScript", icon: <TbBrandTypescript size="50px" style={{ color: "#3178C6" }} /> },
        { name: "HTML", icon: <AiFillHtml5 size="50px" style={{ color: "#E34F26" }} /> },
        { name: "CSS", icon: <IoLogoCss3 size="50px" style={{ color: "#1572B6" }} /> },
        { name: "Material UI", icon: <SiMui size="50px" style={{ color: "#007FFF" }} /> },
        { name: "Bootstrap", icon: <FaBootstrap  size="50px" style={{ color: "#007FFF" }} /> },
    ],
    backend: [
        { name: "NodeJS", icon: <FaNodeJs size="50px" style={{ color: "#68A063" }} /> },
        { name: "ExpressJS", icon: <SiExpress size="50px" style={{ color: "#68A063" }} /> },
        { name: "MongoDB", icon: <DiMongodb size="50px" style={{ color: "#4DB33D" }} /> },
        { name: "Redis", icon: <SiRedis size="50px" style={{ color: "#F1502F" }} /> },
    ],
    others: [
        { name: "Jest", icon: <SiJest size="50px" style={{ color: "#C21325" }} /> },
        { name: "Git", icon: <BsGit size="50px" style={{ color: "#F1502F" }} /> },
    ]
};

const SkillsSection = ({ title, skills }) => (
    <Box marginBottom="40px">
        <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            marginBottom="20px"
            sx={{ fontSize: { xs: 18, sm: 22, md: 26 }, color: "#ccd6f6" }}
        >
            {title}
        </Typography>
        <Grid container spacing={3} justifyContent="center">
            {skills.map((skill, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                    <Paper
                        elevation={5}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "20px",
                            borderRadius: "15px",
                            backgroundColor: "#f9f9f9",
                            transition: "transform 0.3s",
                            '&:hover': { transform: "scale(1.1)" },
                        }}
                    >
                        {skill.icon}
                        <Typography
                            sx={{
                                marginTop: "10px",
                                fontSize: { xs: 14, sm: 18, md: 20 },
                                fontWeight: "bold",
                            }}
                        >
                            {skill.name}
                        </Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    </Box>
);

const Skills = () => {
    return (
        <Box
            id="skills"
            textAlign="center"
            sx={{ width: { xs: "90%", md: "70%" }, margin: "50px auto" }}
        >
            <Typography
                variant="h4"
                fontWeight="bold"
                marginBottom="40px"
                sx={{ fontSize: { xs: 20, sm: 25, md: 30 }, color: '#ccd6f6' }}
            >
                My Skills
            </Typography>
            
            <SkillsSection title="Frontend" skills={skills.frontend} />
            <Divider sx={{ margin: "20px auto", width: "50%" }} />
            <SkillsSection title="Backend" skills={skills.backend} />
            <Divider sx={{ margin: "20px auto", width: "50%" }} />
            <SkillsSection title="Others" skills={skills.others} />
        </Box>
    );
};

export default Skills;
