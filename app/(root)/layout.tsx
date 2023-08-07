import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import React from "react";

const LayoutRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutRoot;
