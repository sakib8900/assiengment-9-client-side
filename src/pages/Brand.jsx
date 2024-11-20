import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Brand = ({ brand }) => {
    const {brand_name, rating, description, brand_logo, shop_Link, category, isSaleOn} = brand;
    
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className="text-yellow-400" />);
            } else if (i - rating < 1) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-400" />);
            }
        }
        return stars;
    };
    return (
            <div className="card w-full border-2">
                <figure className="p-5">
                    <img src={brand_logo} alt={brand_name} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-bold text-gray-800">{brand_name}</h2>
                    <p className="text-sm text-gray-600">Category: {category}</p>
                    <div className="flex items-center mt-2">
                        {renderStars(rating)}
                        <span className="ml-2 text-gray-600">({rating.toFixed(1)})</span>
                    </div>
                    <p className="mt-4 text-gray-700">{description}</p>
                    <a
                        href={shop_Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary mt-4"
                    >
                        Visit Shop
                    </a>
                    {isSaleOn && <p className="text-green-600 font-semibold mt-2">🔥 Sale is ON!</p>}
                </div>
            </div>
    );
};

export default Brand;