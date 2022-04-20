import React from "react";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

function Report() {
  return (
    <div className=" px-16 py-6 ">
      <div className="flex justify-between items-center w-[1240px]">
        <div>
          <h1 className="font-bold text-[24px]">Report</h1>
          <p className="text-[14px]">
            Overall reports related to the pharmacy.
          </p>
        </div>
      </div>

      <div className="flex gap-10 ">
        <Card
          stats="Rs.8,55,875"
          title="Total Sales Report "
          border="yellow_border"
          cardStyle="yellow_card card"
        />
        <Card
          stats="298"
          title="Medicines Available"
          border="green_border"
          cardStyle="green_card card"
        />
      </div>
    </div>
  );
}

export default Report;

function Card(props) {
  return (
    <div className={props.border}>
      <MedicalServicesIcon
        sx={{ color: "#03A9F5", fontSize: "40px" }}
        className="mt-3 mb-2"
      />
      <p className="text-[20px] font-bold">{props.stats}</p>
      <p className="text-[14px]">{props.title}</p>
      <div className={props.cardStyle}>
        <p>View Detailed Report</p>
      </div>
    </div>
  );
}
