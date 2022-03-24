import React from "react";
import cardData from "./dashBoardData";

// MUI
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function Dashboard() {
  return (
    <div className="bg-[#E3EBF3] p-10">
      <div className="flex justify-between px-14">
        <div className="text-[#1D242E]">
          <p className="text-[24px]  font-bold">Dashboard</p>
          <p className="text-[14px]">A quick data overview of the inventory.</p>
        </div>
        <div className="bg-[#FFFFFF] flex items-center justify-center w-[192px] h-[46px] rounded-sm cursor-pointer gap-2">
          <span className="text-[15px]">Download Report</span>{" "}
          <KeyboardArrowDownIcon />{" "}
        </div>
      </div>

      {/* Card */}

      <div className="flex  items-center justify-around">
        {cardData.map((item) => {
          return (
            <div className="w-[212px] h-[152px] flex flex-col items-center mt-10 bg-[#FFFFFF] border border-[#01A768] rounded-[4px] ">
             {item.icon }
             
             
             
              {/* <HealthAndSafetyIcon
                sx={{ color: "#01A768", fontSize: "50px" }}
                className="mt-3"
              /> */}
              <p className="text-[20px] font-bold">Good</p>
              <p className="text-[14px]">Inventory Status</p>
              <div className={item.styles}>
                <p>
                  View Detailed Report <KeyboardDoubleArrowRightIcon />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
