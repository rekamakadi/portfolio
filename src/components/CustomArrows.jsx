//

import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 transform -translate-y-1/2 left-2 z-10`}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <AiOutlineLeft className="text-white" size={30} />
    </div>
  );
};

export const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 transform -translate-y-1/2 right-2 z-10`}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <AiOutlineRight className="text-white" size={30} />
    </div>
  );
};
