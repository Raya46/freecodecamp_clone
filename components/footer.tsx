import Link from "next/link";
import React from "react";
import dummyFooterLists from "./dummy-data/dummyFooterList";
import dummyFooterLists2 from "./dummy-data/dummyFooterList2";
import dummyFooterLists3 from "./dummy-data/dummyFooterList3";

export const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#2A2A40] text-white w-full">
      <div className="flex gap-10 pl-10 py-16 w-full">
        <div className="flex flex-col gap-10 w-[1050px] text-sm">
          <p>
            freeCodeCamp is a donor-supported tax-exempt 501(c)(3) charitable
            organization (United States Federal Tax Identification Number:
            82-0779546)
          </p>
          <p>
            Our mission: to help people learn to code for free. We accomplish
            this by creating thousands of videos, articles, and interactive
            coding lessons - all freely available to the public. We also have
            thousands of freeCodeCamp study groups around the world.
          </p>
          <p>
            Donations to freeCodeCamp go toward our education initiatives, and
            help pay for servers, services, and staff.
          </p>
          <p className="mt-10 text-lg">
            You can{" "}
            <a href="" className="underline">
              make a tax-deductible donation here{" "}
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-center w-full">Trending Guides</div>
          <div className="flex justify-center w-full">
            <div className="flex flex-col w-full text-sm text-[#D0D0CD] gap-3">
              {dummyFooterLists.map((fl, index) => (
                <Link href={fl.permalink}>{fl.li}</Link>
              ))}
            </div>
            <div className="flex flex-col w-full text-sm text-[#D0D0CD] gap-3">
              {dummyFooterLists2.map((fl, index) => (
                <Link href={fl.permalink}>{fl.li}</Link>
              ))}
            </div>
            <div className="flex flex-col w-full text-sm text-[#D0D0CD] gap-3">
              {dummyFooterLists3.map((fl, index) => (
                <Link href={fl.permalink}>{fl.li}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-5" />
      <div className="flex p-10 justify-between">
        <a href="" className="hover:underline">
          About
        </a>
        <a href="" className="hover:underline">
          Alumni Network
        </a>
        <a href="" className="hover:underline">
          Open Source
        </a>
        <a href="" className="hover:underline">
          Shop
        </a>
        <a href="" className="hover:underline">
          Support
        </a>
        <a href="" className="hover:underline">
          Sponsors
        </a>
        <a href="" className="hover:underline">
          Academic Honesty
        </a>
        <a href="" className="hover:underline">
          Code of Conduct
        </a>
        <a href="" className="hover:underline">
          Privacy Policy
        </a>
        <a href="" className="hover:underline">
          Terms of Service
        </a>
        <a href="" className="hover:underline">
          Copyright Policy
        </a>
      </div>
    </footer>
  );
};
