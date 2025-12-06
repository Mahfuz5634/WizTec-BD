import React from 'react';
import Navbar from '../Components/Navbar';
import PropertyToolbar from '../Components/Toolbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <PropertyToolbar></PropertyToolbar>
        </div>
    );
};

export default MainLayout;