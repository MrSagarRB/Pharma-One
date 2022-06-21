import React from "react";
import Dashboard from "../../components/Dashboard";
import Header from "../../components/Header";
import Inventory from "../../components/Inventory";
import SideBar from "../../components/SideBar";
import MedicineGroups from "../../components/MedicineGroups";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Report from "../../components/Report";
import Configurations from "../../components/Configurations";
import ListOfMedicines from "../../components/ListOfMedicines";
import GenericMedicine from "../../components/GenericMedicine";
import SalesReport from "../../components/SalesReport";
import AzithralTablet from "../../components/AzithralTablet";
import AddNewMedicine from "../../components/AddNewMedicine";


import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';



function MainPage() {
  return (
    <div className=" flex flex-row">
      <section
        id="left_Section"
        className=" w-[0px]  overflow-hidden  animation1"
      ></section>

      <div className=" border-2 w-full">
        <section className="  " id="header_Section">
          <Header />
        </section>
        <div className="w-[50px]  overflow-hidden">
          <SideBarToggle />
        </div>

        <section id="right_Section" className=" bg-slate-100">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Inventory" element={<Inventory />} />
              <Route path="/MedicineGroups" element={<MedicineGroups />} />
              <Route path="/Report" element={<Report />} />
              <Route path="/Configuration" element={<Configurations />} />
              <Route path="/ListOfMedicines" element={<ListOfMedicines />} />
              <Route path="/GenericMedicine" element={<GenericMedicine />} />
              <Route path="/SalesReport" element={<SalesReport />} />
              <Route path="/AzithralTablet" element={<AzithralTablet />} />
              <Route path="/AddNewMedicine" element={<AddNewMedicine />} />
            </Routes>
          </BrowserRouter>
        </section>
      </div>
    </div>
  );
}

export default MainPage;

function SideBarToggle() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <div className=" absolute top-4">
        <Button onClick={toggleDrawer("left", true)}><MenuIcon/></Button>
      </div>

      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        <SideBar />
      </Drawer>
    </div>
  );
}
