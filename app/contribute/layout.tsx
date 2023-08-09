import { Navbar } from "@/components/navbar";
import React from "react";

const LayoutContribute = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default LayoutContribute;
