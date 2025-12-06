import React from 'react';
import Navbar from '../Components/Navbar';
import PropertyToolbar from '../Components/Toolbar';
import PropertySection from '../Components/Herosection';
import Footer from '../Components/Footer';
import EssentialToolsSection from '../Components/EssentialTool';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <PropertyToolbar></PropertyToolbar>
            <PropertySection></PropertySection>
            <EssentialToolsSection></EssentialToolsSection>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;