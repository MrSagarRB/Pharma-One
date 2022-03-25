import React from "react";
import Select from "react-select";
import CircleIcon from "@mui/icons-material/Circle";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className=" h-[60px]  bg-[#F7FAFD] border-2 flex items-center justify-between  py-1 px-20">
      
      <div className="h-[38px] w-[440px]  rounded-[4px] flex items-center ">
        <input
          type="text"
          className=" text-[#1d242e] w-full h-full bg-[#E3EBF3] outline-none px-3"
          placeholder="Search for anything here.."
        />
        <SearchIcon className=" bg-[#E3EBF3]  " sx={{ height: "100%" }} />
      </div>

      <div>
        <select className="border-none bg-transparent text-[#1D242E] text-[12px]">
          <option>English (US)</option>
        </select>
      </div>

      <div className="flex flex-col items-center text-[#1D242E]">
        <div>
          {" "}
          <CircleIcon className="text-[#FED600]" />{" "}
          <span className="text-[14px]"> Good Morning </span>{" "}
        </div>
        <div>
          <span className=" text-[12px]"> 14 January 2022 . 22:45:04</span>{" "}
        </div>
      </div>
    </div>
  );
}

export default Header;
