import Marquee from 'react-fast-marquee';
import React from 'react';
import { Link } from 'react-router-dom';

const Marque = ({ brands }) => {
    return (
        <div className="flex gap-2 items-center bg-gray-200 p-2">
            <p className="bg-[#D72050] text-base-100 px-3 py-1">Brands</p>
            <Marquee pauseOnHover={true} speed={100} className="space-x-10">
                {brands.map((brand) => (
                    <Link
                        key={brand._id}
                        to={`/details/${brand._id}`}
                        className="text-red-600 font-bold ml-24 hover:underline"
                    >
                        {/* ekhane logo dile link show kore tai di nai */}
                        {brand.brand_name}
                    </Link>
                ))}
            </Marquee>
        </div>
    );
};

export default Marque;
