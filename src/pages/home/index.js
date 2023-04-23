import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Getdata from "../../components/DataTable/Getdata";

function HomePage() {
  return (
    <div>
      <div className="flex">
        <Sidebar />

        <div className="ml-[80px]">
          <Header />
        </div>
      </div>

      <div className="ml-3 mt-11">
        <Getdata />
      </div>
    </div>
  );
}

export default HomePage;
