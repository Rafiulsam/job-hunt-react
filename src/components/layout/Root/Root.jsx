import React from 'react';
import Header from '../../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;