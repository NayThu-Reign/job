import { Box, Typography } from "@mui/material"
import Header from "../components/Header"
import Industries from "../components/Industries"
import Products from "../components/Products"
import AboutUs from "../components/AboutUs"
import Partners from "../components/Partners"


export default function Home({ theme }) {
    return (
        <Box>
            <Products />
            <Industries />
            <Partners />
            <AboutUs />
        </Box>
    )
}