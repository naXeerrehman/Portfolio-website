import React from "react";
// images
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto flex justify-between">
        <img src={Logo} />
        <button className="btn btn-sm">Work with me</button>
      </div>
    </header>
  );
};

export default Header;
