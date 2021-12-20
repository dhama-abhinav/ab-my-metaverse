import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";

function Login(props) {

  const { authenticate } = useMoralis();
    
  return (
    <div className="bg-black text-white relative">
      <div className='flex flex-col absolute z-10 items-center justify-center w-full h-4/6 space-y-4'>
        <Image
        className='rounded-full'
          width={200}
          height={200}
          src="https://links.papareact.com/3pi"
        />
        <button onClick={authenticate} className='text-white bg-yellow-500 rounded-lg font-bold animate-pulse p-5'>Login to Metaverse</button>
      </div>
      <div className=" w-full h-screen ">
        {/* Background image */}
        <Image
          layout="fill"
          objectFit="cover"
          src="https://links.papareact.com/55n"
        />
      </div>
    </div>
  );
}

export default Login;
