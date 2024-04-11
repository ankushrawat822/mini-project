import React , {useEffect, useState} from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import  'regenerator-runtime/runtime'
import Airesponse from './Airesponse';
const SpeechToText = ({resetSpeechToText }) => {

  // user audio to text
   const [userInputText , setUserInputText] = useState("")


   useEffect(() => {
    setUserInputText("")
    console.log("testing")
   }, [resetSpeechToText])
   

   const startListening = () =>  SpeechRecognition.startListening({ continuous: true , language : 'en-IN' })
  //  const stopListning = SpeechRecognition.stopListening()
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    
      if (!browserSupportsSpeechRecognition) {
        console.log("no mic")
        return <span>Browser doesn't support speech recognition.</span>;
      }
  return (
    <>
      
      <div className='speech-to-text-drop-shadow mt-3 lg:w-[30vw] px-5 py-2 '>

      <p>Microphone: <span className='font-bold'> {listening ? 'on' : 'off'}</span></p>

        <div className='flex items-center justify-between'>
        <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={startListening}>Start</button>
        <button className='text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={()=>{SpeechRecognition.stopListening(); setUserInputText(transcript)}}>Stop</button>
        <button className='my-4 font-bold py-2 rounded-[8px] text-white bg-[#094c99c9] opacity-50 hover:opacity-60 px-3' onClick={()=>{resetTranscript()}}>Reset</button>
        </div>
       
       
        <p className='text-blue-400 font-bold pt-4 px-2 text-justify' >{transcript}</p>
      </div>

       {/* ai response */}
       <div className='mb-10'>
          <Airesponse userInputText={userInputText}></Airesponse>
       </div>
    </>
  )
}

export default SpeechToText