import React, { useEffect, useState } from "react";
import CourseIndex from "./../components/CourseIndex";

const List = ({ courses }) => {
  if (!courses.length) {
    return null;
  }

  return <CourseIndex courses={courses} />;
};

export default List;
