import React from 'react'
import Hero from '../components/Home/Hero'
import CardPallete from '../components/Home/CardPallete'
import CardPallete2 from '../components/Home/CardPallete2'
import Slider from '../components/Home/Slider'
import Plans from '../components/Home/Plans'
import Success from '../components/Home/Success'
import Navbar from '../components/Navbar'

function HomePage() {
    return (
        <>
            <Navbar/>
            <Hero />
            <Slider/>
            <CardPallete2 />
            <Plans/>
            <Success />
            {/* <Award /> */}
           
        </>
    )
}

export default HomePage