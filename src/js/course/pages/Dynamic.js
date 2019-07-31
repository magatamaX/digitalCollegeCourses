import React, { useEffect, useState } from "react";
import CourseIndex from "./../components/CourseIndex";
import CourseContent from "./../components/CourseContent";
import CourseContentFlexbox from "./../components/CourseContentFlexbox";
import CourseContentSelect from "./../components/CourseContentSelect";
import CourseContentEntry from "./../components/CourseContentEntry";

const Dynamic = ({ courses }) => {
  console.log("ダイナミックダヨ", courses);
  return (
    <div>
      <CourseIndex courses={courses} />
      {courses.map((course, i) => (
      <CourseContent key={i} id={course.講座id}>
        <CourseContentFlexbox courseInfo={course} />
        <CourseContentSelect />
        <CourseContentEntry />
      </CourseContent>
      ))}
    </div>
  );
};

export default Dynamic;
