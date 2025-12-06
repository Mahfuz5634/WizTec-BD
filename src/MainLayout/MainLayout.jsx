import React from 'react';
import Navbar from '../Components/Navbar';
import PropertyToolbar from '../Components/Toolbar';
import PropertySection from '../Components/Herosection';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <PropertyToolbar></PropertyToolbar>
            <PropertySection></PropertySection>
        </div>
    );
};

export default MainLayout;