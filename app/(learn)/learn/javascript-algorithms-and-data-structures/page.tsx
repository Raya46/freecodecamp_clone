import CardDescJS from "@/components/cardDropdownLearn/cardDescJS";
import CardDropdownLearnJS from "@/components/cardDropdownLearn/cardDropdownLearnJS";

const JavascriptAlgorithm = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center mx-[16.7rem]">
        <div className="flex text-5xl font-bold mt-5">
          JavaScript Algorithms and
        </div>
        <div className="flex text-5xl font-bold mt-2">Data Structures </div>
        <div className="flex justify-center items-center fill-white my-10">
          <svg
            aria-hidden="true"
            viewBox="0 0 448 512"
            className="w-1/3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path>
          </svg>
        </div>
        <div className="flex text-xl mb-5">
          While HTML and CSS control the content and styling of a page,
          JavaScript is used to make it interactive. In the JavaScript Algorithm
          and Data Structures Certification, you'll learn the fundamentals of
          JavaScript including variables, arrays, objects, loops, and functions.
        </div>
        <div className="flex text-xl mb-5">
          Once you have the fundamentals down, you'll apply that knowledge by
          creating algorithms to manipulate strings, factorialize numbers, and
          even calculate the orbit of the International Space Station.
        </div>
        <div className="flex text-xl mb-10">
          Along the way, you'll also learn two important programming styles or
          paradigms: Object Oriented Programming (OOP) and Functional
          Programming (FP).
        </div>
        <div className="flex bg-[#D9EDF7] text-blue-500 text-lg p-5">
          Note: Some browser extensions, such as ad-blockers and script-blockers
          can interfere with the tests. If you face issues, we recommend
          disabling extensions that modify or block the content of pages while
          taking the course.
        </div>
        <div className="flex text-4xl font-bold mt-20 mb-10">Courses</div>
        <div className="flex flex-col gap-1 w-full">
          <CardDescJS />
          <CardDropdownLearnJS />
        </div>
      </div>
    </div>
  );
};

export default JavascriptAlgorithm;
