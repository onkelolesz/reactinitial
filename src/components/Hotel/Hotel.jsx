import React, { useState } from "react";
import Subscription from "../Subscription/Subscription";

const Hotel = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="hotel">
      <h2>{props.d.name}</h2>
      <button
        onClick={(e) => {
          if (show) {
            setShow(false);
          } else {
            setShow(true);
          }

          if (e.target.innerHTML === "show less") {
            e.target.innerHTML = "show more";
          } else {
            e.target.innerHTML = "show less";
          }
        }}
      >
        see more
      </button>
      {show && (
        <>
          <p>
            {props.d.city} ({props.d.stars})
          </p>
          <Subscription />
        </>
      )}
    </div>
  );
};
export default Hotel;
