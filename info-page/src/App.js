import React from "react"
import About from "./Components/About"
import Footer from "./Components/Footer"
import Info from "./Components/Info"
import Interests from "./Components/Interests"

export default function Page() {
    return (
        <div className="container">
        <Info />
        <About />
        <Interests />
        <Footer />
        </div>
    )
}

