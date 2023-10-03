import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import NotFound from "./pages/notfound/NotFound"
import Products from "./pages/products/Products"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />}></Route>
                <Route path="contact" element={<Contact />}></Route>
                <Route path="menu" element={<Products />}></Route>
                <Route path="*" element={ <NotFound />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App