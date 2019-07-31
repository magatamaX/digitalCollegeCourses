import React from "react";

const CourseContentSelect = () => {
  return (
    <div className="course__content-select" style={{ paddingBottom: 0}}>
      <h6 className="course__content">北海道</h6>
      <div className="course__content-select-card">
        <ul>
          <li className="course__content-select-card-date">
            <span>11/16</span>（土）　7:00～10:00
          </li>
          <li className="course__content-select-card-number">
            定員：20／残数：△
          </li>
          <li className="course__content-select-card-place">
            札幌鉄道市内線沿線（札幌市）
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseContentSelect;
