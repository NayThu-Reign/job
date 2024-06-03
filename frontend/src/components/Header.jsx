import {
    Grid,
    Typography,
    Box,
    Container
} from "@mui/material"

import Logo from "../images/logo-1.png"

export default function Header({ theme }) {
    return (
        <Box>
            <Box sx={{ position: "relative",width: "100%", height: "820px", }}>
                <Box sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%", // Adjust the height as needed
                    // backgroundImage: `url(${HeaderBackground})`,
                    backgroundImage: "url('src/images/download (13).jpg')",

                    backgroundRepeat: "no-repeat",
                    // background: "#87ceeb",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: -1, // Ensure it's behind other content
                }}>

                    <Container 
                        sx={{
                            paddingLeft: "78px",
                            paddingRight: "70px",
                            margin: "0 auto",
                            position: "relative",
                            zIndex: 1,
                        }}
                    >
                        <Grid container justifyContent="flex-end" alignItems="center" sx={{ marginTop: "20px"}}>
                            <Grid item>
                                <img src={Logo} alt="logo image" width="201" height="30.7" />
                            </Grid>
                        </Grid>

                        <Box sx={{ position: "relative", marginTop: "60px" }}>
                            <Grid container justifyContent="space-between">
                                <Grid item sx={{
                                    width: 368,
                                    height: 60,
                                    border: "1px solid",
                                    borderImage: "linear-gradient(105.25deg, #FFFFFF 1.22%, #36C8DA 100.11%)",
                                    borderImageSlice: 1,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "20px",
                                            fontFamily: "Kadwa",                
                                        }}
                                    >
                                        The Future Of Business Optimization

                                    </Typography>
                                </Grid>

                                <Grid>

                                </Grid>

                                <Box sx={{
                                    position: "absolute",
                                    top: "calc(100% + 229px)",
                                    left: 0,
                                    zIndex: 1,
                                }}>
                                    <Typography sx={{
                                        fontFamily: "Inknut_Antiqua",
                                        fontSize: "60px"
                                    }}>
                                        TrustLink System Integrator
                                    </Typography>
                                </Box>
                            </Grid>
                        </Box>
                    </Container>

                    
                </Box>
            </Box>
        </Box>
    )
}