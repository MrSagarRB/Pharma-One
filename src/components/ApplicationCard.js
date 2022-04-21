import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

function ApplicationCard(props) {
  return (
    <div className="border border-[#1d242e4d]  w-[556px] h-[160px] bg-white ">
      <div className="flex justify-between px-10 py-4 border border-b-[#1d242e4d]">
        <h1 className="text-xl font-semibold"> {props.title}</h1>{" "}
        <ModeEditOutlineIcon />{" "}
      </div>
      <div className="flex justify-between px-10 py-4 ">
        <div>
          <h1 className="text-2xl font-semibold">{props.heading}</h1>
          <p className="text-[14px]"> {props.description}</p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold"> {props.value}</h1>
          <p className="text-[14px]">{props.valueDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default ApplicationCard;
