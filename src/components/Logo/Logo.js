import React from "react";

const Logo = (props) => {
  document.title = "TrungCoffee - " + props.title;
  return <div className="w-100"> {props.children}</div>;
};

export default Logo;
