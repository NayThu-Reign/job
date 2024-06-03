import {
    Box,
    Typography,
    Button,
    Grid,
    Container,
    IconButton,
} from "@mui/material"

import {
    Facebook as FacebookIcon,
    Email as EmailIcon,
    LinkedIn as LinkedInIcon,
    Google as GoogleIcon,
} from "@mui/icons-material"

import Gmail from "../images/logos_google-gmail.png"

import Facebook from "../images/Vector.png"

import Google from "../images/devicon_google.png"

import LinkedIn from "../images/devicon_linkedin.png"
import { Link } from "react-router-dom"

export default function Footer({theme}) {
    return (
        <Box sx={{ background: "#1E3756", height: "100px", }}>
           <Container sx={{
                 paddingLeft: "78px",
                 paddingRight: "70px",
                 margin: "0 auto",
                 display: "flex",
                 justifyContent: "center",
                 alignItems: "center",
                 height: "100%",
           }}>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Typography sx={{ fontFamily: "Inder", fontSize: "20px", fontWeight: 400, color: "#ffffff",}}>
                            © 2023 <Link style={{ textDecorationColor: "#ffffff"}}><Typography component="span" sx={{ fontFamily: "Inder", fontSize: "20px", fontWeight: 800, color: "#ffffff",}}>Trustlink Co., Ltd.</Typography></Link> All right reserved
                        </Typography>
                    </Grid>
                    <Grid item sx={{ display: "flex", gap: "20px"}}>

                        <Box sx={{ width: "40px", height: "40px", borderRadius: 100, background: "#ffffff", display: "flex", ustifyContent: "center", alignItems: "center"}}>
                            <IconButton>
                                <img src={Facebook} alt="Facebook Icon" />
                            </IconButton>
                        </Box>                        
                        <Box sx={{ width: "40px", height: "40px", borderRadius: 100,  background: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <IconButton>
                                <img src={Gmail} alt="Gmail Icon" />
                            </IconButton>
                        </Box>                        
                        <Box sx={{ width: "40px", height: "40px", borderRadius: 100,  background: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <IconButton>
                                <img src={LinkedIn} alt="LinkedIn Icon" />
                            </IconButton>
                        </Box>                        
                        <Box sx={{ width: "40px", height: "40px", borderRadius: 100,  background: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <IconButton>
                                <img src={Google} alt="Google Icon" />
                            </IconButton>
                        </Box>                        
                    </Grid>
                </Grid>
           </Container>
        </Box>
    )
}