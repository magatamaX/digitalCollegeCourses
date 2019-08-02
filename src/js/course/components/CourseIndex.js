import React from "react";
import changeDateFormat from "./../helpers/changeDateFormat";

const CourseIndex = ({ courses }) => {
  const displayDays = details =>
    details
      .filter(d => d.date !== "")
      .map(d => changeDateFormat(d.date))
      .join("・");

  return (
    <div className="course__index">
      {courses.map(course => (
        <a key={course.講座id} href={`#${course.講座id}`}>
          {course.タイトル} {displayDays(course.details)}
        </a>
      ))}
    </div>
  );
};

export default CourseIndex;
