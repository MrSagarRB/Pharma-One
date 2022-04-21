import React from "react";
import cardData from "./dashBoardData";

// MUI
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import InventoryCard from "./InventryCard";

function Dashboard() {
  return (
    <div>
      <div className="bg-[#E3EBF3] px-10 py-5 ">
        <div className="flex justify-between px-10">
          <div className="text-[#1D242E]">
            <p className="text-[24px]  font-bold">Dashboard</p>
            <p className="text-[14px]">
              A quick data overview of the inventory.
            </p>
          </div>
          <div className="bg-[#FFFFFF] flex items-center justify-center w-[192px] h-[46px] rounded-sm cursor-pointer gap-2 hover:bg-slate-100 transition-colors duration-300">
            <span className="text-[15px] "> Download Report</span>{" "}
            <KeyboardArrowDownIcon />{" "}
          </div>
        </div>

        {/* Card */}

        <div className="flex  items-center justify-around ">
          {cardData.map((item) => {
            return (
              <div className="w-[212px] h-[152px] flex flex-col items-center mt-10 bg-[#FFFFFF] border border-[#01A768] rounded-[4px] hover:animate-pulse cursor-pointer">
                {item.icon}
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
      <div className="grid grid-cols-2 gap-2 ml-20 mt-9">
        <InventoryCard
          title="Inventory"
          titleSm="Go to Configuration"
          stat1="298"
          stat2="24"
          stat1text="Total no of Medicines"
          stat2text="Medicine Groups"
        />
        <InventoryCard
          title="Quick Report"
          titleSm="January 2022"
          stat1="70856"
          stat2="5288"
          stat1text="Qty of Medicines Sold"
          stat2text="Invoices Generated"
        />

        <InventoryCard
          title="My Pharmacy"
          titleSm="Go to User Management"
          stat1="04"
          stat2="05"
          stat1text="Total no of Suppliers"
          stat2text="Total no of Users"
        />
        <InventoryCard
          title="Customers"
          titleSm="Go to Customers Page"
          stat1="845"
          stat2="24"
          stat1text="Total no of Customers"
          stat2text="Frequently bought Item"
        />
      </div>
    </div>
  );
}

export default Dashboard;
