import React from "react";
import CountUp from "react-countup";

function InventryCard(props) {
  return (
    <div class="w-[556px] h-[140px] border-2  rounded-[4px] text-[#495566] ">
      <div class="flex justify-between border-b-2 px-4 py-2 ">
        {" "}
        <p className="text-[16px] font-semibold">{props.title} </p>{" "}
        <p className="text-[12px]">{props.titleSm}</p>{" "}
      </div>
      <div class="flex justify-between mt-5 px-4">
        <div>
          <p className="text-[20px] font-bold">
            <CountUp end={props.stat1} />
          </p>
          <p>{props.stat1text}</p>
        </div>
        <div>
          <p className="text-[20px] font-bold">
            {" "}
            <CountUp end={props.stat2} />
          </p>
          <p>{props.stat2text}</p>
        </div>
      </div>
    </div>
  );
}

export default InventryCard;
