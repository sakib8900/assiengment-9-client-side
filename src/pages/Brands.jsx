import React from 'react';
import Brand from './Brand';
import { useLoaderData } from 'react-router-dom';

const Brands = () => {
    const brands = useLoaderData();
    console.log(brands);
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8">
            {brands.map((brand, idx) => (
                <Brand key={idx} brand={brand} />
            ))}
        </div>
    );
};

export default Brands;