import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedinIn, FaFacebook} from 'react-icons/fa' 
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../assets/W (6).png'
import {Link} from 'react-scroll'

const Navbar = () => {
const [nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)


  return (
    <div className=' fixed w-full h-[80px] flex justify-between z-20 items-center 
    px-4 background-opacity backdrop-blur border-b-[1px] border-[#1d263f] text-[#f3f7f8]'>
        <div className=' color-background'>
            <img src={logo} alt="Logo Image" style={{ width: '80px', height: '70px'}} />
        </div>

        {/* Menu */}
            <ul className='hidden md:flex '>
                <li>
                <Link  to="home" smooth={true} duration={500} >
                    Home
                </Link>
                </li>
                <li>
                <Link  to="about" smooth={true} duration={500} >
                    About
                </Link>
                </li>
                <li>
                <Link  to="skills" smooth={true} duration={500} >
                    Skills
                </Link>
                </li>
                <li>
                <Link  to="work" smooth={true} duration={500} >
                    Work
                </Link>
                </li>
                <li>
                <Link  to="contact" smooth={true} duration={500} >
                    Contact
                </Link>
                </li>
            </ul>   

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="work" smooth={true} duration={500} >
                    Work
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                    Contact
                </Link>
            </li>
        </ul>


        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[605%] left-0'> 
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between 
                    items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#274472]'>
                        <a className='flex justify-between items-center w-full text-gray-300' 
                        href="/"> 
                            Linkedin <FaLinkedinIn size={30} />
                        </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between 
                    items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#41729F]'>
                        <a className='flex justify-between items-center w-full text-gray-300' 
                        href="/"> 
                            Github <FaGithub size={30} />
                        </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between 
                    items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5885AF]'>
                        <a className='flex justify-between items-center w-full text-gray-300' 
                        href="/"> 
                            Email <HiOutlineMail size={30} />
                        </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between 
                    items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#7aa1c5]'>
                        <a className='flex justify-between items-center w-full text-gray-300' 
                        href="/"> 
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                </li>
            </ul>
        </div>
    </div>
    
  );
};

export default Navbar;