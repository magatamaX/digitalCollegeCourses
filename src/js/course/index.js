import React from "react";
import { render } from "react-dom";
import List from "./pages/list";
import App from "./pages/app";
import Api from "./api/";
import generateCourses from "./helpers/generateCourses";
import sortData from "./helpers/sortData";
import Prefectures from "./pages/Prefectures";

// ------------------------------
// JSONP setting
// ------------------------------
const CALLBACK_NAME = "collegeData";

// define callback function
window[CALLBACK_NAME] = arr => {
  window.__COLLEGE_DATA__ = arr;
};
// ------------------------------

// target DOMS
const LIST_TARGET = document.querySelector(".js-course-list");
const APP_TARGETS = Array.from(document.querySelectorAll(".js-course-app"));
const PREFECTURES_TARGET = document.querySelector(".js-course-prefectures");

const setComponents = async () => {
  // get data
  const originalCourses = await Api.get(
    `${__COLLEGE_ROOT_PATH__}/api/college/search`
  );
  const teachers = await Api.get("/schoolnew/json/teachers_list.json");
  const locations = await Api.get("/schoolnew/json/location_list.json");

  // get all courseIDs
  const courseIDs = originalCourses.map(c => c.講座id).join("_1,");

  // get remainings list
  const remainings = await Api.getJSONP(
    `${__COLLEGE_ROOT_PATH__}/api/college/remain/sid/${courseIDs}`
  );

  // helper::開催情報を配列化します。
  const generatedCourses = generateCourses(originalCourses);

  // 地域別講座一覧
  if (PREFECTURES_TARGET) {
    const courses = sortData(generatedCourses, "prefecture");
    render(<Prefectures courses={courses} />, PREFECTURES_TARGET);
  }

  // 講座情報
  const coursesLists = APP_TARGETS.map(targetDom => {
    const props = { ...targetDom.dataset };
    const courses = sortData(
      generatedCourses.filter(course => course.ページid === props.pageId),
      "prefecture"
    );
    render(
      <App
        {...props}
        courses={courses}
        teachers={teachers}
        locations={locations}
        remainings={remainings}
      />,
      targetDom
    );

    return courses;
  });

  // 講座一覧
  if (LIST_TARGET) {
    const courses =
      coursesLists.reduce((arr, list, i) => [...arr, ...list], []) || [];
    render(
      <List courses={courses} teachers={teachers} locations={locations} />,
      LIST_TARGET
    );
  }
};

const Init = () => {
  window.addEventListener("DOMContentLoaded", setComponents, false);
};

export default Init;
