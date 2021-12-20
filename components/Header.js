import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="lg:mx-10 text-pink-500 sticky top-0 p-5 z-50 bg-black shadow-md border-b-2 border-pink-700 ">
      <div className='grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center'>
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid animate-pulse">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            width={200}
            height={200}
            src="https://links.papareact.com/3pi"
          />
        </div>
        <div className='col-span-4 text-left lg:text-center'>
          <div className="cursor-pointer relative h-24 w-24 lg:mx-auto border-pink-500 border-4 rounded-full">
            <Avatar logoutOnPress username={user.get('username')} />
          </div>
          <h1 className="text-2xl animate-bounce ">Welcome to my METAVERSE</h1>
          <h2 className="text-3xl font-bold truncate">{user.getUsername()}</h2>
          <ChangeUserName />
        </div>
      </div>
    </div>
  );
}

export default Header;
