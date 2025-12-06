import React from 'react';
import Navbar from '../Components/Navbar';
import PropertyToolbar from '../Components/Toolbar';
import PropertySection from '../Components/Herosection';
import Footer from '../Components/Footer';
import EssentialToolsSection from '../Components/EssentialTool';
import HeroExtra from '../Components/HeroExtra';
import PartnersSection from '../Components/OurPartner';
import PartnersMarquee from '../Components/PrtnerMarquee';
import TestimonialsMarquee from '../Components/Testmonials';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <PropertyToolbar></PropertyToolbar>
            <PropertySection></PropertySection>
            <HeroExtra></HeroExtra>
            <EssentialToolsSection></EssentialToolsSection>
            <PartnersMarquee></PartnersMarquee>
            <PartnersSection></PartnersSection>
            <TestimonialsMarquee></TestimonialsMarquee>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;