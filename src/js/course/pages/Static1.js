import React, { useState } from "react";
import changeDateFormat from "./../helpers/changeDateFormat";
import SortButton from "./../components/SortButton";
import EntryButton from "./../components/EntryButton";

const Static1 = ({ courses, onSort, sortType }) => {
  const [id, setId] = useState("");

  return (
    <div className="course__content-select">
      <p>下記講座のいずれかを選択してください。</p>

      <SortButton onSort={onSort} sortType={sortType} />

      {courses.map((courseInfo, i, all) => {
        return (
          <React.Fragment key={i}>
            {sortType === "prefecture" &&
              (!all[i - 1] ||
                courseInfo.都道府県 !== all[i - 1]["都道府県"]) && (
                <h6 className="course__content">{courseInfo.都道府県}</h6>
              )}
            <label data-course-id={courseInfo.講座id}>
              <ul className="base__content-select-row">
                <li className="base__content-select-radio">
                  <input
                    type="radio"
                    name="baseSelect"
                    value={courseInfo.講座id}
                    onChange={() => setId(courseInfo.講座id)}
                  />
                </li>
                <li>
                  <div className="base__content-select-card-base">
                    <ul>
                      <li className="base__content-select-card-date">
                        <span>{changeDateFormat(courseInfo.開催日1)}</span>（
                        {courseInfo.曜日1}）　{courseInfo.時間1}
                      </li>
                      <li className="base__content-select-card-number">
                        定員：{courseInfo.定員}／残数：△
                      </li>
                      <li className="base__content-select-card-place">
                        {courseInfo.会場1}
                      </li>
                      <li className="base__content-select-card-lecturer">
                        {courseInfo.講師}
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </label>
          </React.Fragment>
        );
      })}

      <EntryButton href={`/school/entry.php?seminar_id=${id}`} />
    </div>
  );
};

export default Static1;
