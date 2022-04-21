import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function AddNewMedicine() {
  return (
    <div className=" px-16 py-6">
      <div className="flex justify-between items-center w-[1240px]">
        <div>
          <h1 className="font-bold text-[24px] text-gray-500">
            Inventory
            <ArrowRightIcon /> List of Medicines (298)
            <span className="text-black"> Add New Medicine</span>
          </h1>
          <p className="text-[14px]">
            *All fields are mandatory, except mentioned as (optional).
          </p>
        </div>
      </div>

      <div className=" w-[750px] ">
        <div className="mt-5 grid grid-cols-2 ">
          <InputFildsSmall title="Medicine Name" />
          <InputFildsSmall title="Medicine ID" />
          <InputFildsSmall title="Medicine Group" />
          <InputFildsSmall title="Quantity in Number" />
        </div>
        <div className="mt-5">
          <InputFildsBig title="How to Use" />
          <InputFildsBig title="Side Effects" />
        </div>
      </div>
      <button className="flex bg-[#F0483E] px-6 py-2 rounded-[4px] text-white text-[15px] mt-5">
        Save Details
      </button>
    </div>
  );
}

export default AddNewMedicine;

function InputFildsSmall(props) {
  return (
    <div className="text-[14px]">
      <p> {props.title}</p>
      <input
        type="text"
        className=" text-[#1d242e] w-[340px] h-[38px] bg-[#E3EBF3] outline-none px-3 text-[12px] mt-2 rounded-[4px]"
      />
    </div>
  );
}

function InputFildsBig(props) {
  return (
    <div className="text-[14px] rounded-[4px]">
      <p> {props.title}</p>
      <input
        type="text"
        className=" text-[#1d242e] w-[718px] h-[121px] bg-[#E3EBF3] outline-none px-3 text-[12px] mt-2"
      />
    </div>
  );
}
