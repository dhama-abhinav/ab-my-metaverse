import React from 'react'
import { useMoralis } from 'react-moralis';

function ChangeUserName() {
    const { setUserData, isUserUpdating, userError, user } = useMoralis();
    const setUserName = ()=>{
        const username = prompt(`Enter your new username !!! (current : ${user.getUsername()})`)
        
        if(!username) return
        setUserData({
            username :username
        })
    }
    return (
        <div className='text-sm absolute top-5 right-10'>
            <button disabled={isUserUpdating} onClick={setUserName} className='hover:text-pink-700'>Change username</button>
        </div>
    )
}

export default ChangeUserName
