import Image from "next/image";
import blogPostser from "@/assets/blogPostser.jpg";
import blogPostser2 from "@/assets/blogPostser2.jpg";
import blogPostser3 from "@/assets/blogPostser3.jpg";
import blogPostser4 from "@/assets/blogPostser4.png";
const dummyForumLatest = [
  {
    image: (
      <Image
        src={blogPostser}
        className="object-cover border w-full "
        alt="none"
      />
    ),
    title: "Survey Form - Build a Survey form",
    buttonText: "HTML-CSS",
    answer: "1",
    createdAt: "1h",
  },
  {
    image: (
      <Image
        src={blogPostser2}
        className="object-cover border w-full "
        alt="none"
      />
    ),
    title: "Learn Typography by Building a Nutrition Label - Step 65",
    buttonText: "HTML-CSS",
    answer: "1",
    createdAt: "2h",
  },
  {
    image: (
      <Image
        src={blogPostser2}
        className="object-cover border w-full "
        alt="none"
      />
    ),
    title:
      "Data Visualization with D3 - Change the Presentation of a Bar Chart",
    buttonText: "HTML-CSS",
    answer: "4",
    createdAt: "2h",
  },
  {
    image: (
      <Image
        src={blogPostser3}
        className="object-cover border w-full "
        alt="none"
      />
    ),
    title:
      "Not getting credit for completing courses in Relational Database Certification",
    buttonText: "General",
    answer: "2",
    createdAt: "2h",
  },
  {
    image: (
      <Image
        src={blogPostser4}
        className="object-cover border w-full "
        alt="none"
      />
    ),
    title:
      "Wrote a program to print sum of all prime numbers below 100. Works for 20 or 25, but shows wrong result when given such a big number. Why?",
    buttonText: "Code Feedback",
    answer: "0",
    createdAt: "2h",
  },
  {
    image: (
      <Image
        src={blogPostser}
        className="object-cover border w-full "
        alt="none"
      />
    ),
    title: "Survey Form - Build a Survey form",
    buttonText: "HTML-CSS",
    answer: "1",
    createdAt: "1h",
  },
  {
    image: (
      <Image
        src={blogPostser}
        className="object-cover border w-full "
        alt="none"
      />
    ),
    title: "Survey Form - Build a Survey form",
    buttonText: "HTML-CSS",
    answer: "1",
    createdAt: "1h",
  },
];

export default dummyForumLatest;
