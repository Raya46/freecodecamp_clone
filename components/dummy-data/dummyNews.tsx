import Image from "next/image";
import newsImage from "@/assets/newsImage.png";
import newsImage2 from "@/assets/newsImage2.png";
import newsImage3 from "@/assets/newsImage3.png";
import newsImage4 from "@/assets/newsImage4.jpg";
import person1 from "@/assets/person1.png";
import person2 from "@/assets/person2.png";
import person3 from "@/assets/person3.png";
const dummyNews = [
  {
    image: <Image src={newsImage} alt="none" />,
    hashtag: "#OPENSOURCE",
    title: "How to Find Good First Issues On GitHub",
    imagePerson: <Image src={person1} alt="none" className="w-8 h-8" />,
    namePerson: "JOHN SWANG",
    createdAt: "3 HOURS AGO",
  },
  {
    image: <Image src={newsImage2} alt="none" />,
    hashtag: "#JAVASCRIPT",
    title: "How to Build a JavaScript Utility Library like Lodash",
    imagePerson: <Image src={person2} alt="none" className="w-8 h-8" />,
    namePerson: "GIDEON AKINSANMI",
    createdAt: "17 HOURS AGO",
  },
  {
    image: <Image src={newsImage3} alt="none" />,
    hashtag: "#REACT",
    title: "How to Add ESLint to Your React Project",
    imagePerson: <Image src={person3} alt="none" className="w-8 h-8" />,
    namePerson: "ISAH JACOB",
    createdAt: "A DAY AGO",
  },
  {
    image: <Image src={newsImage4} alt="none" />,
    hashtag: "#API",
    title: "How to Use Web APIs in Your Coding Projects",
    imagePerson: <Image src={person1} alt="none" className="w-8 h-8" />,
    namePerson: "ABURAHAM GORGEUS",
    createdAt: "A DAY AGO",
  },
  {
    image: <Image src={newsImage} alt="none" />,
    hashtag: "#NODEJS",
    title:
      "How to Set Up Application Performance Monitoring for Node.js Applications Using Elastic",
    imagePerson: <Image src={person3} alt="none" className="w-8 h-8" />,
    namePerson: "ISAH JACOB",
    createdAt: "5 DAYS AGO",
  },
];

export default dummyNews;
