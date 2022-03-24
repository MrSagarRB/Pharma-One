import React from "react";
import Dashboard from "../../components/Dashboard";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

function MainPage() {
  return (
    <div className="flex flex-row">
      <section className="" id="left_Section">
        <SideBar />
      </section>
      <div>
        <section className="" id="header_Section">
          <Header />
        </section>

        <section className="" id="right_Section">
          <Dashboard />
        </section>
      </div>
    </div>
  );
}

export default MainPage;
