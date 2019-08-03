import React from "react";
import changeDateFormat from "../helpers/changeDateFormat";

const CourseContentCard = ({
  courseInfo,
  remaining,
  classNamePrefix,
  children
}) => {
  // 開催日が空のものを除外する
  const { details } = courseInfo;

  return (
    <div
      className={`${classNamePrefix}__content-select-card${
        classNamePrefix === "base" ? "-base" : ""
      }`}
    >
      {details.map(detail => (
        <ul key={detail.date}>
          <li className={`${classNamePrefix}__content-select-card-date`}>
            <span>{changeDateFormat(detail.date)}</span>（{detail.day}）　
            {detail.time}
          </li>
          <li className={`${classNamePrefix}__content-select-card-number`}>
            定員：{courseInfo.定員}／残数：{remaining.mark}
            {remaining.text && `（${remaining.text}）`}
          </li>
          <li className={`${classNamePrefix}__content-select-card-place`}>
            {detail.place}
          </li>
          {children}
        </ul>
      ))}
    </div>
  );
};

export default CourseContentCard;
