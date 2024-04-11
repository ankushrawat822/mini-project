import { useRef, useLayoutEffect } from 'react'
import React , {useEffect , useState} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bg from '../../images/contact/hero-bg.svg'
import fb from '../../images/contact/contact-fb.svg'
import ig from '../../images/contact/contact-ig.svg'
import linkedin from '../../images/contact/contact-in.svg'
import tw from '../../images/contact/contact-tw.svg'

import ourHeadquater from '../../images/contact/contact-our-headquater.png'
import officeImg1 from '../../images/contact/contact-office-1.svg'


const Contact = () => {

  useEffect(()=>{
    Aos.init({duration : 2000})
  } , [])


  gsap.registerPlugin(ScrollTrigger);
  const firstCircle = useRef();
  const secondCircle = useRef();
  const thirdCircle = useRef();



  useLayoutEffect(() => {


    let ctx = gsap.context(() => {
      gsap.to(firstCircle.current, {
        y: -200,
        scrollTrigger: {
          trigger: "#test",
          // markers: true,
          start: "top 78%",
          end: "top 40%",
          scrub: true,
        }
      });


      gsap.to(secondCircle.current, {
        y: -200,
        scrollTrigger: {
          trigger: "#test2",
          // markers: true,
          start: "top 78%",
          end: "top 40%",
          scrub: true,
        }
      });

      gsap.to(thirdCircle.current, {
        y: -200,
        scrollTrigger: {
          trigger: "#test3",
          // markers: true,
          start: "top 78%",
          end: "top 40%",
          scrub: true,
        }
      });


    });
    return () => ctx.revert();

  }, []);
  return (
    <>
      {/* hero section starts */}
      <section data-aos="zoom-in">
        {/* contact bg div  */}
        <div className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] contact-bg-img flex items-center justify-center'>

          <h1 className='text-[34px]  sm:text-[64px] font-bold text-white'>Contact Us</h1>

        </div>

        {/* we want to hear div  */}
        <div data-aos="fade-up" className='px-3 sm:px-20 md:px-44 '>
          <p className='text-[28px] font-semibold leading-[38px] sm:leading-[58px] lg:my-9 text-center mt-5'>WE WANT TO HEAR FROM YOU</p>

          <p className='text-[18px] md:text-[20px] text-center my-3 mt-5 lg:px-54'>  Have a question for us?
            Want to learn more about what we do or how to partner with us?
            <br className='my-2' />
            OR
            <br className='my-2' />
            Maybe you just want to chat about our technology and know why we are so excited about it?
            <br />
            We would love to hear from you. You can reach us through any of the ways below, and we will take it from there!</p>
        </div>
      </section>
      {/* hero section ends */}





     






    



      {/* form section */}
      <div data-aos="fade-up" className=' py-10 contact-form-drop-shadow flex flex-col items-center justify-center mt-32 px-3 md:px-10  sm:mx-5 md:mx-20 lg:mx-36 xl:mx-64'>
        {/* inner div */}
        {/* headidng */}
        <p className='text-[34px] sm:text-[48px] font-bold mb-11'>Have any queries?</p>
        {/* form input fields */}
        <div className=' w-full flex flex-col items-center justify-center gap-2'>
          {/* full name */}
          <div className='flex w-full  flex-col sm:flex-row items-center justify-evenly  sm:gap-3 my-2'>
            {/* first name div */}
            <div className='flex w-full sm:w-[50%] flex-col items-start justify-start'>
              <p className='text-[18px]  '>First Name</p>
              <input className='px-3 w-full h-[40px] rounded-[8px]' type="text" />
            </div>

            {/* last name div */}
            <div className='flex w-full sm:w-[50%] flex-col items-start justify-start '>
              <p className='text-[18px]'>Last Name</p>
              <input className='px-3 w-full h-[40px] rounded-[8px]' type="text" />
            </div>
          </div>
          {/* email and phone  */}
          <div className='flex w-full flex-col sm:flex-row  gap-3 my-2'>
            {/* femaildiv */}
            <div className='flex flex-col sm:w-[50%] items-start justify-start '>
              <p className='text-[18px]'>email</p>
              <input className='px-3 w-full h-[40px] rounded-[8px]' type="email" />
            </div>
            {/* number div */}
            <div className='flex w-full sm:w-[50%] flex-col items-start justify-start'>
              <p className='text-[18px]'>Phone Number</p>
              <input className='px-3 w-full h-[40px] rounded-[8px]' type="tel" />
            </div>
          </div>
          {/* subjects */}
         {/* subject div */}
     <div className='flex w-full flex-col items-start justify-start '>
     <p className='text-[18px]'>Subject</p>
     <input className='px-3 w-full h-[40px] rounded-[8px]' type="text" />
    </div>
    {/*  checkbox */}
    <div className='flex items-center justify-start gap-3 mt-3 sm:items-start sm:justify-start'>
      <input className='text-[18px] h-[20px] w-[20px]' type="checkbox" />
      <p className='text-[18px]'>You accept the terms of service and the privacy policy</p>
    </div>

    <button className='my-4 font-bold w-[216px] h-[60px] rounded-[55px] text-white bg-[#094C99] opacity-50'>Send message</button>
        </div>
      </div>





    </>
  )
}

export default Contact