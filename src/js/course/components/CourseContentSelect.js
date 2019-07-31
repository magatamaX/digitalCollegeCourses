import React from "react";
import changeDateFormat from "./../helpers/changeDateFormat";

const CourseContentSelect = ({ courseInfo }) => {
  return (
    <div className="course__content-select" style={{ paddingBottom: 0}}>
      <h6 className="course__content">{courseInfo.都道府県}</h6>
      <div className="course__content-select-card">
        <ul>
          <li className="course__content-select-card-date">
            <span>{changeDateFormat(courseInfo.開催日1)}</span>（{courseInfo.曜日1}）　{courseInfo.時間1}
          </li>
          <li className="course__content-select-card-number">
            定員：{courseInfo.定員}／残数：△
          </li>
          <li className="course__content-select-card-place">
            {courseInfo.会場1}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseContentSelect;
