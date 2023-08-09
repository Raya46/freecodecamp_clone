import Image from "next/image";
import Link from "next/link";
import React from "react";
import firefcc from "@/assets/firefcc.png";
import googlelogo from "@/assets/googlelogo.png";
import githublogo from "@/assets/githublogo.png";
import applelogo from "@/assets/applelogo.png";

const SignIn = () => {
  return (
    <div className="bg-[#D0D0D5]">
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col bg-white border-[#0A0A23] border-2 py-14 px-16 mt-10">
            <div className="flex justify-center">
              <Image src={firefcc} alt="none" className="w-8 h-8" />
            </div>
            <div className="flex mt-6 justify-center text-black text-xl">
              Log in to freeCodeCamp
            </div>
            <div className="flex justify-center text-black text-xl">Learn</div>
            <div className="flex mt-8 gap-4 border-2 items-center border-[#C9CACE] p-4">
              <Image src={googlelogo} alt="none" className="w-5 h-5" />
              <p className="text-black">Continue with Google</p>
            </div>
            <div className="flex mt-2 gap-4 items-center border-2 border-[#C9CACE] p-4">
              <Image src={githublogo} alt="none" className="w-7 h-7" />
              <p className="text-black">Continue with Github</p>
            </div>
            <div className="flex mt-2 gap-4 items-center mb-6 border-2 border-[#C9CACE] p-4">
              <Image src={applelogo} alt="none" className="w-5 h-5" />
              <p className="text-black">Continue with Apple</p>
            </div>
            <div className="flex border-t mb-8 border-black justify-center">
              <p className="text-black absolute bg-white px-4 bottom-[9rem]">
                OR
              </p>
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="flex border-2 border-black p-4 text-black"
            />
            <button className="bg-[#FFBC3F] py-3 mt-5">
              <p className="text-black">Continue with Email</p>
            </button>
            <div className="flex mt-6">
              <p className="text-black">
                Don't have an account yet?
                <Link className="text-blue-600" href="/sign-up">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
          <div className="flex text-black justify-center items-center mt-16">
            freeCodeCamp is free and your account is private by default. We use
            your email address to connect you to your account.
          </div>
          <div className="flex text-black justify-center items-center">
            You must be at least 13 years old to create an account on
            freeCodeCamp.
          </div>
          <div className="flex text-black justify-center items-center mb-4">
            By continuing, you indicate that you have read and agree to
            freeCodeCamp.org's
            <Link href="" className="text-blue-600 mx-1">
              Terms of Service
            </Link>
            and
            <Link href="" className="text-blue-600 ml-1">
              Privacy Policy.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
