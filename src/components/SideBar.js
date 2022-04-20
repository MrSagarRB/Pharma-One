import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// MUI icon
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TuneIcon from "@mui/icons-material/Tune";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import MoreVertIcon from "@mui/icons-material/MoreVert";

//  Material ui
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "white" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1D242E" : "#283342;",
  flexDirection: "",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  backgroundColor: "#1D242E",
  color: "#ffff",
}));

function SideBar() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="w-[256px] h-screen  bg-[#283342]">
      <div className="w-[256px] h-[60px] flex items-center justify-center gap-3 bg-[#1D242E]">
        <img src="./logo.png" />{" "}
        <span className="text-[#FFFFFF] text-[18px]">Pharma One</span>{" "}
      </div>
      <div className="flex gap-3 px-8 py-8 items-center">
        <img src="./profile.png" />
        <div>
          <p className="text-[#ffff] text-[14px]">Sagar</p>
          <p className="text-[#FED600] text-[11px]">Super Admin</p>
        </div>
        <MoreVertIcon sx={{ color: "#FFFFFF" }} className="cursor-pointer" />
      </div>
      <div className=" bg-[#009099] text-[#ffff] w-[256px] h-[46px] flex items-center gap-2 pl-5">
        {" "}
        <AutoAwesomeMosaicIcon />{" "}
        <a href="/" className=" a_remove">
          Dashboard
        </a>{" "}
      </div>
      {/*  Second Item */}
      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary>
            <Typography sx={{ color: "#ffff" }}>
              {" "}
              <div className="flex items-center gap-2 pl-1">
                {" "}
                <ShowChartIcon /> <a href="/Inventory" className="a_remove"> Inventory</a>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex flex-col justify-center pl-10 gap-3">
              <a href="/ListOfMedicines" className="a_remove">List of Medicines</a>
              <a href="/MedicineGroups" className="a_remove">Medicine Groups</a>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Thrid item */}
      <div>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary>
            <Typography sx={{ color: "#ffff" }}>
              {" "}
              <div className="flex items-center gap-2 pl-1">
                {" "}
                <MedicalServicesIcon /> <a href="/Report"> Reports</a>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex flex-col justify-center  pl-10 gap-3">
              <a href="/SalesReport" className="a_remove">
                <p>Sales Report </p>
              </a>
              <p>Payments Report</p>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Configuration */}
      <div className=" hover:bg-[#009099] text-[#ffff] w-[256px] h-[46px] flex items-center gap-2 pl-5">
        {" "}
        <TuneIcon />{" "}
        <a href="/Configuration" className="font-medium">
          {" "}
          Configuration
        </a>{" "}
      </div>
      <hr />

      {/* Contact Mangement */}
      <div>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary>
            <Typography sx={{ color: "#ffff" }}>
              {" "}
              <div className="flex items-center gap-2 pl-1">
                {" "}
                <PeopleAltIcon /> Contact Management
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex flex-col justify-center  pl-10 gap-3">
              <p>New Contact</p>
              <p>View All Contact</p>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* NOtification  */}

      <div className=" hover:bg-[#009099] text-[#ffff] w-[256px] h-[46px] flex items-center gap-2 pl-5 ">
        <NotificationsIcon /> <p className="font-medium">Notifications</p>{" "}
        <span className="px-1 py-1 text-[10px] rounded-full ml-auto mr-3 bg-[#F0483E]">
          {" "}
          01
        </span>
      </div>

      {/* Chat With Visiter */}

      <div className=" hover:bg-[#009099] text-[#ffff] w-[256px] h-[46px] flex items-center gap-2 pl-5">
        <ChatIcon /> <p className="font-medium">Chat with Visitors</p>{" "}
      </div>

      <hr />
      {/* Application Setting */}

      <div className=" hover:bg-[#009099] text-[#ffff] w-[256px] h-[46px] flex items-center gap-2 pl-5">
        <SettingsIcon /> <p className="font-medium">Application Settings</p>{" "}
      </div>
      {/* Covid 19 */}
      <div className=" hover:bg-[#009099] text-[#ffff] w-[256px] h-[46px] flex items-center gap-2 pl-5">
        <SettingsApplicationsIcon /> <p className="font-medium">Covid -19</p>{" "}
      </div>
      {/* Get Technical help */}
      <div className=" hover:bg-[#009099] text-[#ffff] w-[256px] h-[46px] flex items-center gap-2 pl-5">
        <HelpCenterIcon /> <p className="font-medium">Get Technical Help</p>{" "}
      </div>
      <div className="bg-[#1D242E] text-[10px] text-[#FFFFFFB2] flex  justify-between py-3 px-5  absolute  bottom-0 w-[256px] ">
        {" "}
        <p className="">Powered by Subash © 2022</p> <p>v1.1.2</p>{" "}
      </div>
    </div>
  );
}

export default SideBar;
