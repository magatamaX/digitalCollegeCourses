import React, { useEffect, useState } from "react";
import CourseIndex from "./../components/CourseIndex";
import CourseContent from "./../components/CourseContent";
import CourseContentFlexbox from "./../components/CourseContentFlexbox";
import CourseContentSelect from "./../components/CourseContentSelect";
import CourseContentEntry from "./../components/CourseContentEntry";

const Dynamic = ({ courses }) => {
  console.log("ダイナミック", courses);
  return (
    <div>
      <CourseIndex courses={courses} />
      {courses.map((course, i) => (
      <CourseContent key={i} id={course.講座id}>
        <CourseContentFlexbox courseInfo={course} />
        <CourseContentSelect courseInfo={course} />
        <CourseContentEntry href={`/school/entry.php?seminar_id=${course.講座id}`} />
      </CourseContent>
      ))}
    </div>
  );
};

export default Dynamic;
