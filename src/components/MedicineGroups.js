import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SearchIcon from "@mui/icons-material/Search";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function MedicineGroups() {
  return (
    <div className="px-16 py-6">
      <div className="flex justify-between items-center w-[1240px]">
        <div>
          <h1 className="font-bold text-[24px] text-gray-500">
            Inventory
            <ArrowRightIcon />{" "}
            <span className="text-black">Medicine Groups (02)</span>
          </h1>
          <p className="text-[14px]">List of medicines available for sales.</p>
        </div>
        <button className="flex bg-[#F0483E] px-6 py-2 rounded-[4px] text-white text-[15px]">
          <AddIcon /> Add New Group
        </button>
      </div>
      <div className="h-[38px] w-[340px]  rounded-[4px] flex items-center mt-5 ">
        <input
          type="text"
          className=" text-[#1d242e] w-full h-full bg-[#E3EBF3] outline-none px-3 text-[12px]"
          placeholder="Search for anything here.."
        />
        <SearchIcon className=" bg-[#E3EBF3]  " sx={{ height: "100%" }} />
      </div>
      <table className="w-full">
        <tr>
          <th>
            Group Name <UnfoldMoreIcon sx={{ fontSize: 20 }} />
          </th>
          <th>
            No of Medicines <UnfoldMoreIcon sx={{ fontSize: 20 }} />
          </th>
          <th> Action</th>
        </tr>
        <tr className="border_bottom">
          <td> <a href="/GenericMedicine"> Generic Medicine</a></td>
          <td>02</td>
          <td>
            {" "}
            View Full Detail{" "}
            <KeyboardDoubleArrowRightIcon sx={{ fontSize: 20 }} />
          </td>
        </tr>
        <tr>
          <td>Diabetes </td>
          <td>32</td>
          <td>
            {" "}
            View Full Detail{" "}
            <KeyboardDoubleArrowRightIcon sx={{ fontSize: 20 }} />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default MedicineGroups;
