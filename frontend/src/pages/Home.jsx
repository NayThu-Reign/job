import { Box, Typography } from "@mui/material"
import Header from "../components/Header"
import Industries from "../components/Industries"
import Products from "../components/Products"
import AboutUs from "../components/AboutUs"


export default function Home({ theme }) {
    return (
        <Box>
            <Products />
            <Industries />
            <AboutUs />
        </Box>
    )
}