import { Footer } from "@/components/footer";
import HeaderForum from "@/components/headerForum";
import { Navbar } from "@/components/navbar";
import React from "react";

const LayoutForum = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="fixed w-full mx-auto top-0 z-50">
        <Navbar />
      </div>
      <div className="flex mt-20 mx-28 ">
        <HeaderForum />
      </div>
      {children}
      <Footer />
    </>
  );
};

export default LayoutForum;
