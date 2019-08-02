import React, { useEffect, useState } from "react";
import CourseIndex from "./../components/CourseIndex";

const List = ({ courses }) => {
  if (!courses.length) {
    return <p>Nothing to list.</p>;
  }

  return <CourseIndex courses={courses} />;
};

export default List;
