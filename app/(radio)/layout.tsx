import { Navbar } from "@/components/navbar";
import React from "react";

const LayoutRadio = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default LayoutRadio;
