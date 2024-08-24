import React from "react";
import FaqItem from "./FaqItem";

const data = [
  {
    title: "Is ToDesktop For Me?",
    desc: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.",
  },
  {
    title: "Is ToDesktop For Me?",
    desc: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.",
  },
  {
    title: "Is ToDesktop For Me?",
    desc: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.",
  }
];

const Faq = () => {
  return (
    <div className="mt-[6rem] mx-[5rem]">
      <div className="text-5xl">FAQs</div>
      <div className="flex flex-col mx-auto gap-5 mt-10 w-[60rem]">
        {data.map((item, i) => (
          <FaqItem {...item} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
