
import React, { useState } from 'react'
import { useMoralis } from 'react-moralis';

function SendMessage({endOfMessages}) {
    const {user,Moralis } = useMoralis();

    const [input,setInput]=useState('')

    const sendMessage = (e)=>{
        e.preventDefault()
        if(!input) return

        const Messages = Moralis.Object.extend('Messages')
        const messages = new Messages()
        messages.save({
            message : input,
            username : user.getUsername(),
            ethAddress : user.get('ethAddress')
            
        }).then( (message)=> {
            //the obj was saved 
        }, (error)=>{
            console.log(error.message)
        })
        endOfMessages.current.scrollIntoView({behavior : 'smooth'})
        setInput("")
    }
    return (
        <form className='flex fixed bottom-10  w-11/12 bg-black px-4 py-5 max-w-2xl rounded-full border-blue-700 border-2'>
            <input
            value={input}
            onChange={(e)=> setInput(e.target.value)} className='text-white outline-none flex-grow bg-transparent  placeholder-gray-700 pr-5' type="" placeholder='Enter message here' />
            <button type='submit' onClick={sendMessage} className='font-bold text-pink-500' type='submit'>Send</button>
        </form>
    )
}

export default SendMessage
