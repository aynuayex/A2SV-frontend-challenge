import React from "react";
import CardComp from "./CardComp";

const Featured = () => {
  const arrayFrom = Array.from({ length: 8 }, (_, index) => index + 1);
  return (
    <div className="pt-[80px]">
      <h1 className="text-center font-bold text-[43px]/[48.16px]">Featured Restaurants</h1>
      <div className="grid grid-cols-4 gap-4 px-[222px] pt-[136px]">
        {arrayFrom.map((item) => (
          <CardComp key={item} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
