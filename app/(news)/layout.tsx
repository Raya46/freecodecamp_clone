import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import React from "react";

const LayoutNews = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="fixed w-full mx-auto top-0 z-50">
        <Navbar />
      </div>
      {children}
      <Footer />
    </>
  );
};

export default LayoutNews;
