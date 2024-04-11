import React, { useState , useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import ArrowImg from '../../../images/solution/mobile/arrow.svg'
import twIcon from '../../../images/solution/custom-app/tw.svg'
import instaIcon from '../../../images/solution/custom-app/insta.svg'
import inIcon from '../../../images/solution/custom-app/in.svg'
import './breathing-style.css'


// dropdown
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Breathing = () => {

  const [readingTextChange , setReadingTextChange] = useState(0)



  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  // english reading text
  const englishReadingText = ['Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.' , 
  "The most beautiful thing we can experience is the mysterious. It is the source of all true art and science. He to whom the emotion is a stranger, who can no longer pause to wonder and stand wrapped in awe, is as good as dead; his eyes are closed. The insight into the mystery of life, coupled though it be with fear, has also given rise to religion. To know what is impenetrable to us really exists, manifesting itself as the highest wisdom and the most radiant beauty, which our dull faculties can comprehend only in their most primitive forms—this knowledge, this feeling, is at the center of true religiousness. In this sense, and in this sense only, I belong to the ranks of devoutly religious men." , 
  "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. You may not control all the events that happen to you, but you can decide not to be reduced by them. You alone are enough; you have nothing to prove to anybody. If you don't like something, change it. If you can't change it, change your attitude. Try to be a rainbow in someone's cloud. Nothing will work unless you do. You are the sum total of everything you've ever seen, heard, eaten, smelled, been told, forgot—it's all there. You are the sum of your experiences. You can't change the past, but you can change the way you feel about it. Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently. You can't really know where you are going until you know where you have been." ,
  "You must be the change you wish to see in the world. In a gentle way, you can shake the world. An eye for an eye only ends up making the whole world blind. The best way to find yourself is to lose yourself in the service of others.",
  "It always seems impossible until it's done. Education is the most powerful weapon which you can use to change the world. I am fundamentally an optimist. Whether that comes from nature or nurture, I cannot say. Part of being optimistic is keeping one's head pointed toward the sun, one's feet moving forward." ,
  "Twenty years from now, you will be more disappointed by the things you didn't do than by the ones you did do. Sail away from the safe harbor. Explore. Dream. Discover."




 ]

 // hindi reading text
 const hindiReadingText = [
  "मेरा सपना है कि एक दिन यह देश सच्चे धर्मिकता का उत्थान करेगा, जब सभी लोग बराबरी और सामान्यता के आदर में मिलेंगे। मेरा सपना है कि एक दिन हम सब साथ में खड़े होंगे, निर्विघ्न एक समृद्ध और महान देश के रूप में, जहाँ लोग एक-दूसरे की श्रद्धा करते हैं, और किसी के रंग, धर्म, या जाति के कारण नहीं बिना किसी प्रकार के भेदभाव के।",
  "जब हम अपने खुद के पैरों पर खड़े होते हैं, तो हम दुनिया को बदल सकते हैं। हमें आपसी सद्भाव की ओर बढ़ना होगा, हमें एक समरस और समाजवादी समाज की ओर बढ़ना होगा, जिसमें हम सभी बराबरी और न्याय का आदर करते हैं। हमें अपर्याप्त जीवन की आदतों को बदलना होगा और साथ मिलकर हम एक सशक्त और एकत्रित दुनिया का निर्माण करेंगे।",
  "मत पूछो कि तुम्हारा देश तुमसे क्या कर सकता है, पूछो कि तुम क्या कर सकते हो तुम्हारे देश के लिए। यह एक महत्वपूर्ण सवाल है जिसका उत्तर हमें देना होगा। हमें सब मिलकर काम करना होगा, हमें समस्याओं का समाधान ढूँढ़ना होगा और हमें एक बेहतर और उत्कृष्ट दुनिया का निर्माण करना होगा।",
  "आप खुद ही वो परिवर्तन बनो, जिसका तुम इंतजार कर रहे हो दुनिया से। हम सभी को अपनी सोच और क्रियाओं को सुधारने का संकल्प लेना होगा, और हमें न्याय, ईमानदारी, और अहिंसा के माध्यम से सच्चे स्वतंत्रता की ओर बढ़ना होगा।"
 ]


 const sanskritReadingText = [
  "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते संगोऽस्त्वकर्मणि॥",
  "न कर्मणामनारंभान्नैष्कर्म्यं पुरुषोऽश्नुते। न च सन्न्यसनादेव सिद्धिं समधिगच्छति॥",
  "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
  "यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवता। यत्रैतास्तु न पूज्यन्ते सर्वास्तत्राफलाः क्रियाः॥"
 ]


 const [selectLanguage , setSelectLanguage] = useState(englishReadingText)

 const handleEnglishLanguage = () =>{
  setSelectLanguage(englishReadingText)
  setReadingTextChange(0)
 }

 const handleHindiLanguage = () =>{
  setSelectLanguage(hindiReadingText)
  setReadingTextChange(0)
 }

 const handleSanskritLanguage = () =>{
  setSelectLanguage(sanskritReadingText)
  setReadingTextChange(0)
 }

 function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

  return (
    <>
      <div data-aos="flip-down">
        {/* custom application bg div  */}
        <div className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] government-bg-img flex flex-col items-center justify-center px-3 lg:px-40'>

          <h1 className='text-[24px]  sm:text-[47px] md:text-[49px] xl:text-[57px] leading-[58px] xl:px-20 font-bold text-white text-center mt-5 mb-4 '>Breathing Exercise
          </h1>
          <p className='text-[16px] sm:text-[18px] md:text-[18px] xl:text-[22px] text-white text-center'>Discover the transformative power of controlled breathing. Our carefully designed breathing exercises will enhance your speech clarity and boost confidence.</p>

        </div>
      </div>

      {/* breathing starts */}

   {/* blue div */}
      {/* box 2 */}
      <div className='flex items-center justify-center mt-14'>
        <div className='emerging-tech-white-div-drop-shadow bg-[#023267] flex w-full flex-col items-start justify-star gap-2 text-start p-5 mx-3 sm:w-[80%] lg:w-[78%] rounded-[10px] text-white'>
          <p className='text-[22px] sm:text-[23px] text-center sm:text-start '>This exercise enhances speech fluency by promoting controlled breathing, aiding in clear and confident articulation. To perform this exercise - Engage with the animation by synchronizing your breath with the expanding and shrinking circle. Inhale deeply during expansion and speak as the circle shrinks. This rhythmic practice fosters breath control and enhances your speech clarity.</p>

        </div>
      </div>

    


       {/* breathing starts */}






      {/* Agile Global’s Mobile Business Solutions
 */}
      <div data-aos="fade-down" className='my-7'>
        <p className='mb-6 text-[22px] sm:text-[36px] font-semibold text-center text-[#17519BFC] my-24'>Start Breathing Exercise
        </p>
        {/*  para and image div  */}
        <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-evenly px-3 lg:px-10 xl:px-24 rounded-[8px]'>
         <div className='lg:w-[50%] flex flex-col items-center justify-center breathing-exe-drop-shadow p-3 rounded-[8px]'>
          <p className='mb-5 text-[17px] mt-2 px-3 text-center font-bold  text-[#17519BFC]'>Inhale through your nose, take a deep breath, and then exhale through your mouth while speaking a few words or phrases below.</p>
         <p className='text-[17px] sm:text-[20px]  text-justify leading-[30px] text-[#2E2A2A] px-2'>{selectLanguage[readingTextChange]}
          </p>

          <div className='flex items-center justify-center my-7 mt-10'>
            <button  className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={()=>setReadingTextChange(prev => prev + 1)}>Change Text</button>


            {/* dropdown starts */}

            <Menu as="div" className="relative ml-56  inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Select Language
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <p
                 onClick={handleEnglishLanguage}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 English
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  onClick={handleHindiLanguage}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Hindi
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  onClick={handleSanskritLanguage}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Sanskrit
                </p>
              )}
            </Menu.Item>
            {/* <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>



            {/* dropdown ends */}
          </div>

         </div>
         

          {/*  imgae */}
          {/* <img className='  transition  ease-in-out delay-150  hover:scale-125' src={ArrowImg} alt="" /> */}
          <div className='lg:mt-[-50px] flex items-center justify-center rounded-full  w-[350px] h-[350px]'>
          <div className=' relative rounded-full '>
            <p className='anim-circle'></p>
         </div>

          </div>
          
        </div>
      </div>

    
      


      {/* see what we have.... */}
      <div data-aos="zoom-in" className='flex flex-col items-center justify-center mt-20'>
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

export default Breathing