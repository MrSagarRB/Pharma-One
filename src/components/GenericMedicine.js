import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SearchIcon from "@mui/icons-material/Search";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function GenericMedicine() {
  return (
    <div className=" px-16 py-6">
      <div className="flex justify-between items-center w-[1240px]">
        <div>
          <h1 className="font-bold text-[24px] text-gray-500">
            Inventory
            <ArrowRightIcon /> Medicine Groups <ArrowRightIcon />
            <span className="text-black">Generic Medicine (02) </span>
          </h1>
          <p className="text-[14px]">Detailed view of a medicine group.</p>
        </div>
        <button className="flex bg-[#F0483E] px-6 py-2 rounded-[4px] text-white text-[15px]">
          <AddIcon /> Add New Group
        </button>
      </div>
      <div className="flex  justify-between items-center mt-5">
        <div className="h-[38px] w-[340px]  rounded-[4px] flex items-center  ">
          <input
            type="text"
            className=" text-[#1d242e] w-full h-full bg-[#E3EBF3] outline-none px-3 text-[12px]"
            placeholder="Search for Medicine"
          />
          <SearchIcon className=" bg-[#E3EBF3]  " sx={{ height: "100%" }} />
        </div>
      </div>
      <div>
        <table className="w-[100%]">
          <tr>
            <th>
              Medicine Name <UnfoldMoreIcon />
            </th>
            <th>
              {" "}
              No of Medicines <UnfoldMoreIcon />
            </th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Augmentin 625 Duo Tablet</td>
            <td>22</td>
            <td className="text-[#F0483E] ">
              <DeleteOutlineIcon /> Remove from Group
            </td>
          </tr>
          <tr>
            <td>Azithral 500 Tablet</td>
            <td>08</td>
            <td className="text-[#F0483E] ">
              <DeleteOutlineIcon /> Remove from Group
            </td>
          </tr>
        </table>
        <div className="text-[#F0483E] flex items-center  border-[#F0483E] border-[0.4px] w-[161px] h-[46px] mt-5 justify-center gap-2 bg-[#FFFFFF] ">
          <DeleteOutlineIcon sx={{ color: ["#F0483E"] }} />
          Delete Group
        </div>
      </div>
    </div>
  );
}

export default GenericMedicine;
