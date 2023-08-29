"use client";

const CardCertiLearn = () => {
  return (
    <div className="flex flex-col bg-[#0A0A23] p-4 hover:bg-[#2A2A40] cursor-pointer">
      <div className="flex bg-[#002EAD] text-[#99C9FF] w-1/4 justify-center p-2 ml-3">
        Certification Project
      </div>
      <div className="flex gap-2 mt-5 ml-3">
        <div className="flex flex-col mt-2">
          <input type="radio" readOnly />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-xl">Survey Form</p>
          <div className="flex text-xl mt-5">
            This is one of the required project to earn your certification.
          </div>
          <div className="flex text-xl pb-4">
            For this project, you will build a survey form to collect data from
            your users.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCertiLearn;
