import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import FmdBadIcon from "@mui/icons-material/FmdBad";


export default [


  {
    icon: <HealthAndSafetyIcon sx={{ color: "#01A768", fontSize: "50px" }}
    className="mt-3" />,
    status: "Good",
    description: "Inventory Status",
    buttonText: "View Detailed Report",
    styles:"green_card card"
  },
  {
    icon: <CurrencyExchangeIcon sx={{ color: "#FED600", fontSize: "50px" }}
    className="mt-3" />,
    status: "Good",
    description: "Inventory Status",
    buttonText: "View Detailed Report",
    styles:"yellow_card card "
  },
  {
    icon: <MedicalServicesIcon sx={{ color: "#03A9F5", fontSize: "50px" }}
    className="mt-3" />,
    status: "Good",
    description: "Inventory Status",
    buttonText: "View Detailed Report",
   styles:"blue_card card"
  },
  {
    icon: <FmdBadIcon sx={{ color: "#F0483E", fontSize: "50px" }}
    className="mt-3" />,
    status: "Good",
    description: "Inventory Status",
    buttonText: "View Detailed Report",
   styles:"red_card card"
  },
];
