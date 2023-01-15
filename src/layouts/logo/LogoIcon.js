import React from "react";
import { Link } from "@mui/material";

const LogoIcon = () => {
  return (
    <Link href="/admin" className="no-underline flex items-center">
      <img className="h-8 w-auto mr-3" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
      Hunting_Store Admin
    </Link>
  );
};

export default LogoIcon;
