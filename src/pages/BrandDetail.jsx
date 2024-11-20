import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const BrandDetail = () => {
    const { brand_name, rating, description, brand_logo, shop_Link, category, isSaleOn, coupons } = useLoaderData();

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
        <div className="flex py-10 justify-center items-center min-h-screen bg-gray-100">
            <div className="card w-full md:w-96 bg-base-100 shadow-xl">
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
                    <div className="mt-6 w-full">
                        <h3 className="font-semibold text-lg mb-3">Coupons : {coupons.length}</h3>
                        {coupons.length > 0 ? (
                            <ul className="space-y-2">
                                {coupons.map((coupon, index) => (
                                    <li
                                        key={index}
                                        className="bg-gray-100 border-2 border-red-600 p-3 rounded shadow flex flex-col"
                                    >
                                        <span className="font-bold text-red-600">Code: {coupon.coupon_code}</span>
                                        <p>{coupon.description}</p>
                                        <small className="text-gray-500">Expiry: {coupon.expiry_date}</small>
                                        <small className="text-gray-500">Condition: {coupon.condition}</small>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500">No coupons available for this brand.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandDetail;
