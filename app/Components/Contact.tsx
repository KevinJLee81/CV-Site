import { The_Nautigal } from "next/font/google";
import React from "react";

export const Contact = () => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    // Add your if statement here based on isChecked
    if (isChecked) {
      // Code to execute if the checkbox is checked
    } else {
      // Code to execute if the checkbox is not checked
    }
  };

  // Rest of the code...

  return (
    <>
      <footer className="footer footer-center bg-base-100 text-base-content rounded fixed bottom-0 py-2">
        <nav className="grid grid-flow-col gap-6">
          <a href="https://www.linkedin.com/in/kevinjlee81/" target="_BLANK">
            <img className="h-8" src="../../in.svg" alt="" />
          </a>

          <a href="https://github.com/KevinJLee81" target="_BLANK">
            <img className="h-8" src="../../Github.svg" alt="" />
          </a>

          <a href="mailto:kevinjlee81@gmail.com" target="_BLANK">
            <img className="h-8" src="../../mail.svg" alt="" />
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Contact;
