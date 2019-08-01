import React from "react";

const SortButton = ({ onSort, sortType }) => {
  return (
    <div className="base__sort_btn">
      <ul>
        <li
          className={`sort_prefecture ${sortType === "prefecture" &&
            "default"}`}
        >
          <a onClick={() => onSort()}>都道府県順</a>
        </li>
        <li className={`sort_day ${sortType === "day" && "default"}`}>
          <a onClick={() => onSort("day")}>日付順</a>
        </li>
      </ul>
    </div>
  );
};

export default SortButton;
