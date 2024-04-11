import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import logo from '../../images/nav/Flogo.jpg'
import { AiOutlineSearch } from 'react-icons/ai'
import { VscGlobe } from 'react-icons/vsc'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {

    const oneRef = useRef(null)


    useEffect(() => {
        document.addEventListener('click', handleOnClickedOutsideMobMenu, true)
    }, [])



    // states for drop down menus
    const [showHomeMenu, setShowHomeMenu] = useState(false)
    const [showSolutionMenu, setShowSolutionMenu] = useState(false)


    // states for hamburder menu
    const [menuIcon, setMenuIcon] = useState(false)

    //    state to show mabile nav links
    const [ShowMobileNavDiv, setShowMobileNavDiv] = useState(false)

    //  state for showing home menu links
    const [showHomeMenuLinks, setShowHomeMenuLinks] = useState(false)

    //  state for showing home menu links
    const [showSolutionMenuLinks, setShowSolutionMenuLinks] = useState(false)

    // state to close menu , when clicked on menu link
    const [closeMenuMobile, setCloseMenuMObile] = useState(false)


    const handleCrossIcon = () => {
        setMenuIcon(false)
        setShowMobileNavDiv(false)
    }



    const handleHamburgerIcon = () => {
        setMenuIcon(true)
        setShowMobileNavDiv(true)
    }


    //   close menu when clicked outside
    const handleOnClickedOutsideMobMenu = (e) => {

        if (!oneRef.current.contains(e.target)) {
            setMenuIcon(false)
            setShowMobileNavDiv(false)
            console.log("clicked outside")
        }


    }
    return (
        <>


            {/* // main div starts */}
            <div className='relative  flex justify-between px-4 items-center lg:justify-start  gap-x-10  '>
                {/* logo div */}
                <div>
                    <Link to='/'> <img className='md:ml-1 w-[120px] h-[85px] my-3 lg:my-0' src={logo} alt="logo" /></Link>
                </div>
                {/* links div */}
                <div className='hidden lg:flex '>
                    <ul className='flex items-center justify-center  text-[18px] gap-x-10'>
                        <li onMouseEnter={() => setShowHomeMenu(true)} onMouseLeave={() => setShowHomeMenu(false)} className='home-nav-desk-animation-ul flex items-center justify-center h-[93px]'><Link className='flex items-center justify-center' to="/"> Home </Link>

                            {/* home drop down menues ends */}
                        </li>



                        <li onMouseEnter={() => setShowSolutionMenu(true)} onMouseLeave={() => setShowSolutionMenu(false)} className='flex items-center justify-center  h-[93px]'>Features  <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown> {/* home drop down menues start */}
                            {showSolutionMenu && <div onMouseEnter={() => setShowSolutionMenu(true)} className='home-nav-desk-animation-links absolute z-10 top-[90px] bg-white '>
                                <ul className=' flex flex-col items-center justify-center gap-2 p-4 emerging-tech-white-div-drop-shadow text-[18px]'>

                                    <li className='cursor-pointer px-2 py-1 rounded-[6px] hover:w-full hover:text-center hover:bg-[#E8E8E8]'><Link to='/articulation-exercise'>Articulation Exercise</Link></li>

                                    <li className='cursor-pointer px-2 py-1 rounded-[6px] hover:w-full hover:text-center hover:bg-[#E8E8E8]'><Link to='/breathing-exercise'>Breathing Exercise</Link></li>


                                    <li className='cursor-pointer px-2 py-1 rounded-[6px] hover:w-full hover:text-center hover:bg-[#E8E8E8]'><Link to='/regular-meet'>Regular Meet</Link></li>

                                    <li className='cursor-pointer px-2 py-1 rounded-[6px] hover:w-full hover:text-center hover:bg-[#E8E8E8]'><Link to='/tongue-twister'>Tongue Twisters</Link></li>


                                </ul>
                            </div>}
                            {/* home drop down menues ends */}</li>


                        {/* <li><Link to="/courses">Courses</Link></li> */}

                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                {/* search and language div */}
                {/* <div className='hidden xl:flex ml-10 items-center justify-center gap-1'>
                    <AiOutlineSearch className='text-[20px] '></AiOutlineSearch>
                    <p>English/Other language</p>
                    <VscGlobe className='text-[23px] font-bold'></VscGlobe>
                </div> */}

                {/* <VscGlobe className='text-[23px] font-bold hidden lg:flex xl:hidden'></VscGlobe> */}


                {/* mobile responsive  */}
                <div className='lg:hidden'>
                    {menuIcon ? (<RxCross2 onClick={handleCrossIcon} className='text-[27px] font-bold'></RxCross2>) : <GiHamburgerMenu onClick={handleHamburgerIcon} className='text-[27px] font-bold'></GiHamburgerMenu>}
                </div>
            </div>



            {/* mobile links   */}
            {
                ShowMobileNavDiv &&
                <div ref={oneRef} className='home-nav-desk-animation-links z-10 mobile-nav-drop-shadow absolute top-[80px]  w-full bg-white '>
                    <ul >
                        <li onClick={(prev) => setShowHomeMenuLinks((prev) => !prev)} className='flex items-center justify-center text-[22px] sm:text-[24px] p-2'>Home </li>
                        {/* {
                        showHomeMenuLinks && 
                        <div>
                            <ul className='text-[19px] sm:text-[20px]'>
                            
                            <li onClick={handleCrossIcon} className='cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]'><Link to='/our-driver'>Driver</Link></li>
                                <li onClick={handleCrossIcon} className='cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]'><Link to='/services'>Services</Link></li>
                                <li  onClick={handleCrossIcon} className='px-2 py-1 rounded-[6px] w-full text-center cursor-pointer hover:bg-[#E8E8E8]'><Link to='/about'>About Us</Link></li>
                            </ul>
                        </div>
                    } */}
                    </ul>
                   

                    <ul>
                        <li onClick={handleCrossIcon} className='flex items-center justify-center text-[22px] sm:text-[24px] p-2'><Link to='/articulation-exercise'>Articulation Exercise</Link></li>
                        <li onClick={handleCrossIcon} className='flex items-center justify-center text-[22px] sm:text-[24px] p-2'><Link to='/breathing-exercise'>Breathing Exercise</Link></li>

                        <li onClick={handleCrossIcon} className='flex items-center justify-center text-[22px] sm:text-[24px] p-2'> <Link to="/regular-meet">Regular Meet</Link></li>
                        <li onClick={handleCrossIcon} className='flex items-center justify-center text-[22px] sm:text-[24px] p-2'><Link to='/tongue-twister'>Tongue Twisters</Link></li>



                        <li onClick={handleCrossIcon} className='flex items-center justify-center text-[22px] sm:text-[24px] p-2'> <Link to='/contact'>Contact Us</Link> </li>


                    </ul>

                </div>
            }


        </>
    )
}

export default Navbar