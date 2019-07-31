import React from "react";
import changeDateFormat from "./../helpers/changeDateFormat";

const CourseIndex = ({courses}) => {
  return (
    <div className="course__index">
      {courses.map(course => (
        <a key={course.講座id} href={`#${course.講座id}`}>
          {course.タイトル}{' '}{changeDateFormat(course.開催日1)}
        </a>
      ))}
    </div>
  );
};

export default CourseIndex;
