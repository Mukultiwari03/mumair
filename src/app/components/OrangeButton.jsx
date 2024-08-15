import React from "react";

const OrangeButton = ({ text }) => {
  return (
    <button
      className={`text-white bg-[#FD6F00] py-3 px-2 hover:bg-orange-600 w-[8rem]  rounded-md ${
        text === "Download CV" ? "hidden" : "block"
      } lg:block`}
    >
      {text}
    </button>
  );
};

export default OrangeButton;
