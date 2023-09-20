// import React from "react";

import { NavLink } from "react-router-dom"



const Header = () => {
  return (
    <div>
      <h2 className="text-3xl">Navbar</h2>
      <nav className="flex gap-6 text-2xl justify-center my-5">
      {/*   <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link> */}

        <NavLink to="/" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-purple-700" : ""
  }>Home</NavLink>
        <NavLink to="/users" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-purple-700" : ""
  }>Users</NavLink>
        <NavLink to="/posts" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-purple-700" : ""
  }>Posts</NavLink>
        <NavLink to="/about" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-purple-700" : ""
  }>About</NavLink>
        <NavLink to="/contact" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-purple-700" : ""
  }>Contact Us</NavLink>
      </nav>
    </div>
  );
};

export default Header;
