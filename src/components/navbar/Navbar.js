import React, { useState } from 'react'


import { NavLink } from 'react-router-dom'
import SearchBar from '../search/Search'

import './NavbarStyles.css'

function Navbar() {
    const [nav] = useState(false)
    // const handleNav = () => setNav(!nav)

    return (
            <nav className={nav ? 'navbar navbar-bg' : 'navbar'}>
                <div className={nav ? 'logo dark' : 'logo'}>
                   <NavLink to='/home' style={{ textDecoration:"none"}}><h2>SECOND CHANCE.</h2></NavLink>
                </div>

                <ul className="nav-menu">
                    <NavLink activeClassName='active' to='/home' >Home</NavLink>
                    <NavLink activeClassName='active' to='/catalog' >Catalog</NavLink>
                    <NavLink activeClassName='active' to='/brands' >Brands</NavLink>
                    <SearchBar/>
                </ul>
            </nav>
    )
}

export default Navbar
