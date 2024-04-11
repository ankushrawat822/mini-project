import React, { useState } from 'react'
import axios from 'axios'
const Airesponse = ({userInputText}) => {

    //  const apiKey =(import.meta.env.VITE_REACT_APP_OPENAI_API_KEY)
    //  console.log(apiKey)
  

    const [input, setInput] = useState("hey , how are you?")

   // ai response answer
    const [aiResonseAns , setAiResponseAns] = useState("")

    //  const handleSend = async () =>{
    //     const res = await sendMsgToOpenAi(input)
    //     console.log(res)
    //  }
    
    const handleSend = async () => {
        const response = await axios.post(
            "https://api.openai.com/v1/completions",
            {
                prompt: `read the text : "${userInputText}" . NOW analyze it and answer few question ONLY IN  paragraph and NOT IN bullet points and try to keep the answer in ONLY ONE paragraph and SHORT . is the text fluent and well articulated ?, if no then why not and how can the same thing be said in better way. NOTE that the text I will provide you won't have any context and background and IT'S okay to be that. You just paraphrae the text in better way. your job is to help me  improve my communication and articulation by analyzing the text. Also note that the given text is not written but actually spoken. you have to improve my verbal articulation and communication by analyzing that text.`,

                model: 'gpt-3.5-turbo-instruct',
                temperature: 0.5,
                max_tokens: 356,
                // top_p: 1,
                // frequency_penalty: 0,
                // presense_penalty: 0
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + (import.meta.env.VITE_REACT_APP_OPENAI_API_KEY),
                },
            }
        );

        setAiResponseAns(response.data.choices[0].text)
       // console.log("the user input text is : " + userInputText)

       // return response.data.choices[0].text;
    };



    return (
        <>
            <div className='speech-to-text-drop-shadow mt-32 lg:w-[30vw] px-5 py-2 '>

                {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}

                <div className='flex items-center justify-between'>
                     
                    <button className='text-white  bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={handleSend}>Generate AI Response</button>
                    <button className='my-4 font-bold py-2 rounded-[8px] text-white bg-[#094c99c9] opacity-50 hover:opacity-60 px-3' onClick={()=>setAiResponseAns("")}>Reset</button>

                </div>


                <p className='text-[#00ba13] font-bold pt-4 px-2 text-justify' >{aiResonseAns}</p>
            </div>

        </>
    )
}

export default Airesponse