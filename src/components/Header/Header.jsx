import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css";
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const {user , logout} = useContext(AuthContext)
    // console.log(user && user.name);
    const links = <>
        <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
        >
            Home
        </NavLink>
        <NavLink
            to="/brands"
            className={({ isActive }) => (isActive ? "active" : "")}
        >
            Brands
        </NavLink>
        <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "active" : "")}
        >
            My Profile
        </NavLink>
        <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
        >
            About Dev
        </NavLink>
    </>;

    return (
        <div className="navbar bg-base-100 font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3">
                        {links}
                    </ul>
                </div>
                    <Link to="/" className="btn btn-ghost font-bold text-2xl animate-bounce text-red-500">Discount Pro</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && user?.email ? <button onClick={logout} className="btn btn-error">logout</button> : <Link to="/auth/login" className="btn btn-error">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;
