import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div className="relative">
            <header className="sticky top-0 z-50 w-full">
                <Navbar></Navbar>
            </header>
            <main className="min-h-[calc(100vh-465px)] w-11/12 mx-auto my-5 lg:my-10">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;