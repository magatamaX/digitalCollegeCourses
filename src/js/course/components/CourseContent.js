import React from "react";

const CourseContent = ({ id, children }) => {
  return <div id={id} className="course__content-row">{children}</div>;
};

export default CourseContent;
