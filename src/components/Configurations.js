import React from "react";
import ApplicationCard from "./ApplicationCard";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Configurations() {
  return (
    <div className=" px-16 py-6">
      <div className="flex justify-between items-center w-[1240px]">
        <div>
          <h1 className="font-bold text-[24px]">Configurations</h1>
          <p className="text-[14px]">Configure your pharmacy application.</p>
        </div>
      </div>
      <div className="flex gap-10 mt-5">
        <ApplicationCard
          title="Branding"
          heading="Enter Name"
          description="Pharmacy Name"
          value="PH349TY228"
          valueDescription="Pharmacy ID"
        />{" "}
        <ApplicationCard
          title="Owner"
          heading="Enter Name"
          description="Owner Name"
          value="user@mail.com"
          valueDescription="Email ID"
        />{" "}
      </div>
      
      <div className="h-[355px] w-[556px] mt-5">
       <table className="w-[100%] ">
         <tr className="border_bottom">
           <th>Page</th>
           <th>Action</th>
           <th></th>
           <th></th>
         </tr>
         <tr>
           <td>Dashboard</td>
           <td className="text-[#03A9F5]">+ Add Sub Page</td>
           <td><ModeEditOutlineIcon  sx={{color:["#03A9F5" ]}}/></td>
           <td><DeleteOutlineIcon sx={{color:["#F0483E" ]}}/></td>
         </tr>
         <tr>
           <td>Inventory</td>
           <td className="text-[#03A9F5]">+ Add Sub Page</td>
           <td><ModeEditOutlineIcon  sx={{color:["#03A9F5" ]}}/></td>
           <td><DeleteOutlineIcon sx={{color:["#F0483E" ]}}/></td>
         </tr>
         <tr>
           <td>Reports</td>
           <td className="text-[#03A9F5]">+ Add Sub Page</td>
           <td><ModeEditOutlineIcon  sx={{color:["#03A9F5" ]}}/></td>
           <td><DeleteOutlineIcon sx={{color:["#F0483E" ]}}/></td>
         </tr>
         <tr>
           <td>Configuration</td>
           <td className="text-[#03A9F5]">+ Add Sub Page</td>
           <td><ModeEditOutlineIcon  sx={{color:["#03A9F5" ]}}/></td>
           <td><DeleteOutlineIcon sx={{color:["#F0483E" ]}}/></td>
         </tr>
         <tr>
           <td>Contact Management</td>
           <td className="text-[#03A9F5]">+ Add Sub Page</td>
           <td><ModeEditOutlineIcon  sx={{color:["#03A9F5" ]}}/></td>
           <td><DeleteOutlineIcon sx={{color:["#F0483E" ]}}/></td>
         </tr>
         <tr>
           <td>Notifications</td>
           <td className="text-[#03A9F5]">+ Add Sub Page</td>
           <td><ModeEditOutlineIcon  sx={{color:["#03A9F5" ]}}/></td>
           <td><DeleteOutlineIcon sx={{color:["#F0483E" ]}}/></td>
         </tr>
          <div className="p-5  bottom-t-1"> <h1> + Add a New Page</h1></div>
       </table>
       
      </div>
    </div>
  );
}


export default Configurations;
