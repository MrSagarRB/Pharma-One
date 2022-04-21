import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

// mui select
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import RedButtons from "./buttons/RedButtons";

function ListOfMedicines() {
  return (
    <div className=" px-16 py-6">
      <div className="flex justify-between items-center w-[1240px]">
        <div>
          <h1 className="font-bold text-[24px] text-gray-500">
            Inventory
            <ArrowRightIcon />{" "}
            <span className="text-black">List of Medicines (298)</span>
          </h1>
          <p className="text-[14px]">List of medicines available for sales.</p>
        </div>
        <a href="/AddNewMedicine" className="">
          <RedButtons title="Add New Item" />
        </a>
      </div>
      <div className="flex  justify-between items-center mt-5">
        <div className="h-[38px] w-[340px]  rounded-[4px] flex items-center  ">
          <input
            type="text"
            className=" text-[#1d242e] w-full h-full bg-[#E3EBF3] outline-none px-3 text-[12px]"
            placeholder="Search for anything here.."
          />
          <SearchIcon className=" bg-[#E3EBF3]  " sx={{ height: "100%" }} />
        </div>

        <div className="flex items-center">
          <FilterAltIcon />
          <SelectGroup />
        </div>
      </div>
      <div>
        <table className="w-[100%]">
          <tr>
            <th>
              Medicine Name <UnfoldMoreIcon />
            </th>
            <th>
              {" "}
              Medicine ID <UnfoldMoreIcon />
            </th>
            <th>
              {" "}
              Group Name <UnfoldMoreIcon />
            </th>
            <th>
              {" "}
              Stock in Qty <UnfoldMoreIcon />
            </th>
            <th>Action</th>
          </tr>
          <tr>
            {" "}
            <td>
              {" "}
              <a href="/AzithralTablet"> Azithral Tablet</a>{" "}
            </td>{" "}
            <td> D06ID232435454</td>
            <td> Generic Medicine</td>
            <td>60 </td>
            <td>
              {" "}
              View Full Detail <KeyboardDoubleArrowRightIcon />
            </td>
          </tr>

          <tr>
            {" "}
            <td> Azithral 500 Tablet</td> <td> D06ID232435451</td>
            <td> Generic Medicine</td>
            <td>20</td>
            <td>
              View Full Detail <KeyboardDoubleArrowRightIcon />
            </td>
          </tr>

          <tr>
            {" "}
            <td> Augmentin 625 Duo Tablet</td> <td> D06ID232435454</td>
            <td> Generic Medicine</td>
            <td>23 </td>
            <td>
              {" "}
              View Full Detail <KeyboardDoubleArrowRightIcon />
            </td>
          </tr>
          <tr>
            {" "}
            <td> Ascoril LS Syrup</td> <td> D06ID232435459</td>
            <td> Generic Medicine</td>
            <td>35 </td>
            <td>
              {" "}
              View Full Detail <KeyboardDoubleArrowRightIcon />
            </td>
          </tr>
          <tr>
            {" "}
            <td>Azee 500 Tablet</td> <td> D06ID232435456</td>
            <td> Generic Medicine</td>
            <td>65 </td>
            <td>
              {" "}
              View Full Detail <KeyboardDoubleArrowRightIcon />
            </td>
          </tr>
          <tr>
            {" "}
            <td> Allegra 120mg Tablet</td> <td> D06ID232435451</td>
            <td> Generic Medicine</td>
            <td>56 </td>
            <td>
              {" "}
              View Full Detail <KeyboardDoubleArrowRightIcon />
            </td>
          </tr>

          <tr>
            {" "}
            <td> Alex Syrup</td> <td> D06ID232435452</td>
            <td> Generic Medicine</td>
            <td>20 </td>
            <td>
              {" "}
              View Full Detail <KeyboardDoubleArrowRightIcon />
            </td>
          </tr>
          <tr>
            {" "}
            <td> Amoxyclav 625 Tablet</td> <td> D06ID232435457</td>
            <td> Generic Medicine</td>
            <td>50 </td>
            <td>
              {" "}
              View Full Detail <KeyboardDoubleArrowRightIcon />
            </td>
          </tr>
          <tr>
            {" "}
            <td>Avil 25 Tablet</td> <td> D06ID232435554</td>
            <td> Generic Medicine</td>
            <td>30 </td>
            <td>
              {" "}
              View Full Detail <KeyboardDoubleArrowRightIcon />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ListOfMedicines;

function SelectGroup() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 190 }} size="small">
        <InputLabel id="demo-select-small">- Select Group -</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Generic Medicine</MenuItem>
          <MenuItem value={20}>Diabetes </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
