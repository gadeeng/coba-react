import React from "react";
import Button from "./Component/Elements/Button/Button";


function App() {

  return (
    <div className="bg-slate-200 min-h-screen flex justify-center items-center">
      <div className="flex flex-col bg-white rounded-[30px] gap-[30px] p-[50px] max-w-[500px] w-full">

        {/* Logo */}
        <div className="flex justify-center">
          <h1 className="font-extrabold text-[27px]"> Welcome Back!</h1>
        </div>
    
        {/* Title */}
        <div className="">
          <h1 className="font-bold text-[22px] leading-[33px] mb-[3px]"> Login</h1>
          <p className="text-black opacity-50 text-sm leading-[21px]">Aplikasi Untuk Mengatur Segala Tugas</p>
        </div>

        {/* Pembatas */}
        <hr className="background-grey" />

        {/* Form Login */}
        <form action="" className="flex flex-col gap-[30px]">
          <div className="">
            <label htmlFor="" className="font-semibold">Username</label>
            <div className="flex items-center p-[12px_16px] rounded-full border border-background-grey mt-[6px]">
              <input 
              type="text" 
              className="font-semibold placeholder:font-normal focus:outline-none w-full"
              placeholder="Type your username" />
            </div>

            <label htmlFor="" className="pt-6 pb-3 flex gap-[6px] w-fit">
              <input 
              type="checkbox" 
              className="flex shrink-0 w-[22px] h-[22px] appearance-none checked:border-4 checked:border-solid checked:border-white rounded-full checked:bg-[#55c4ff] ring-1 ring-background-grey" />
              Remember Me
            </label>

            <button 
            type="submit" 
            className="mt-4 flex gap-[10px] justify-center items-center text-white p-[12px_16px] h-12 font-semibold bg-gradient-to-b from-[#977FFF] to-[#6F4FFF] rounded-full w-full border border-taskia-background-grey">
              Sign In
            </button>

            <hr className="background-grey mt-8"/>

            <button 
            type="submit" 
            className="mt-8 flex gap-[10px] justify-center items-center text-white p-[12px_16px] h-12 font-semibold bg-gradient-to-b from-[#977FFF] to-[#6F4FFF] rounded-full w-full border border-taskia-background-grey">
              Create New Account
            </button>
            
          </div>
        </form>
      </div>
    </div>

  )
}

export default App
