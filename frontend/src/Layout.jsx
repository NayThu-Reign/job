import { Outlet } from "react-router-dom"

import { Box, Container } from "@mui/material"
import Footer from "./components/Footer"
import Header from "./components/Header"
export default function Layout() {
    return (
        <Box sx={{ maxWidthidth: "1440px" }}>
            <Header />
            <Outlet />
            <Footer />
        </Box>
    )
}