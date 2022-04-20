import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import SearchIcon from "@mui/icons-material/Search";
import ApplicationCard from "./ApplicationCard";

function AzithralTablet() {
  return (
    <div className="px-16 py-6">
      <div className="flex justify-between items-center w-[1240px]">
        <div>
          <h1 className="font-bold text-[24px] text-gray-500">
            Inventory
            <ArrowRightIcon /> List of Medicines <ArrowRightIcon />
            <span className="text-black">Azithral 500 Tablet</span>
          </h1>
          <p className="text-[14px]">List of medicines available for sales.</p>
        </div>
        <button className="flex bg-[#03A9F5] px-6 py-2 rounded-[4px] text-white text-[15px] gap-2">
          <ModeEditOutlineIcon sx={{ fontSize: 20 }} /> Add New Group
        </button>
      </div>
      <div className="h-[38px] w-[340px]  rounded-[4px] flex items-center  mt-5">
        <input
          type="text"
          className=" text-[#1d242e] w-full h-full bg-[#E3EBF3] outline-none px-3 text-[12px]"
          placeholder="Search for anything here.."
        />
        <SearchIcon className=" bg-[#E3EBF3]  " sx={{ height: "100%" }} />
      </div>

      <div className="flex gap-10 mt-5">
        <ApplicationCard
          title="Medicine"
          heading="298"
          description="Medicine ID"
          value="24"
          valueDescription="Medicine Group"
        />{" "}
        <ApplicationCard
          title="Inventory in Qty"
          heading="298"
          description="Lifetime Supply"
          value="290"
          valueDescription="Lifetime Sales"
        />{" "}
      </div>

      <TextCard
        title="How to use"
        text="Take this medication by mouth with or without food as directed by your doctor, usually once daily."
      />
       <TextCard
        title="Side Effects"
        text="Dizziness, lightheadedness, drowsiness, nausea, vomiting, tiredness, excess saliva/drooling, blurred vision, weight gain, constipation, headache, and trouble sleeping may occur. If any of these effects persist or worsen, consult your doctor."
      />
    </div>
  );
}

export default AzithralTablet;

function TextCard(props) {
  return (
    <div className="w-[1153px]  bg-[#FFFFFF] border border-[#1d242e4d] mt-5 ">
      <div className="px-10 py-4 border border-b-[#1d242e4d]">
        <h1 className="font-semibold">{props.title}</h1>
      </div>
      <div className="px-10 py-4  ">
        <p>{props.text}</p>
      </div>
    </div>
  );
}
