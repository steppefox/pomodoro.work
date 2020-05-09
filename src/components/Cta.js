import React from "react";

const Cta = ({ title, disabled, onClick }) => {
  return (
    <button disabled={disabled} className="button" onClick={onClick}>
      {title}
    </button>
  );
};

export default Cta;
