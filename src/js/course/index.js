import React from "react";
import { render } from "react-dom";
import App from "./pages/app";

const Init = () => {
  const target = document.getElementById("js-course");
  const props = { ...target.dataset };
  console.log(props);
  render(<App {...props} />, target);
};

export default Init;
