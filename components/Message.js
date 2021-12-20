import React from 'react'
import { useMoralis } from 'react-moralis';
import TimeAgo from 'timeago-react'
import Avatar from './Avatar';

function Message({message}) {
    const { user } = useMoralis();
    const isUserMessage = message.get('ethAddress') === user.get('ethAddress')

    return (
        <div className={`flex items-end space-x-2 relative ${isUserMessage && 'justify-end'}`}>
            <div className={`relative h-8 w-8 ${isUserMessage && 'order-last ml-2' }`}>
                <Avatar username={message.get('username')} />
            </div>
            <div className={`flex space-x-4 p-3 rounded-lg ${isUserMessage ? 'rounded-br-none bg-pink-600' : 'rounded-bl-none bg-blue-700'}`}>
                <h1>{message.get('message')}</h1>
            </div>
            {/* time ago */}
            
            <TimeAgo
            className={`text-[10px] italic text-white ${isUserMessage && 'order-first pr-1'}`}
            datetime={message.createdAt} />
            
            <p className={`absolute text-xs -bottom-5 ${isUserMessage ? 'text-pink-500': 'text-blue-500'} `}>
                {message.get('username')}
            </p>
        </div>
    )
}

export default Message
