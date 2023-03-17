import Link from 'next/link'
import React from 'react'
import  '@/(css)/navbar.css'

const NavBar = () => {


  return (
    <section className='Navbar__section'>
        <h1 className='navbar__title'>Welcome to my blog!</h1>
        <nav className='navbar__nav'>
            <Link className='Navbar__Link' href={"/?page=0"}>Home</Link>
            <Link className='Navbar__Link' href={"/postblog"}>Add a blog post!</Link>
            <Link className='Navbar__Link' href={"/about"}>About</Link>
        </nav>
    </section>
  )
}

export default NavBar