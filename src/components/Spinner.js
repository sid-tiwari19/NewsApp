import React from "react";
import Loading from "./Rolling-1s-200px.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img
        src={Loading}
        alt="Loading "
        style={{ width: "10%", height: "10%" }}
      />
    </div>
  );
};

export default Spinner;
