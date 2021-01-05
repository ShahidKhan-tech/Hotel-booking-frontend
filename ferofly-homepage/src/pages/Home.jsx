import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import First from '../images1/inside/first.webp';
import Booknow1 from './Booknow';
import Rooms from './Rooms';
import About from './About';
import Contact from './Contact';
import './Home.css'
import ThingsToDo from '../components/ThingsToDo';

export default function Home() {
    return (
        <>
        {/* <Hero hero="defaultHero">
        </Hero> */}
        <div className="container">
            <h1 className="box" ><b><i>Ferofly</i></b></h1>
            <h3 className="subBox"><i>Megnify Your Journey With US</i></h3>
        <div className="shahi">
        <div className="text-center">
        <img src={First} className="" alt="nothing"/>
        </div>
        
        {/* <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at 300$">
                <Link to="/rooms" className="btn btn-primary">
                      Our Rooms
                </Link>
        </Banner> */}
        
        <About/>
        <Rooms/>
        <Services/> 
        <FeaturedRooms/>
        <ThingsToDo/>
        <Contact/>
        </div>
        </div>
        
        </>

    )
}
