import {
    Grid,
    Typography,
    Box,
    Card,
    Container,
    CardContent
} from "@mui/material"

import Logo from "../images/logo-1.png"

export default function AboutUs({theme}) {
    return (
        <Box>
            <Box sx={{
                display: "flex",
                // gap: "218.25px",
                marginTop: "79px",
                marginBottom: "125px",
            }}>
                <Box sx={{
                    width: "512.75px",
                    height: "402.43px",
                }}>
                    <Typography>Hello World</Typography>
                </Box>
                <Box sx={{ display: "flex", position: "relative", marginTop: "80px", marginRight: "70px" }}>
            {/* First Card */}
            <Box sx={{ position: "relative", zIndex: 3 }}>
                <Card sx={{
                    width: "323px",
                    height: "450px",
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <CardContent sx={{ width: "215px", height: "344px", marginTop: "53px" }}>
                        <Typography sx={{ fontFamily: "Inder", fontSize: "30px", color: "#1E3756", marginBottom: "36.31px" }}>
                            OUR MISSION
                        </Typography>
                        <Typography sx={{ fontSize: "16px", lineHeight: "19.36px" }}>
                            Knowing customer requirements and anticipating future trends.
                            Providing fast response, innovations, efficient and effective performance.
                            Building long term relationships with colleagues, suppliers and customers.
                            Enhancing competency through continuous improvement.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            {/* Second Card */}
            <Box sx={{ position: "relative", marginLeft: "-60px" }}>
                <Card sx={{
                    width: "323px",
                    height: "450px",
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <CardContent sx={{ width: "215px", height: "344px", marginTop: "53px" }}>
                        <Typography sx={{ fontFamily: "Inder", fontSize: "30px", color: "#1E3756", marginBottom: "36.31px" }}>
                            OUR VISION
                        </Typography>
                        <Typography sx={{ fontSize: "16px", lineHeight: "19.36px" }}>
                            Leading the industry with cutting-edge solutions.
                            Achieving excellence through innovation and quality.
                            Building a sustainable future with responsible practices.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
            </Box>
        </Box>
    )
}
