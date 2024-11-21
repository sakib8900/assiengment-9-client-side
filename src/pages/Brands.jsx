import React from 'react';
import Brand from './Brand';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Brands = () => {
    const brands = useLoaderData();
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8">
            <Helmet>
                <title>Brands | Coupon Project</title>
            </Helmet>
            {brands.map((brand, idx) => (
                <Brand key={idx} brand={brand} />
            ))}
        </div>
    );
};

export default Brands;