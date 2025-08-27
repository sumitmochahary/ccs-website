import { BrowserRouter as Router } from "react-router"
import AppRoutes from "./routes/AppRoutes"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./script/ScrollToTop"
function App() {

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  )
}

export default App
