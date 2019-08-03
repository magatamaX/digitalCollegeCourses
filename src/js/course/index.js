import React from "react";
import { render } from "react-dom";
import List from "./pages/list";
import App from "./pages/app";
import Api from "./api/";
import generateCourses from "./helpers/generateCourses";
import sortData from "./helpers/sortData";

// target DOMS
const LIST_TARGET = document.querySelector(".js-course-list");
const APP_TARGETS = Array.from(document.querySelectorAll(".js-course-app"));

const setComponents = async () => {
  // get data
  const originalCourses = await Api.get(
    "https://www.fotopus9m.com/api/college/search"
  );
  // const originalCourses = await Api.get("/json/course.json");
  const teachers = await Api.get("/schoolnew/json/teachers_list.json");
  const locations = await Api.get("/schoolnew/json/location_list.json");

  // helper::開催情報を配列化します。
  const generatedCourses = generateCourses(originalCourses);

  console.log(generatedCourses, teachers, locations);
  const coursesLists = APP_TARGETS.map(targetDom => {
    const props = { ...targetDom.dataset };
    console.log(props);
    const courses = sortData(
      generatedCourses.filter(course => course.ページid === props.pageId),
      "prefecture"
    );
    console.log(courses);
    // render Apps
    render(
      <App
        {...props}
        courses={courses}
        teachers={teachers}
        locations={locations}
      />,
      targetDom
    );

    return courses;
  });

  console.log(coursesLists);

  if (LIST_TARGET) {
    const courses =
      coursesLists.reduce((arr, list, i) => [...arr, ...list], []) || [];
    console.log(courses);
    // render List
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
