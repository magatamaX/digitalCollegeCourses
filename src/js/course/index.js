import React from "react";
import { render } from "react-dom";
import List from "./pages/list";
import App from "./pages/app";

const Init = () => {

  const listTarget = document.querySelector(".js-course-list");
  if ( listTarget ) {
    const props = {...listTarget.dataset};
    console.log(props);
    render(<List {...props} />, listTarget);
  }

  const appTargets = Array.from( document.querySelectorAll(".js-course-app") );
  if ( appTargets.length > 0 ) {

    appTargets.forEach(appTarget => {
      const props = { ...appTarget.dataset };
      console.log(props);
      render(<App {...props} />, appTarget);
    })

  }
};

export default Init;
