import sortJsonPrefecture from "./sortJsonPrefecture";
import sortJsonDay from "./sortJsonDay";

const sortData = (arr, type = "prefecture") => {
  if (!arr.length) {
    return;
  }
  if (type !== "prefecture") {
    return sortJsonDay(arr);
  }
  return sortJsonPrefecture(arr);
};

export default sortData;
