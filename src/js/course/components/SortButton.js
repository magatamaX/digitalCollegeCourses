import React from "react";

const SortButton = () => {
  return (
    <div className="base__sort_btn">
      <ul>
        <li className="sort_prefecture default active">
          <a href="#">都道府県順</a>
        </li>
        <li className="sort_day altanate">
          <a href="#">日付順</a>
        </li>
      </ul>
    </div>
  )
}

export default SortButton;