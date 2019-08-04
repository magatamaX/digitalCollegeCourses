import React from "react";
import changeDateFormat from "../helpers/changeDateFormat";

const CourseContentCard = ({
  currentSelectedId,
  courseInfo,
  remaining,
  classNamePrefix,
  sortType,
  locations,
  children
}) => {
  const { details } = courseInfo;

  const setLocationLink = (str, obj) => {
    if (obj.hasOwnProperty(str)) {
      return (
        <a href={obj[str]} target="_blank">
          {str}
        </a>
      );
    }

    return str;
  };

  return (
    <div
      className={`${classNamePrefix}__content-select-card${classNamePrefix === "base" ? "-base" : ""} ${currentSelectedId === courseInfo.講座id ? "current" : ""}`}
    >
      {details.map((detail, i) => (
        <ul key={i}>
          {sortType && sortType === "day" && (
            <li className={`${classNamePrefix}__content-select-card-place`}>
              {courseInfo.都道府県}
            </li>
          )}
          {courseInfo.女性限定 && (
            <li className={`${classNamePrefix}__content-select-card-womenOnly`}>
              女性
              <br />
              限定
            </li>
          )}
          <li className={`${classNamePrefix}__content-select-card-date`}>
            <span>{changeDateFormat(detail.date)}</span>（{detail.day}）
            {detail.time}
          </li>
          <li className={`${classNamePrefix}__content-select-card-number`}>
            定員：{courseInfo.定員}／残数：{remaining.mark}
            {remaining.text && `（${remaining.text}）`}
          </li>
          <li className={`${classNamePrefix}__content-select-card-place`}>
            {setLocationLink(detail.place, locations[0])}
          </li>
          {children}
        </ul>
      ))}
    </div>
  );
};

export default CourseContentCard;
