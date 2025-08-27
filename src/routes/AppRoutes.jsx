import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Services from "../pages/Services"
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
        </Routes>
    )
}

export default AppRoutes