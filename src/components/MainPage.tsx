import { useState, useEffect } from "react"

import Heading from "./heading/Heading"
import About from "./About"
import SellOffering from "./SellOffering"
import Contributors from "./Contributors"
import Footer from "./Footer"

export default function MainPage() {
    return <>
        <Heading/>
        <About/>
        <SellOffering/>
        <Contributors/>
        <Footer/>
    </>
}