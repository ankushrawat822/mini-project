import React , {useEffect , useRef } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";

import {Link} from 'react-router-dom'

import mainSectionArrow from '../../images/home/main-arrow.svg'
import homeHeroArrow from '../../images/home/home-hero-arrow-1-removebg-preview.png'

// solutiong img
import homeSolImg1 from '../../images/home/home-sol-img-3-p.png'
import homeSolImgTest from '../../images/home/EG3.png'

// test imgs
import homeCardImg1 from '../../images/home/home-card-img-1.jpg'
import homeCardImg2 from '../../images/home/home-card-img-2.jpg'
import homeCardImg3 from '../../images/home/home-card-img-3.jpg'
import homeCardImg4 from '../../images/home/home-card-img-4.jpg'

// recognition img
import homeRecoDate from '../../images/home/effective-comm-1.png'
import homeRecoDate2 from '../../images/home/home-card-img-4-speech.jpg'
import homeReco2 from '../../images/home/home-card-img-3-speech.jpg'


// client img
import homeClient1 from '../../images/home/home-client-1.svg'
import homeClient2 from '../../images/home/home-client-2.svg'
import homeClient3 from '../../images/home/home-client-3.svg'
import homeClient4 from '../../images/home/home-client-4.svg'

// client says 
import homeQuotStart from '../../images/home/home-quote-start.svg'
import homeQuotEnd from '../../images/home/home-quote-end.svg'
import homeUserIcon from '../../images/home/home-user-icon.svg'

const logos = [

  { image: homeClient1 },
  { image:homeClient2 },
  { image: homeClient4 },
  { image: homeClient3 },
  { image: homeClient4 },

]

const Home = () => {

  useEffect(()=>{
    Aos.init({duration : 2000})
  } , [])

  const scollToRef = useRef();



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
    
  
  };
  return (
    <>
      {/* black div bg */}
      <main data-aos="fade-up" className='  bg-black w-screen h-[90dvh] home-hero-robot-bg'>
        {/* innovation div */}
        <div className=' p-3 sm:p-10 lg:mx-20 xl:mx-40  lg:pt-14  flex flex-col text-white sm:max-w-[500px] lg:max-w-[650px] 
      md:max-w-[600px]  items-start justify-start'>
          <p className='text-[34px] md:text-[56px]  font-bold leading-[78px]'>FLUENT-SPEECH</p>
          <p className='flex text-[18px] leading-6'> we believe that every voice deserves to be heard with clarity and confidence. Our mission is to empower you to communicate effortlessly, breaking down the barriers that hold you back.</p>
          <img className='w-[156px] h-[122px] py-2 sm:py-3 md:w-[219px] md:h-[137px] lg:ml-5 lg:h-[150px] lg:w-[229px]' src={homeHeroArrow} alt="" />
          {/* know more button div */}
          <div className=' w-full flex items-center justify-center'>
            <button onClick={() => scollToRef.current.scrollIntoView({behavior:"smooth", block: "end", inline:"nearest"})} className='flex items-center justify-center home-hero-know-btn font-bold text-[24px] px-5 py-2 md:px-8 md:py-4 lg:px-14 '>Know More</button>
          </div>

        </div>
      </main>

      <section data-aos="fade-up"  className=' px-3 md:px-10 lg:px-28 xl:px-36'>
        {/* agile global solution 4 card div */}
        <div  className='flex flex-col items-center justify-center mt-10 md:mt-16 lg:my-14'>
          <h2 className='text-[24px] font-bold md:text-[36px] leading-[43px] text-center'>Discover Your Voice</h2>
          <p className='text-center text-[18px] md:text-[24px] leading-[32px] mt-5 md:mt-10 lg:mt-14 '>
          Embark on a journey of self-expression, where your words flow smoothly and your message resonates. With our innovative speech improvement tools and exercises, you can overcome challenges and unlock your true potential.</p>
        </div>

        {/* four cards div */}
        <div ref={scollToRef} data-aos="fade-up" className='flex cursor-pointer items-center justify-center flex-wrap gap-5 md:gap-10 mt-5 md:mt-10 '>
         

           {/* card 1 */}
      { <Link to="/articulation-exercise"><div className=' relative rounded-[8px] home-sol-outter-card-1-eff   w-[321px] h-[238px] lg:w-[261px] lg:h-[238px] text-white'>
        <img  className='w-full h-full rounded-[8px] home-card-1-image-eff' src={homeCardImg2} alt="" />
        {/* text div */}
        <div className='absolute rounded-[8px] px-3   home-sol-card-1 w-full h-full bottom-0 flex flex-col items-start justify-center gap-2'>
          <p className='text-[24px] mt-[20px]'>Articulation Exercise</p>
          <p className='text-[16px]'>Enhance your speech precision with targeted articulation exercise. </p>
          <p className='text-[16px] '>Try it..</p>
        </div>

      </div> </Link> }


           {/* card 1 */}
          { <Link to="/breathing-exercise"> <div className=' relative rounded-[8px] home-sol-outter-card-1-eff   w-[321px] h-[238px] lg:w-[261px] lg:h-[238px] text-white'>
            <img  className='w-full h-full rounded-[8px] home-card-1-image-eff' src={homeCardImg1} alt="" />
            {/* text div */}
            <div className='absolute rounded-[8px] px-3   home-sol-card-1 w-full h-full bottom-0 flex flex-col items-start justify-center gap-2'>
              <p className='text-[24px] mt-[20px]'>Breathing Exercise</p>
              <p className='text-[16px]'>Unlock the power of clear speech with focused breathing exercise. </p>
              <p className='text-[16px] '>Try it..</p>
            </div>

          </div> </Link>}


           {/* card 1 */}
         { <Link to="/regular-meet"><div className=' relative rounded-[8px] home-sol-outter-card-1-eff   w-[321px] h-[238px] lg:w-[261px] lg:h-[238px] text-white'>
            <img  className='w-full h-full rounded-[8px] home-card-1-image-eff' src={homeCardImg3} alt="" />
            {/* text div */}
            <div className='absolute rounded-[8px] px-3   home-sol-card-1 w-full h-full bottom-0 flex flex-col items-start justify-center gap-2'>
              <p className='text-[24px] mt-[20px]'>Regular Meet</p>
              <p className='text-[16px]'>Join our regular meet and connect with a supportive community. </p>
              <p className='text-[16px] '>Try it..</p>
            </div>

          </div> </Link> }


            {/* card 1 */}
         { <Link to="/tongue-twister"> <div className=' relative rounded-[8px] home-sol-outter-card-1-eff   w-[321px] h-[238px] lg:w-[261px] lg:h-[238px] text-white'>
            <img  className='w-full h-full rounded-[8px] home-card-1-image-eff' src={homeCardImg4} alt="" />
            {/* text div */}
            <div className='absolute rounded-[8px] px-3   home-sol-card-1 w-full h-full bottom-0 flex flex-col items-start justify-center gap-2'>
              <p className='text-[24px] mt-[20px]'>Tongue Twisters</p>
              <p className='text-[16px]'>Master pronunciation with challenging tongue twisters exercise. </p>
              <p className='text-[16px] '>Try it..</p>
            </div>

          </div> </Link>}


        </div>


        {/* our recognition and awards..... */}
        <div className='flex flex-col items-center justify-center my-20 md:my-14 lg:my-20'>
          <p className='text-[24px] md:text-[36px] lg:text-[46px] text-center font-bold mb-10 md:mb-10'>Why Fluent-Speech?</p>
          {/* content divs starts*/}
          {/* first starts */}
          <div data-aos="fade-up"  className=' flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 lg:gap-20 '>

            <img className='md:w-[336px] lg:w-[400px] xl:w-[350px] rounded-[100%]' src={homeRecoDate} alt="" />

            <div className=' flex flex-col items-center justify-center text-center md:text-start md:items-start md:justify-start lg:w-[46%]'>
              <h3 className='text-[28px] md:text-[36px] font-bold my-6'>Effective Communication:</h3>
              <p className='text-[#7D7987] text-[18px] leading-[30px]'> Fluent speech is the cornerstone of effective communication. Whether in personal relationships, professional settings, or public speaking, clear and confident expression is vital.</p>
              <p className='text-[#7D7987] text-[18px] leading-[30px] my-2'>Fluent Speech equips you with the skills to convey your thoughts with precision and confidence, ensuring your message is heard and understood </p>
              {/* <p className='text-[#7D7987] text-[18px] leading-[30px]'>
                Manage your schedule using any device</p> */}
            </div>

          </div>
          {/* first ends */}
          <br />
          <br />
          {/* second starts */}
          <div data-aos="fade-up" className=' flex flex-col md:flex-row-reverse items-center justify-center gap-5 md:gap-10 lg:gap-20 md:my-[-50px] lg:[-100px] '>

            <img className='md:w-[336px] lg:w-[410px] xl:w-[500px]' src={homeReco2} alt="" />

            <div className=' flex flex-col items-center justify-center text-center md:text-start md:items-start md:justify-start lg:w-[46%]'>
              <h3 className='text-[28px] md:text-[36px] font-bold my-6'>Boosted Self-Confidence</h3>
              <p className='text-[#7D7987] text-[18px] leading-[30px]'> Stammering or speech challenges can erode self-confidence. Fluent Speech exists to restore that confidence by providing the tools and support you need to overcome speech impediments.</p>
              <p className='text-[#7D7987] text-[18px] leading-[30px] my-2'>We believe that everyone deserves the opportunity to express themselves boldly and without reservation. </p>
              {/* <p className='text-[#7D7987] text-[18px] leading-[30px]'>
              Create your own evaluations or use built in templates for your clients</p> */}
            </div>

          </div>
          {/* second ends */}
          <br />
          <br />
          {/* third starts */}
          <div data-aos="fade-up" className=' flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 lg:gap-20 '>

            <img className='md:w-[336px] lg:w-[410px] xl:w-[500px]' src={homeRecoDate2} alt="" />

            <div className=' flex flex-col items-center justify-center text-center md:text-start md:items-start md:justify-start lg:w-[46%]'>
              <h3 className='text-[28px] md:text-[36px] font-bold my-6'>Career Advancement</h3>
              <p className='text-[#7D7987] text-[18px] leading-[30px]'> In today's competitive world, strong communication skills are paramount. Fluent speech opens doors to career opportunities and personal growth</p>
              <p className='text-[#7D7987] text-[18px] leading-[30px] my-2'>With Fluent Speech, you'll gain the edge you need to excel in interviews, presentations, and everyday interactions, unlocking a world of possibilities. </p>
              {/* <p className='text-[#7D7987] text-[18px] leading-[30px]'>
              Allow clients to setup auto billing from their client portal</p> */}
            </div>

          </div>
          {/* third ends */}
        </div>





      </section>

      {/* <section data-aos="zoom-in" className='  mt-20 flex flex-col items-center justify-center p-3 '>
      
           <h2 className='text-[28px] md:text-[48px] font-bold my-4'>OUR PARTIAL CLIENT LIST</h2>
           
           <div className='line w-[85vw] md:w-[70vw] lg:w-[40vw] bg-black h-[2px] my-3 ' ></div>

           <p className='text-[18px] md:text-[24px] text-center my-2 mb-10 leading-[25px] w-full md:w-[80vw] lg:w-[70vw]'>AGILE GLOBAL has assisted numerous Fortune/Global 1000 and mid-sized firms in their application development, integration, conversion, consolidation and support efforts. We are also dedicated to partnering with early stage and emerging growth enterprise software companies, working with them to bring to market the best technology solutions possible.</p>

 


      </section> */}

 {/* slider  */}
 {/* <div data-aos="zoom-in" className=' flex items-center justify-center my-[44px]'>
 <Slider className='slider-outter  w-[85vw] ' {...settings}>
     {
      logos.map((item)=>(
        <img className='w-[200px] h-[100px] home-client-img' src={item.image} alt='saldk' />
      ))
     }
    </Slider>
 </div> */}

      

{/* what clients say about us section */}
<div  data-aos="fade-up" className='flex flex-col items-center justify-center  mt-[90px]'>
    <p className='text-[24px] md:text-[32px] font-bold'>What User say About us</p>
    {/* <p className='text-center w-[70vw] md:w-[25vw] text-[16px] leading-[20px] mb-[30px]'>Everything you need to know about us</p> */}
    {/* quate div */}
    <div className='  flex relative items-center justify-center py-10 md:py-2  md:w-[55vw]'>
      <img className='absolute top-0 left-0 w-[46px] h-[52px]' src={homeQuotStart} alt="" />
      <p className='text-[18px] text-center w-[90vw]  md:w-[50vw] p-3 md:p-5'>As someone who struggled with stammering for years, I can't express how incredibly helpful this platform has been. The articulation exercises are not only effective but also enjoyable to practice.

 The platform's user-friendly approach have made a world of difference.

I highly recommend Fluent Speech to anyone seeking to improve their speech and gain confidence. It's been a life-changing experience for me, and I couldn't be more grateful for this wonderful platform.</p>
      <img className='absolute bottom-0 right-0 w-[46px] h-[52px]' src={homeQuotEnd} alt="" />
     
    </div>
     {/* user name and image */}
     <div className='flex flex-col items-center justify-center gap-1'>
           <img className='w-[40px] h-[40px]' src={homeUserIcon} alt="" />
           <p className='text-[18px] font-bold '>Ankush Rawat</p>
      </div>
   </div>
      {/* another section */}
      
    </>
  )
}

export default Home