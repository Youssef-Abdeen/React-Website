import React from "react";
import Data_size from "./Data_size";

const Buttons = ({ filter, set, options }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {options.map((Number, id) => {
          return (
            <button
            className="btn"
              onClick={() => filter(Number)}
              key={id}
            >
              {Number}
            </button>
          );
        })}
        <button
          className="btn"
          onClick={() => set(Data_size)}
        >
          All
        </button>
      </div>
    </>
  );
};

export default Buttons;
