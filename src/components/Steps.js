import React from "react";
import "./Steps.css";

const Steps = ({ current, max }) => {
  return (
    <div className="count">
      {[...Array(max)].map((value, key) => {
        return (
          <StepItem key={key} className={current > key ? "is-active" : ""} />
        );
      })}
    </div>
  );
};

const StepItem = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 242 216">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <text
          fill="#191E3F"
          fontFamily="Zapf Dingbats"
          fontSize="300"
          fontWeight="normal"
        >
          <tspan x="-9.95703125" y="212" fill="#000000">
            ❍
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default Steps;
