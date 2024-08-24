import React from "react";
import PlanCard from "./PlanCard";

const planCards = [
  {
    title: "Free",
    desc: "For personal use or testing your app before deploying to customers.",
    pricing: null,
    prompted: false,
  },
  {
    title: "Essential",
    desc: "For simple desktop apps.",
    pricing: "$99",
    prompted: false,
  },
  {
    title: "Professional",
    desc: "For sophisticated desktop apps.",
    pricing: "$99",
    prompted: true,
  },
];

const Plans = () => {
  return (
    <div className="mt-[8rem] mx-[5rem]">
      <div className="text-5xl">
        <div className="w-[35rem]">Choose a plan that fits your needs</div>
      </div>
      <div className="my-10 flex gap-5 justify-around absolute">
        {planCards.map((card) => <PlanCard {...card} key={card.title} />)}
      </div>
    </div>
  );
};

export default Plans;
