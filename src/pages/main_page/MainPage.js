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






function MainPage() {

  return (
    <div className=" flex flex-row">
      <section id="left_Section" className="">
        <SideBar />
      </section>

      <div className=" border-2 w-full">
        <section className="" id="header_Section">
          <Header />
        </section>

        <section id="right_Section" className=" bg-slate-100 ">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Inventory" element={<Inventory />} />
              <Route path="/MedicineGroups" element={<MedicineGroups />} />
              <Route path="/Report" element={<Report />} />
              <Route path="/Configuration" element={<Configurations />} />
              <Route path="/ListOfMedicines" element={<ListOfMedicines />} />
              <Route path="/GenericMedicine" element={<GenericMedicine/>} />


              
            </Routes>
          </BrowserRouter>
        </section>
      </div>
    </div>
  );
}

export default MainPage;
