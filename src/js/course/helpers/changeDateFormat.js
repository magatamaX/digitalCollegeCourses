import moment from "moment";

const changeDateFormat = dateStr => {
  // https://qiita.com/unbabel/items/12487e85525ba1ec1618
  // 日付フォーマットがブラウザによってinvalid dateになるのを防ぐ
  const regexp = /^([0-1][0-9])-([0-3][0-9])-([0-9]{2,4})?$/;
  return dateStr.replace(regexp, (match, month, day, year) => {
    return moment(`${year}-${month}-${day}T00:00:00.000+09:00`).format("M/D");
  });
};

export default changeDateFormat;
