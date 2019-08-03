import React from "react";

const EntryButton = ({ id, href, show }) => {
  return (
    <div
      className={`base__content-select-btn-base ${show ? "active" : ""} ${
        !id ? "disabled" : ""
      }`}
    >
      <a href={id && href}>
        <img src="/schoolnew/images/course/btn_select.png" alt="" />
        お申し込み
      </a>
    </div>
  );
};

export default EntryButton;
