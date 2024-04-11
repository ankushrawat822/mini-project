import React, { useState, useEffect } from 'react'
import SpeechToText from './SpeechToText'

import img0 from '../../../images/articulation/0.jpeg'
import img1 from '../../../images/articulation/1.jpg'
import img2 from '../../../images/articulation/2.jpg'
import img3 from '../../../images/articulation/3.jpg'
import img4 from '../../../images/articulation/4.jpg'
import img5 from '../../../images/articulation/5.jpg'
import img6 from '../../../images/articulation/6.jpg'
import img7 from '../../../images/articulation/7.jpg'
import img8 from '../../../images/articulation/8.jpg'
import img9 from '../../../images/articulation/9.jpg'
import img10 from '../../../images/articulation/10.jpg'
import img11 from '../../../images/articulation/11.jpg'
import img12 from '../../../images/articulation/12.jpg'
import img13 from '../../../images/articulation/13.jpg'



const Articulation = () => {
 
    const [startArticulation, setStartArticulation] = useState("false")


    

    
    // reseting speech to text and ai response
     const [resetSpeechToText ,setResetSpeechToText] =useState(true)

    // is image load 
    const [isImageLoad, setisImageLoad] = useState(false)
    // images array
    const image = [
        img0,
        img1,
        img2 ,
        img3 ,
        img4,
        img5 , img6 , img7 , img8 , img9 , img10 , img11 , img12 , img13 
    ]

    // random no.


    // emotions array
    const question = [
        "What's the best piece of advice you ever received?" , 'What is your opinion on social media?' , 'What song currently speaks to you the most?' , 'If you knew the winning lottery numbers, would you keep them to yourself or share with others?' , 'What is one of the great values that guides your life?' , "If you were a vegetable, what vegetable would you be?" , "If you could have any superpower, what would it be and why?", "What's your favorite book?" , "If you could live in a book, TV show, or movie, what would it be?" , "Mountains or ocean?" , "What would you do on a free afternoon in the middle of the week?"
    ]

    const [randomImageNO , setRandomImageNO] = useState(Math.floor(Math.random() * ( (image.length - 1) - 0 + 1) + 0))

    const [randomQueNO , setRandomQueNO] = useState(0)


    const [thinkTimer, setThinkTimer] = useState(40)
    // const [speakTimer, setSpeakTimer] = useState(30)



    const handleImgLoaded = (value) => {
        // if (thinkTimer >= 1) {
        //     const interval =  setInterval(() => {
        //         setThinkTimer(prev => prev - 1)
        //     }, 1000);

        //     return () => clearInterval(interval);
        // }
        console.log(value)
        setisImageLoad(true)
       

    }




  const handleStartTimeFunction = () =>{
            const intervalId = setInterval(() => {
             
              if(startArticulation){
                setThinkTimer(prev => prev - 1);
              }

                     return () => {clearInterval(intervalId) 
                  console.log("clenup")}
               
            }, 1000) 
  }
       
 


    const handleNextImage = () => {
      
        setThinkTimer(40)
        setRandomImageNO(Math.floor(Math.random() * (image.length - 0 + 1) + 0))
      
        setRandomQueNO(prev => prev + 1)
        // setSpeakTimer(30)
        // setResetSpeechToText(prev=>!prev)
    
  
    }

  



    return (
        <>
        

{ startArticulation === "false" ? <div onClick={()=>{setStartArticulation("true"); handleStartTimeFunction()}} className='cursor-pointer articulation-div-drop-shadow flex items-center justify-center mt-12 '><div className='flex items-center justify-center bg-blue-400 px-5 h-[40vh] w-[50vw] rounded-[12px]'>
    <button className='font-bold text-[25px] text-white' >Start Articulation Exercise</button>
 </div></div> : null}

{
 startArticulation === "true" ?
            <div className='flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-evenly gap-9 px-3 mt-8'>
                {/* img container div starts */}
                <div className='flex flex-col text-center items-center justify-center gap-4'>
                    {/* emotion */}
                    <p className='text-[25px] lg:w-[50vw]'>Ques : {question[randomQueNO]}</p>

                     <p className='font-bold text-[22px]'>or</p>
                    {/* image */}
                    <img className='rounded-[12px] lg:h-[350px] articulation-image-div-drop-shadow' onLoad={()=>handleImgLoaded(image[randomImageNO])} src={image[randomImageNO]} alt="" />

                    {/* time section */}
                    <div className='flex flex-col items-center justify-center gap-3'>
                        <p>Think : <span className='font-bold'>{thinkTimer >= 30 ?  thinkTimer - 30 : '0'} sec</span></p>
                        <p>Speak : <span className='font-bold'>{thinkTimer < 30 && thinkTimer > 0 ? thinkTimer : '0' } sec</span></p>
                    </div>

                    {/* btn */}
                    <div className='flex items-center justify-center'>
                        <button className='my-4 font-bold w-[216px] h-[60px] rounded-[55px] text-white bg-[#094c99c9] opacity-50 hover:opacity-80' onClick={handleNextImage}>Next</button>
                    </div>
                </div>
                {/* img container div ends */}


                {/* speech text div starts */}
                <div className=''>
                <SpeechToText  resetSpeechToText={resetSpeechToText}  ></SpeechToText>
                </div>
               
                {/* img container div ends */}
            </div> : null
 
}


  
   {/* blue div */}
      {/* box 2 */}
      <div className='flex items-center justify-center mt-14 mb-10'>
        <div className='emerging-tech-white-div-drop-shadow bg-[#023267] flex w-full flex-col items-start justify-star gap-2 text-start p-5 mx-3 sm:w-[80%] lg:w-[78%] rounded-[10px] text-white'>
          <p className='text-[22px] sm:text-[23px] text-center sm:text-start '>Articulation exercises improve your speech precision and clarity. Receive instant AI-guided feedback for enhanced articulation and confident communication. To perform this exercise - Begin by thinking about provided question or image for 10 seconds. When ready, click "start" to activate the microphone and speak for approximately 30 seconds. Your spoken words will appear in text format for your review. Click "generate AI response" to receive helpful insights and corrections, empowering you to refine your articulation and speaking skills with AI guidance. Click on "Next" button to change question and image.</p>

        </div>
      </div>


        </>
    )
}

export default Articulation