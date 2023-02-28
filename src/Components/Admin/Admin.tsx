import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";
import profile from '../../img/profile.png'

const Home = () => {
  const [textBoxValue, setTextBoxValue] = useState("");

  const handleTextBoxChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTextBoxValue(event.target.value);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      axios.post("http://localhost:3000/experience/create", {
        header: textBoxValue,
        description: "any description",
      });
      console.log("Successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
        <h1 className=" bg-white text-4xl font-bold text-center text-black object-top">
          Admin Panel
        </h1>
      
      {/* side bar in white color using tailwind */}
      <div className="flex-row">
        {/* add two seperate white boxes using tailwind in to the center */}
        
              
      </div>
      <div className="flex flex-row">
        <div className="rounded-b-lg flex flex-col w-1/5 h-screen bg-white">
          <div className="flex flex-col items-center justify-center w-full h-1/6">
            <img
              className="w-20 h-20 rounded-full"
              src=""
              alt="profile"
            />

            <h1 className="text-xl font-bold text-center text-black">Admin</h1>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-5/6">
            <div className="flex flex-col items-center justify-center w-full h-1/6">
              <button className="rounded-xl border-2 text-xl w-[8rem] text-center text-black font-[Courier New] hover:bg-green-400 hover:text-white">
                Dashboard
              </button>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-1/6">
            <button className="rounded-xl border-2 text-xl  w-[8rem] text-center text-black font-[Courier New] hover:bg-green-400 hover:text-white">
                Education
              </button>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-1/6">
            <button className="rounded-xl border-2 text-xl  w-[8rem]  text-center text-black font-[Courier New] hover:bg-green-400 hover:text-white">
                Skills
              </button>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-1/6">
            <button className="rounded-xl border-2 text-xl  w-[8rem] text-center text-black font-[Courier New] hover:bg-green-400 hover:text-white">
                Projects
              </button>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-1/6">
            <button className="rounded-xl border-2 text-xl  w-[8rem]  text-center text-black font-[Courier New] hover:bg-green-400 hover:text-white">
                Dashboard
              </button>
            </div>
          </div>
        </div>
        <div className="flex  flex-col gap-4  w-4/5 m-2 h-screen ">
          <div className="rounded-xl   bg-white flex flex-col items-center justify-center w-full h-2/6">
            yuxari
            </div>
            <div className="flex rounded-xl flex-col bg-white  items-center justify-center w-full h-4/6">
              asagi
              </div>
          </div>
      </div>
      {/* <input className='rounded-md flex bg-white cursor-text text-black' type="text" value={textBoxValue} onChange={handleTextBoxChange} />
       <button className='border-radius-[1em] bg-slate-600' onClick={handleSubmit}>Submit</button> */}
    </div>
  );
};

export default Home;
