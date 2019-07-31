import React from "react";

const CourseIcons = ({ courseInfo }) => {
  const icons = [];

  // 講座アイコンを表示
  if (
    courseInfo.授業内容1.match("講義") ||
    courseInfo.授業内容2.match("講義") ||
    courseInfo.授業内容3.match("講義") ||
    courseInfo.授業内容4.match("講義") ||
    courseInfo.授業内容5.match("講義") ||
    courseInfo.授業内容6.match("講義")
  ) {
    // $('#' + courseInfo.講座id + 'Anc').append('<span class="icon_lecture">講義</span>');
    icons.push(
      <li key="講義" className="tag__lecture">
        講義
      </li>
    );
  }

  if (
    courseInfo.授業内容1.match("撮影") ||
    courseInfo.授業内容2.match("撮影") ||
    courseInfo.授業内容3.match("撮影") ||
    courseInfo.授業内容4.match("撮影") ||
    courseInfo.授業内容5.match("撮影") ||
    courseInfo.授業内容6.match("撮影")
  ) {
    // $('#' + courseInfo.講座id + 'Anc').append('<span class="icon_photographing">撮影</span>');
    icons.push(
      <li key="撮影" className="tag__snap">
        撮影
      </li>
    );
  }

  if (
    courseInfo.授業内容1.match("講評") ||
    courseInfo.授業内容2.match("講評") ||
    courseInfo.授業内容3.match("講評") ||
    courseInfo.授業内容4.match("講評") ||
    courseInfo.授業内容5.match("講評") ||
    courseInfo.授業内容6.match("講評")
  ) {
    // $('#' + courseInfo.講座id + 'Anc').append('<span class="icon_review">講評</span>');
    icons.push(
      <li key="講評" className="tag__comment">
        講評
      </li>
    );
  }

  if (
    courseInfo.講師 !== "オリンパスインストラクター" &&
    courseInfo.講師 !== "オリンパスフォトチューター" &&
    courseInfo.講師 !== "オリンパススタッフ" &&
    courseInfo.講師 !== "青木雄介" &&
    courseInfo.講師 !== "善福克枝" &&
    courseInfo.講師 !== "高山はるか" &&
    courseInfo.講師 !== "西川ヒトシ" &&
    courseInfo.講師 !== "松本宏" &&
    courseInfo.講師 !== "山田泰嗣"
  ) {
    // $('#' + courseInfo.講座id + 'Anc').append('<span class="icon_professional">プロ講師</span>');
    icons.push(
      <li key="プロ講師" className="tag__Professional">
        プロ講師
      </li>
    );
  }

  if (courseInfo.カメラ貸出 === "貸出可") {
    // $('#' + courseInfo.講座id + 'Anc' + '.icons').append('<span class="icon_rental">カメラ貸出可</span>');
    icons.push(
      <li key="カメラ貸出可" className="tag__camera-rental">
        カメラ貸出可
      </li>
    );
  }

  if (courseInfo.レンズ貸出 === "貸出可") {
    // $('#' + courseInfo.講座id + 'Anc' + '.icons').append('<span class="icon_rental2">レンズ貸出可</span>');
    icons.push(
      <li key="レンズ貸出可" className="tag__camera-rental">
        レンズ貸出可
      </li>
    );
  }

  return <ul className="tag">{icons}</ul>;
};

export default CourseIcons;
