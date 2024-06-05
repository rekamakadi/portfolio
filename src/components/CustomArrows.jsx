import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        fontSize: "24px",
        zIndex: 1,
        left: "-30px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        fontSize: "24px",
        zIndex: 1,
        right: "-30px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

export { CustomPrevArrow, CustomNextArrow };
