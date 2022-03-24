import React from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

function MainPage() {
  return (
   <div className="flex"> 
    
      <section className="" id="left_Section">
       <SideBar />
      </section>

      <section className="" id="header_Section">
          <Header />
      </section>
{/* 
      <section className="" id="right_Section"> 

      </section> */}
      </div>
  );
}

export default MainPage;
