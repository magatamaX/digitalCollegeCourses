import React from "react";
import CourseIcons from "./../components/CourseIcons";

const setBreak = str => {
  const arr = str.split("\n");
  const elms = arr.map((el, i) => (
    <span style={{ display: `block` }} key={i}>
      {el}
    </span>
  ));
  return elms;
};

const Left = ({ courseInfo, teacherComponent }) => (
  <li>
    <div className="course__content-leftbox">
      <div className="course__content-courseimage pc-show">
        <img src={`/schoolnew/images/lesson/${courseInfo.講座id}.jpg`} alt="" />
      </div>
      <sup className="course__content-sup pc-show">※写真はイメージです</sup>
      {teacherComponent()}
    </div>
  </li>
);

const Right = ({ courseInfo }) => (
  <li>
    <div className="course__content-col2">
      <h4 className="course__content">{courseInfo.タイトル}</h4>
      <div className="course__content-courseimage sp-show">
        <img src={`/schoolnew/images/lesson/${courseInfo.講座id}.jpg`} alt="" />
      </div>
      <sup className="course__content-sup sp-show">※写真はイメージです</sup>
      <div className="course__content-tag pc-show">
        <CourseIcons courseInfo={courseInfo} />
      </div>
      <div className="course__content-information">
        <div className="course__content-attention">
          {setBreak(courseInfo.講座説明)}
        </div>
      </div>
      <div className="course__content-tag sp-show">
        <CourseIcons courseInfo={courseInfo} />
      </div>

      <div className="course__content-accordion">
        <input id={`${courseInfo.講座id}__1`} type="checkbox" name="tabs" />
        <label htmlFor={`${courseInfo.講座id}__1`}>確認事項</label>
        <div className="course__content-accordion-content">
          <p>{courseInfo.料金注記}</p>
        </div>
      </div>
      <div className="course__content-accordion">
        <input id={`${courseInfo.講座id}__2`} type="checkbox" name="tabs" />
        <label htmlFor={`${courseInfo.講座id}__2`}>カメラ</label>
        <div className="course__content-accordion-content">
          <p>{setBreak(courseInfo.講座注記)}</p>
        </div>
        <hr className="course__content-description-hr" />
      </div>
      <ul className="course__content-price">
        <li className="course__regularPriceMember">通常価格</li>
        <li className="course__regularPrice">
          ¥{courseInfo.料金その他.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
          <span>税込</span>
        </li>
        <li className="course__premirePriceMember">プレミア会員価格</li>
        <li className="course__premirePrice">
          ¥{courseInfo.料金プレミア.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
          <span>税込</span>
        </li>
      </ul>
    </div>
  </li>
);

const CourseContentFlexbox = ({ courseInfo, teacherComponent }) => {
  return (
    <ul className="course__content-flexbox">
      <Left courseInfo={courseInfo} teacherComponent={teacherComponent} />
      <Right courseInfo={courseInfo} />
    </ul>
  );
};

export default CourseContentFlexbox;
