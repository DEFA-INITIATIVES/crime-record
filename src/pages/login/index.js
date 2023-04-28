import React, {useState} from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

import loginImg from "../../assets/login.jpg";
import { Link } from "react-router-dom";

export default function Login() {
  const [clicked, setClicked] = useState({police:true,forensic:false});
  return (
    <div className="relative w-full h-screen sm:bg-zinc-900/90  bg-gray-400   ">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay hidden  md:block"
        src={loginImg}
        alt="/"
      />
      <div className="flex justify-center items-center h-full">
        <form className="max-w-[400px] w-full mx-auto bg-white rounded-[24px] p-8">
          <h2 className="text-4xl font-bold text-center py-4 font-sans text-gray-700">
            LOGIN
          </h2>
          <div className="flex justify-between py-8">
            <p className={`border  px-6 py-2 relative flex items-center rounded-md cursor-pointer hover:bg-gray-400 ${clicked.police? 'bg-gray-300' : 'bg-none'}`} onClick={()=>{ setClicked({police:clicked.police? clicked.police : !clicked.police,forensic:clicked.forensic? !clicked.forensic : clicked.forensic})}}>
              {" "}
              Police{" "}
            </p>
            <p className={ `border cursor-pointer px-6 py-2 relative flex items-center rounded-md hover:bg-gray-300 ${clicked.forensic? 'bg-gray-300' : 'bg-none'}` } onClick={()=>{ setClicked({police:!clicked.police,forensic:!clicked.forensic})}}>
              Forensics
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-gray-900 font-sans font-bold">
              Username
            </label>
            <input
              className="border relative bg-gray-100 p-2 rounded-md "
              type="text"
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-gray-900 font-sans font-bold">
              Password
            </label>
            <input
              className="border relative bg-gray-100 p-2 rounded-md"
              type="password"
            />
          </div>
          <button className="w-full py-3 mt-8 bg-indigo-600 rounded-md hover:bg-indigo-500 relative text-white">
            <Link to="/home">
            Sign In</Link> 
          </button>
          <p className="flex items-center mt-2 font-semibold font-sans">
            <input className="mr-2" type="checkbox" />
            Remember Me
          </p>
          <p className="text-center mt-8 text-gray-700 font-sans cursor-pointer font-bold">
            Not a member? Sign up now
          </p>
        </form>
      </div>
    </div>
  );
}
