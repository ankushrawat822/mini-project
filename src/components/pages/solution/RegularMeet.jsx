import React , { useState , useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { IoIosArrowForward } from 'react-icons/io'
import Slider from "react-slick";

import sliderBluevector from '../../../images/careers/slider-blue-vector.svg'
import sliderTopImg from '../../../images/careers/googlemeet1.png'
import { HiArrowRight } from 'react-icons/hi'

import sliderImg1 from '../../../images/solution/business-int/business-int-1.svg'
import no1 from '../../../images/solution/business-int/no1.svg'
import no2 from '../../../images/solution/business-int/no2.svg'
import no3 from '../../../images/solution/business-int/no3.svg'
import no4 from '../../../images/solution/business-int/no4.svg'


import no5 from '../../../images/solution/business-int/nos5.svg'
import no6 from '../../../images/solution/business-int/nos6.svg'
import no7 from '../../../images/solution/business-int/nos7.svg'
import no8 from '../../../images/solution/business-int/nos8.svg'

import tick from '../../../images/solution/business-int/tick.svg'

import twIcon from '../../../images/solution/custom-app/tw.svg'
import instaIcon from '../../../images/solution/custom-app/insta.svg'
import inIcon from '../../../images/solution/custom-app/in.svg'

const RegularMeet = () => {

  useEffect(()=>{
    Aos.init({duration : 2000})
  } , [])



  const [showCreateMeetBox , setShowCreateMeetBox] = useState(false)

  // input stats
  const [name , setName] = useState("")
  const [startTimeText , setStartTimeText] = useState("")
  const [meetLinkText , setMeetLinkText] = useState("")
  const [topicText , setTopicText] = useState("")

  const handleNameChange = (e)=>{
     setName(e.target.value)
  }

  const handleLinkChange = (e)=>{
    setMeetLinkText(e.target.value)
 }

 const handleStartTimeChange = (e)=>{
  setStartTimeText(e.target.value)
}

const handleTopicChange = (e)=>{
  setTopicText(e.target.value)
}


 const [meets , setMeets] = useState( [
  {
    name : "Ankush Rawat",
    meetLink : "https://meet.google.com/etv-jmry-xsv" ,
    topic : "Philosophy ",
    startTime : "5 PM"
  } ,
  {
    name : "Ansh Mungi",
    meetLink : "https://meet.google.com/etv-jmry-xsv" ,
    topic : "Education",
    startTime : "2 PM"
  } ,
  {
    name : "Alexander Paradker",
    meetLink : "https://meet.google.com/etv-jmry-xsv" ,
    topic : "Politics",
    startTime : "10:30 AM"
  } ,

  {
    name : "Ansh Kumar Rana",
    meetLink : "https://meet.google.com/etv-jmry-xsv" ,
    topic : "Food ",
    startTime : "8 PM"
  } ,

])


   // create meet btn
const handleCreateMeetBtn = () =>{
   
    setMeets(current => [...current, {
      name : name,
      meetLink : meetLinkText ,
      topic : topicText,
      startTime : startTimeText
    } ])

    setName("")
    setMeetLinkText("")
    setTopicText("")
    setStartTimeText("")
}


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 692,
        settings: {
          slidesToShow: 1,
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
      <div data-aos="fade-up" >
        {/* custom application bg div  */}
        <div className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] business-intelligence-bg-img flex flex-col items-center justify-center px-3 lg:px-40'>

          <h1 className='text-[24px]  sm:text-[47px] md:text-[49px] xl:text-[57px] leading-[58px] xl:px-20 font-bold text-white text-center mt-5 mb-4'>Regular Meets
          </h1>
          <p className='text-[16px] sm:text-[18px] md:text-[18px] xl:text-[22px] text-white text-center'>Regular meets help reduce stammering and enhance fluency by providing a consistent platform for speech practice, peer support, constructive feedback, and targeted exercises. They foster confidence, reduce anxiety, and allow participants to track progress, ultimately contributing to improved speech and communication skills.</p>


        </div>
      </div>

      <div data-aos="zoom-in" className='flex flex-col items-center justify-center gap-5 my-10'>
        <p className='text-[36px] font-semibold text-center leading-[39px] text-ce ter'>Create or Join Meet</p>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-4 mt-9 px-3'>
          <p className='text-center text-[20px] lg:text-start lg:w-[60%]'>Create meets to embrace the journey towards confident speech and connect with a supportive community.  </p>
 <button onClick={()=>setShowCreateMeetBox(prev=> !prev)} className='text-white flex items-center justify-center bg-[#023267] w-[200px] rounded-[10px] gap-2 px-[1px] py-[10px]'>Create Meet</button>
        </div>
      </div>


  {/* pop up box  */}

     {/* form section */}
   { showCreateMeetBox && <div data-aos="fade-up" className=' py-10 contact-form-drop-shadow flex flex-col items-center justify-center mt-2 px-3 md:px-10  sm:mx-5 md:mx-20 lg:mx-36 xl:mx-64'>
        {/* inner div */}
        {/* headidng */}
        <p className='text-[24px] sm:text-[28px] font-bold mb-11'>Create a Meet</p>
        {/* form input fields */}
        <div className=' w-full flex flex-col items-center justify-center gap-2'>
          {/* full name */}
          <div className='flex w-full  flex-col sm:flex-row items-center justify-evenly  sm:gap-3 my-2'>
            {/* first name div */}
            <div className='flex w-full flex-col items-start justify-start'>
              <p className='text-[18px]  '>Name</p>
              <input onChange={(e)=>handleNameChange(e)} value={name} className='px-3 w-full h-[40px] rounded-[8px]' type="text" placeholder='enter name' />
            </div>

            {/* last name div */}
           
          </div>
          {/* email and phone  */}
          <div className='flex w-full flex-col sm:flex-row  gap-3 my-2'>
            {/* femaildiv */}
            <div className='flex flex-col sm:w-[50%] items-start justify-start '>
              <p className='text-[18px]'>Paste Google Meet Link</p>
              <input  onChange={(e)=>handleLinkChange(e)} value={meetLinkText} className='px-3 w-full h-[40px] rounded-[8px]' type="text" placeholder='paste meet link here'/>
            </div>
            {/* number div */}
            <div className='flex w-full sm:w-[50%] flex-col items-start justify-start'>
              <p className='text-[18px]'>Enter meet starting Time</p>
              <input onChange={(e)=>handleStartTimeChange(e)} value={startTimeText} className='px-3 w-full h-[40px] rounded-[8px]' type="text" placeholder='7 PM' />
            </div>
          </div>
          {/* subjects */}
         {/* subject div */}
     <div className='flex w-full flex-col items-start justify-start '>
     <p className='text-[18px]'>Topic</p>
     <input onChange={(e)=>handleTopicChange(e)} value={topicText} className='px-3 w-full h-[40px] rounded-[8px]' type="text" placeholder='enter any topic'/>
    </div>
  

    <button onClick={handleCreateMeetBtn} className='my-4 font-bold w-[216px] h-[60px] rounded-[55px] text-white bg-[#094C99] opacity-50'>Create Meet</button>
        </div>
      </div>
}
  {/* pop up box ends */}



      {/* slider  */}
      <div data-aos="fade-up" className=' flex items-center justify-center my-[44px]'>
        <Slider className='slider-outter-bus w-[80vw] md:w-[85vw] xl:w-[75dvw]  ' {...settings}>


          {/* card div 1*/}
         { meets.map((item)=> (
          <div className='relative  ml-11 h-[370px]'>
            <img className='absoute top-0 left-0' src={sliderBluevector} alt="" />
            {/* upper img and text div */}
            <div className='career-outter-card-eff absolute z-10 top-0 left-3'>
              <img className='career-inner-card-img ml-20 h-[100px] w-[150px] my-10' src={sliderTopImg} alt="" />
              {/* text div */}
              <div className='relative ml-2 z-20 flex flex-col items-start justify-center gap-2 p-3 bg-[#98989849]  '>
                <p className=' text-[14px] font-bold'>By - {item.name}</p>
                <p className='text-[16px] text-start leading-[14px] w-[260px] mb-3'>Topic - {item.topic}</p>
                <p className='text-[16px] text-start leading-[14px] w-[260px] mb-3'>Meet Start at - {item.startTime}</p>

                <a href={item.meetLink} target='_blank' className='flex items-center justify-center text-[#17519B] text-[18px] font-semibold gap-2'>Join Now <HiArrowRight></HiArrowRight> </a>
              </div>
            </div>

          </div>))}

        </Slider>
      </div>

  {/* blue div */}
      {/* box 2 */}
      <div className='flex items-center justify-center mt-14'>
        <div className='emerging-tech-white-div-drop-shadow bg-[#023267] flex w-full flex-col items-start justify-star gap-2 text-start p-5 mx-3 sm:w-[80%] lg:w-[78%] rounded-[10px] text-white'>
          <p className='text-[22px] sm:text-[23px] text-center sm:text-start '>In our regular meets, we value a sense of community and mutual support. We encourage participants to help each other by sharing experiences and offering constructive feedback. Please refrain from promoting or selling any products or services during these sessions. By actively engaging and contributing positively, you'll not only enhance your own speech skills but also strengthen our welcoming and collaborative community.</p>

        </div>
      </div>
    

     


       {/* see what we have.... */}
       <div data-aos="fade-up" className='flex flex-col items-center justify-center mt-16'>
                <p className='text-[24px] font-semibold text-center'>Follow us on</p>
                 {/* hr line */}
                 <div className='line w-[85vw] md:w-[70vw] lg:w-[70vw] bg-black h-[2px] mt-3 mb-6 ' ></div>

                 {/* social media icons */}
                 <div className='flex items-center justify-center gap-2'>
                    <img src={inIcon} alt="" />
                    <img src={instaIcon} alt="" />
                    <img src={twIcon} alt="" />
                 </div>
            </div>


    </>
  )
}

export default RegularMeet