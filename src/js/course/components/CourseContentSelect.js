import React from "react";
import changeDateFormat from "./../helpers/changeDateFormat";

const CourseContentSelect = ({ courseInfo }) => {

  // 開催日が空のものを除外する
  const displayDetails = courseInfo.details.filter( d => d.date !== "" );

  return (
    <div className="course__content-select" style={{ paddingBottom: 0 }}>
      <h6 className="course__content">{courseInfo.都道府県}</h6>
      {displayDetails.map((detail, index) => (
        <div key={index} className="course__content-select-card">
          <ul>
            <li className="course__content-select-card-date">
              <span>{changeDateFormat(detail.date)}</span>（
              {detail.day}）　{detail.time}
            </li>
            <li className="course__content-select-card-number">
              定員：{courseInfo.定員}／残数：△
            </li>
            <li className="course__content-select-card-place">
              {detail.place}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseContentSelect;
