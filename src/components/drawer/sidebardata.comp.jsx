import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
const SiderbarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
    id: 1,
  },

  {
    title: "Rigister Birth",
    icon: <AppRegistrationIcon />,
    link: "/rigisterbirth",
    id: 2,
  },
  {
    title: "Rigister Death",
    icon: <HowToRegIcon />,
    link: "/rigisterdeath",
    id: 3,
  },

  {
    title: "Purpose",
    icon: <InfoIcon />,
    link: "/info",
    id: 4,
  },

  {
    title: "Contact Us",
    icon: <CallIcon />,
    link: "/contact",
    id: 5,
  },

  {
    title: "Fund Wellet",
    icon: <AccountBalanceWalletIcon />,
    link: "/connectwallet",
    id: 6,
  },
];

export default SiderbarData;
