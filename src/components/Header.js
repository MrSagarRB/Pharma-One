import React, { useEffect, useState } from "react";
import Select from "react-select";
import CircleIcon from "@mui/icons-material/Circle";
import SearchIcon from "@mui/icons-material/Search";
import Clock from "react-live-clock";

function Header() {
  const [greetingMsg, setGeetingMsg] = useState();

  const d = new Date();
  const todayDate = d.getDate();
  const monthIndex = d.getMonth();
  const year = d.getFullYear();
  var hr = d.getHours();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    if (hr >= 0 && hr < 12) {
      setGeetingMsg("Good Morning!");
    } else if (hr == 12) {
      setGeetingMsg("Good Noon!");
    } else if (hr >= 12 && hr <= 17) {
      setGeetingMsg("Good Afternoon!");
    } else {
      setGeetingMsg("Good Evening!");
    }
  }, [hr]);

  console.log(greetingMsg);

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
          <CircleIcon className="text-[#FED600] animate-pulse" />{" "}
          <span className="text-[14px]"> {greetingMsg} </span>{" "}
        </div>
        <div className="w-[200px]">
          <span className=" text-[18px]">
            {" "}
            {todayDate + " " + month[monthIndex] + " " + year} &nbsp;{" "}
            <Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} />
          </span>{" "}
        </div>
      </div>
    </div>
  );
}

export default Header;
