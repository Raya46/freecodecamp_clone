import { NavbarAuth } from "@/components/navbarauth";
import React from "react";

const LayoutAuth = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#D0D0D5] h-full w-full">
      <div className="w-full mx-auto top-0 z-50">
        <NavbarAuth />
      </div>
      {children}
    </div>
  );
};

export default LayoutAuth;
