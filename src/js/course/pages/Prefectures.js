import React from "react";
import changeDateFormat from "./../helpers/changeDateFormat";
import regionsMap from "./../references/regionsMap";

const Prefectures = ({ courses }) => {
  const prefecturesMap = courses.reduce((map, item, i) => {
    if (!map.has(item.都道府県)) {
      map.set(item.都道府県, [item]);
    } else {
      map.set(item.都道府県, [...map.get(item.都道府県), item]);
    }
    return map;
  }, new Map());

  let ichiranMap = new Map();
  [...prefecturesMap.keys()].forEach(key => {
    for (const [region, prefs] of regionsMap) {
      if (prefs.includes(key)) {
        if (!ichiranMap.has(region)) {
          ichiranMap.set(region, [key]);
        } else {
          ichiranMap.set(region, [...ichiranMap.get(region), key]);
        }
      }
    }
  });

  let ichiranDom = [];
  for (const [region, prefs] of ichiranMap) {
    ichiranDom.push(
      <li id={`list${region}`} style={{ display: `inline-block` }}>
        <dl>
          <dt>{region}</dt>
          {prefs.map(pref => (
            <dd className={pref} style={{ display: `inline-block` }}>
              <a href={`#${pref}`}>{pref}</a>
            </dd>
          ))}
        </dl>
      </li>
    );
  }

  let listDom = [];
  for (const [key, value] of prefecturesMap) {
    listDom.push(
      <div id={key}>
        <h3>{key}</h3>
        <ul className="course">
          {value.map(course => (
            <li id={course.講座id} key={course.講座id}>
              <a href={`/schoolnew/${course.ページid}/#${course.講座id}`}>
                {course.タイトル}
              </a>
              <br />
              開催日：
              {course.details
                .map(
                  detail => `${changeDateFormat(detail.date)}（${detail.day}）`
                )
                .join("・")}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div class="course_intro">
        <h2 class="links_head">都道府県一覧</h2>
        <ul id="arealist_link" class="arealist_link">
          {ichiranDom}
        </ul>
      </div>
      <h2>開催講座一覧</h2>
      <div id="arealist_all" className="arealist_all">
        {listDom}
      </div>
    </React.Fragment>
  );
};

export default Prefectures;
