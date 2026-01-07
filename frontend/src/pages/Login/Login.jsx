import React, { useState } from "react";
import background from "../../assets/background/bg.jpg";
const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden flex justify-center items-center">
      {/* background image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={background}
        alt=""
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
      <form className="flex flex-col items-center w-[90%] absolute z-10 sm:max-w-96 m-auto mt-14 gap-4 text-white  bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_40px_rgba(238,122,201,0.25)] rounded-4xl px-10 py-6">
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl">{currentState}</p>
        </div>
        {currentState === "Login" ? (
          ""
        ) : (
          <input
            type="text"
            className="w-full px-3 py-2 border border-white/10"
            placeholder="Name"
            required
          />
        )}
        <input
          type="email"
          className="w-full px-3 py-2 border border-white/10"
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="w-full px-3 py-2 border border-white/10"
          placeholder="Password"
          required
        />
        <div className="w-full flex justify-between text-sm mt-[-8px]">
            <p className="cursor-pointer">Forgot your password ?</p>
            {
                currentState==='Login'?<p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>: <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
            }
        </div>
        <button className='bg-gradient-to-r from-pink-500 to-purple-600
                hover:opacity-90 transition-all duration-300 text-white font-light px-14 py-3 mt-4 rounded-full'>{currentState==='Login'?'Sign In':'Sign Up'}</button>
      </form>
    </div>
  );
};

export default Login;
