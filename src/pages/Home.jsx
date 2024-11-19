import React from 'react';
import Banner from '../components/Banner/Banner';
import Marque from './Marque';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const brands = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Marque brands={brands}></Marque>
        </div>
    );
};

export default Home;
