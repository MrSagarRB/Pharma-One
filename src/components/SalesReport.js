import React, { useState } from "react";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Date picker

import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import ReactApexChart from "react-apexcharts";

function SalesReport() {
  return (
    <div className=" px-16 py-6">
      <div className="flex justify-between items-center w-[1240px]">
        <div>
          <h1 className="font-bold text-[24px] text-gray-500">
            Reports
            <ArrowRightIcon /> <span className="text-black">Sales Report</span>
          </h1>
          <p className="text-[14px]">Sales related report of the pharmacy.</p>
        </div>
        <button className="flex bg-[#FFFFFF] px-6 py-2 rounded-[4px] text-[#1D242E] text-[15px] gap-2">
          Download Report <KeyboardArrowDownIcon />
        </button>
      </div>
      <div className="flex  justify-between items-center mt-10">
        <div className="h-[38px] w-[340px]  rounded-[4px] flex items-center  ">
          <div className="flex flex-col gap-2">
            {" "}
            <p className="text-[#1D242E]">Date Range</p>
            <DateTimePickerComp />
          </div>
        </div>

        <div className="flex items-center"> {/* Date Picker */} </div>
      </div>

      <div className="flex mt-10 gap-28">
        <div className="h-[378px] w-[526px] border-2 mt-2">
          <SaleModeChart />
        </div>
        <div>
          <table className="w-[383px] h-[378px] text-center ">
            <tr className="font-semibold">
              <td>Order ID</td>
              <td>Date & Time</td>
            </tr>
            <tr>
              <td>2485855848598</td>
              <td> 01 Dec 2021 10:25</td>
            </tr>
            <tr>
              <td>2485855848598</td>
              <td> 01 Dec 2021 10:25</td>
            </tr>
            <tr>
              <td>2485855848598</td>
              <td> 01 Dec 2021 10:25</td>
            </tr>
            <tr>
              <td>2485855848598</td>
              <td> 01 Dec 2021 10:25</td>
            </tr>
            <tr>
              <td>2485855848598</td>
              <td> 01 Dec 2021 10:25</td>
            </tr>
            <tr>
              <td>2485855848598</td>
              <td> 01 Dec 2021 10:25</td>
            </tr>
            <tr>
              <td>2485855848598</td>
              <td> 01 Dec 2021 10:25</td>
            </tr>
            <tr>
              <td>2485855848598</td>
              <td> 01 Dec 2021 10:25</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SalesReport;

function SaleModeChart() {
  const series = [
    {
      name: "series1",
      data: [50, 100, 170, 51, 150, 160, 150],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
        },
        stroke: {
          curve: "smooth",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#0FCEDD", "#7B61FF"],

    xaxis: {
      categories: [
        "1 Dec",
        "8 Dec",
        "16 Dec",
        "30 Dec",
        "1 Jan",
        " 8 Jan",
        " 16 Jan",
      ],
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
}

function DateTimePickerComp() {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      {" "}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}
