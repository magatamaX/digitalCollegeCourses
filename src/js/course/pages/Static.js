import React, { useState, useRef, useEffect } from "react";
import SortButton from "../components/SortButton";
import EntryButton from "../components/EntryButton";
import CourseContentCard from "../components/CourseContentCard";
import displayRemainingNumber from "../helpers/displayRemainingNumber";

const Static = ({ courses, remainings, locations, onSort, sortType }) => {
  const [id, setId] = useState("");
  const [scrollBottom, setScrollBottom] = useState(0);
  const [listOffsetTop, setListOffsetTop] = useState(0);
  const [showEntryButton, setShowEntryButton] = useState(false);
  const listEl = useRef(null);

  const getScrollBottom = () => {
    const body = window.document.body;
    const html = window.document.documentElement;
    const scrollTop = body.scrollTop || html.scrollTop;
    return scrollTop + window.innerHeight;
  };

  const getTargetRectTop = target => {
    const rect = target.getBoundingClientRect();
    const body = window.document.body;
    const html = window.document.documentElement;
    const scrollTop = body.scrollTop || html.scrollTop;
    return rect.top + scrollTop;
  };

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        setListOffsetTop(getTargetRectTop(listEl.current));
        setScrollBottom(getScrollBottom());
      },
      false
    );
  }, []);

  useEffect(() => {
    if (scrollBottom > listOffsetTop + 200) {
      setShowEntryButton(true);
    } else {
      setShowEntryButton(false);
    }
  }, [scrollBottom, listOffsetTop]);

  return (
    <div className="course__content-select" ref={listEl}>
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
                  <CourseContentCard
                    sortType={sortType}
                    classNamePrefix="base"
                    courseInfo={courseInfo}
                    locations={locations}
                    remaining={displayRemainingNumber(
                      courseInfo.講座id,
                      courseInfo.定員,
                      remainings
                    )}
                  >
                    <li className="base__content-select-card-lecturer">
                      {courseInfo.講師}
                    </li>
                  </CourseContentCard>
                </li>
              </ul>
            </label>
          </React.Fragment>
        );
      })}

      <EntryButton
        id={id}
        show={showEntryButton}
        href={`/school/entry.php?seminar_id=${id}`}
      />
    </div>
  );
};

export default Static;
