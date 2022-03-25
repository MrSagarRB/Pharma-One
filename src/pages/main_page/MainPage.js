import React from "react";
import Dashboard from "../../components/Dashboard";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

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

        <section id="right_Section" className="">
          <Dashboard />
        </section>
      </div>
    </div>
  );
}

export default MainPage;
