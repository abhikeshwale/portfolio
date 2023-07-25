import React from "react";

const Popup = (props) => {
  return props.trigger ? (
    <div className="fixed top-0 left-0 w-full h-100v bg-gray-200 flex content-center items-center ">
      <div className="relative p-8 w-full max-w-[640px] bg-white ">
        <button
          className="absolute top-4  right-4  "
          onClick={() => props.setTrigger(false)}
        >
          Close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;