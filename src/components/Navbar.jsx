import React, { useEffect, useState } from 'react'
import navicon from '../assets/navicon.png'
import { Link } from 'react-scroll'
import { FaXmark, FaBars } from "react-icons/fa6";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () =>{
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () =>{
            window.addEventListener('scroll', handleScroll);
        }
    });

    const navItems = [
        {
           link: "Home", path: "home" 
        },
        {
            link: "Services", path: "services" 
         },
         {
            link: "About", path: "about" 
         },
         {
            link: "Products", path: "product" 
         },
         {
            link: "Testimonials", path: "testimonials" 
         },
         {
            link: "FAQ", path: "faq" 
         },
    ];

  return (
    <div>
      <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" 
        : ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                <a href='' className='text-1xl font-semibold flex text-neutralDGrey items-center space-x-2'><img src={navicon} alt='' className='w-10 inline-block items-center'/><span className='text-[#263238]'>
                CB Services</span></a>

                <ul className=' md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link, path}) => <Link key={path} spy={true} 
                        offset={-100} smooth={true} to={path} className='block text-base cursor-pointer text-gray900  hover:textbrandPrimary 
                        first: font-medium'>{link}</Link>)
                    }
                </ul>

                <div className='space-x-12 hidden lg:flex items-center'>
                    <a href='/' className='hidden lg:flex items-center text-brandPrimary'>
                        Login
                    </a>
                    <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded
                    hover:bg-neutralDGrey'>
                        Sign Up
                    </button>
                </div>

                <div className='md:hidden'>
                    <button  onClick={toggleMenu} className=' text-neutralDGrey focus:outline-none focus:text-gray-500'>
                        {
                            isMenuOpen ? (<FaXmark className='h-6 w-6 text-neutralDGrey'/>) : (<FaBars className='h-6 w-6 text-neutralDGrey'/>)
                        }
                    </button>
                </div>
            </div>

            <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({link, path}) => <Link key={path} spy={true} 
                    offset={-100} smooth={true} to={path} className='block cursor-pointer text-base text-white hover:text-gray900
                    first: font-medium'>{link}</Link>)
                }
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
