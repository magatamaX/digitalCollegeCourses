import React from "react";

const CourseContentEntry = ({ href }) => {
  return (
    <div className="course__content-select">
      <div className="course__content-select-btn">
        <a href={href}>
          <img src="/schoolnew/images/course/btn_select.png" alt="" />
          お申し込み
        </a>
      </div>
    </div>
  );
};

export default CourseContentEntry;
