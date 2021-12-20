import Image from 'next/image';
import React from 'react'
import { useMoralis } from 'react-moralis';

function Avatar({username ,logoutOnPress}) {
    const { user,logout } = useMoralis();
    return (
        <Image className='rounded-full bg-black hover:opacity-75 hover:animate-pulse' layout='fill' src={`https://avatars.dicebear.com/api/personas/${username || user.get('username')}.svg`}
        onClick={()=> logoutOnPress && logout()}
        />
    )
}

export default Avatar
