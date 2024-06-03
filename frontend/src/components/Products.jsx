import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    Typography,
} from "@mui/material"

import { Link } from "react-router-dom"

import Sigma from "../images/Sigma-DS2-Card-Printer-copy-1024x921.png"

export default function Products({ theme }) {
    return (
        <Box sx={{ marginTop: "15px"}}>
            <Container sx={{
                paddingLeft: "78px",
                paddingRight: "70px",
                margin: "0 auto",
                height: "100%",
            }}>
               <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "63px"
               }}>
                    <Box sx={{
                         width: "394px",
                         height: "270px",
                        //  background: "#72B3E357",
                        //  borderRadius: "50%",
                        // background: "linear-gradient(#72B3E3 34%, #FFFFFF 0)",
                        // background: "#72B3E357",

                        borderRadius: "50%",
                         border: "none",
                         display: "flex",
                         justifyContent: "center",
                         alignItems: "center",
                    }}>
                        <Typography sx={{ textAlign: "center", color: "#1E3756" }}>
                            OUR PRODUCTS
                        </Typography>
                    </Box>
               </Box>

               <Box sx={{ display: "flex", gap: "20px"}}>
                    <Card sx={{
                            width: 302,
                            height: 300,
                            borderRadius: "10px",
                            boxShadow: "0px 4px 4px 0px #1E375666",
                            background: "#FFFFFF",
                            position: "relative",
                            overflow: "visible",
                        }}>
                            <CardContent sx={{
                                // position: "absolute",
                                position: "relative",

                                // zIndex: 1,
                                // top: "calc(100% + 97.17px)"
                            }}>
                                <img src={Sigma} width="300" height="269.83" style={{ position: 'absolute', top: " calc(100% - 97.17px)", left: '50%', transform: 'translateX(-50%)', zIndex: 1 }} />


                            </CardContent>
                            <Link style={{  position: "absolute", bottom: "60px", left: "50%", transform: "translateX(-50%)" }}>
                                    <Typography sx={{textAlign: "center", color: "#000000" }}>
                                        Sigma DS2
                                    </Typography>
                            </Link>

                    </Card>
                    <Card sx={{
                            width: 302,
                            height: 300,
                            borderRadius: "10px",
                            boxShadow: "0px 4px 4px 0px #1E375666",
                            background: "#FFFFFF",
                            position: "relative",
                            overflow: "visible",
                        }}>
                            <CardContent sx={{
                                // position: "absolute",
                                position: "relative",

                                // zIndex: 1,
                                // top: "calc(100% + 97.17px)"
                            }}>
                                <img src={Sigma} width="300" height="269.83" style={{ position: 'absolute', top: " calc(100% - 97.17px)", left: '50%', transform: 'translateX(-50%)', zIndex: 1 }} />


                            </CardContent>
                                <Link style={{  position: "absolute", bottom: "60px", left: "50%", transform: "translateX(-50%)" }}>
                                    <Typography sx={{textAlign: "center", color: "#000000" }}>
                                        Sigma DS2
                                    </Typography>
                                </Link>

                    </Card>
                    <Card sx={{
                            width: 302,
                            height: 300,
                            borderRadius: "10px",
                            boxShadow: "0px 4px 4px 0px #1E375666",
                            background: "#FFFFFF",
                            position: "relative",
                            overflow: "visible",
                        }}>
                            <CardContent sx={{
                                // position: "absolute",
                                position: "relative",

                                // zIndex: 1,
                                // top: "calc(100% + 97.17px)"
                            }}>
                                <img src={Sigma} width="300" height="269.83" style={{ position: 'absolute', top: " calc(100% + -97.17px)", left: '50%', transform: 'translateX(-50%)', zIndex: 1 }} />


                            </CardContent>
                            <Link style={{  position: "absolute", bottom: "60px", left: "50%", transform: "translateX(-50%)" }}>
                                    <Typography sx={{textAlign: "center", color: "#000000" }}>
                                        Sigma DS2
                                    </Typography>
                            </Link>
                    </Card>

                    <Card sx={{
                            width: 302,
                            height: 300,
                            borderRadius: "10px",
                            boxShadow: "0px 4px 4px 0px #1E375666",
                            background: "#FFFFFF",
                            position: "relative",
                            overflow: "visible",
                        }}>
                            <CardContent sx={{
                                // position: "absolute",
                                position: "relative",

                                // zIndex: 1,
                                // top: "calc(100% + 97.17px)"
                            }}>
                                <img src={Sigma} width="300" height="269.83" style={{ position: 'absolute', top: " calc(100% + -97.17px)", left: '50%', transform: 'translateX(-50%)', zIndex: 1 }} />


                            </CardContent>
                            <Link style={{  position: "absolute", bottom: "60px", left: "50%", transform: "translateX(-50%)" }}>
                                    <Typography sx={{textAlign: "center", color: "#000000" }}>
                                        Sigma DS2
                                    </Typography>
                            </Link>
                    </Card>
                </Box>
                <Box sx={{
                    marginTop: "45px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Button sx={{
                        width: 300,
                        height: 60,
                        borderRadius: 20,
                        background: "linear-gradient(180deg, #4C74A7 -375%, #FFFFFF 118.33%)",
                        boxShadow: "box-shadow: 0px 4px 4px 0px #00000040 inset",
                        fontSize: "20px",
                        color: "#1E3756",
                    }}>
                        More Products
                    </Button>
                </Box>
                <Box sx={{ marginTop: "25px" }}>
                    <Typography sx={{ fontSize: "20px", color: "#000000B2;" }}>
                        We are offering high quality, branded card personalisation products and security solutions for corporate, government organisation and banks.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}