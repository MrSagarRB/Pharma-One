import React from 'react'
import AddIcon from "@mui/icons-material/Add";

function RedButtons(props) {
  return (
    <button className="flex bg-[#F0483E] px-6 py-2 rounded-[4px] text-white text-[15px] hover:bg-red-400 transition-all duration-300">
    <AddIcon /> {props.title}
  </button>
  )
}

export default RedButtons