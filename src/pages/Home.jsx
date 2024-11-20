import React from 'react';
import Banner from '../components/Banner/Banner';
import Marque from './Marque';
import { useLoaderData } from 'react-router-dom';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
// import Footer from '../components/Footer/Footer';

const Home = () => {
    const brands = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Marque brands={brands}></Marque>
            <Banner2></Banner2>
            <Banner3></Banner3>
        </div>
    );
};

export default Home;
