import React from "react";

const EntryButton = ({ href }) => {
  return (
    <div className="base__content-select-btn-base">
      <a href={href}>
        <img src="../../images/course/btn_select.png" alt="" />
        お申し込み
      </a>
    </div>
  )
}

export default EntryButton;