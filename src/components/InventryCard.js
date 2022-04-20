import React from "react";

function InventryCard() {
  return (
    <div class="w-[556px] h-[140px] border-2  rounded-[4px] text-[#495566]">
      <div class="flex justify-between border-b-2 px-4 py-2">
        {" "}
        <p className="text-[16px] font-semibold">Inventory</p>{" "}
        <p className="text-[12px]">Go to Configuration</p>{" "}
      </div>
      <div class="flex justify-between mt-5 px-4">
        <div>
          <p className="text-[20px] font-bold"> 298</p>
          <p>Total no of Medicines</p>
        </div>
        <div>
          <p className="text-[20px] font-bold"> 24</p>
          <p>Medicine Groups</p>
        </div>
      </div>
    </div>
  );
}

export default InventryCard;
