import React from 'react';
import { Navbar } from '../components/Navbar';
import "../pages/Homepage.module.css";
import img1 from "../../assets/sec3.jpg";
import img2 from "../../assets/sec4.jpg";
import { Footer } from '../components/Footer';
import { ServiceProducer } from '../components/ServiceProducer';

export const HomePage = ()=>{
    return(
        <div>
        <Navbar/>
        <div className='section1'>
            <h1>Your search for the best interior designers</h1>
            <h2>ends here</h2>
        </div>
        <section className='section2'>
            <img src={img1} alt='interior design image'/>
            <div style={{width:'40%'}}>
            <h4>homie</h4>
            <h1>SKILLED DESIGNERS</h1>
            <p>
            At homie, we have curated a network of highly skilled and experienced interior designers who have a passion for transforming spaces. From contemporary minimalism to luxurious elegance, our diverse pool of designers offers a wide range of styles and approaches to cater to your specific preferences. Whether you're seeking a complete home renovation, a room makeover, or expert guidance on color schemes and furniture selection, our interior designers are here to guide you every step of the way. They understand the importance of functionality, aesthetics, and creating spaces that truly inspire and enhance your daily life.
            </p>
            </div>
        </section>
        <section className='section3'>
            <div style={{width:'50%'}}>
            <h4>homie</h4>
            <h1>BEST IN THE MARKET</h1>
            <p>
            We believe that finding the perfect interior designer should be an enjoyable and seamless experience. Whether you're seeking a complete home renovation, a room makeover, or expert guidance on color schemes and furniture selection, our interior designers are here to guide you every step of the way. They understand the importance of functionality, aesthetics, and creating spaces that truly inspire and enhance your daily life.Discover the perfect interior designer who resonates with your style and transforms your space into a reflection of your individuality. Let homie be your go-to resource for finding the right talent to shape your dream interior design project.
            </p>
            </div>
            <img src={img2} alt='interior design image'/>
        </section>
        <section className='section4'>
            <h1>Reviews</h1>
            idhar reviews aayenge...mat pucho kaise
            bas aayenge reviews yaha pe
        </section>
        <ServiceProducer/>
       <Footer/>
        </div>
    )
}
