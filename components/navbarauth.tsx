import Image from "next/image";
import gambar from "@/assets/logo-nav.png";
import React from "react";

export const NavbarAuth = () => {
  return (
    <div className="flex w-full mx-auto top-0 z-50">
      <div className="flex w-full justify-center items-center bg-[#0A0A23] px-3 py-1">
        <div className="flex items-center justify-center">
          <Image
            src={gambar}
            alt="none"
            className="object-cover"
            width={225}
            height={225}
          />
        </div>
      </div>
    </div>
  );
};
