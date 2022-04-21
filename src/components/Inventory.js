import React from "react";
import AddIcon from "@mui/icons-material/Add";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import RedButtons from "./buttons/RedButtons";
function Inventory() {
  return (
    <div className=" px-16 py-6">
      <div className="flex justify-between items-center w-[1240px]">
        <div>
          <h1 className="font-bold text-[24px]">Inventory</h1>
          <p className="text-[14px]">List of medicines available for sales.</p>
        </div>

        <RedButtons title="Add New Item" />
      </div>
      <div className="flex gap-10">
        <Card
          stats="298"
          title="Medicines Available"
          border="blue_border"
          cardStyle="blue_card card"
        />
        <Card
          stats="298"
          title="Medicines Available"
          border="green_border"
          cardStyle="green_card card"
        />
        <Card
          stats="298"
          title="Medicines Available"
          border="red_border"
          cardStyle="red_card card"
        />
      </div>
    </div>
  );
}

export default Inventory;

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
