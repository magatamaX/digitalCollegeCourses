// if (Number(capacity) / 3 < remainder) { // 残数 1/3以上
//     $('#' + jsonId + ' .remainMark').append('○');
// } else if (remainder === '0') { // 残数 0
//     $('#' + jsonId + ' .remainMark').append('―');
//     $('#' + jsonId + ' .entry').text('受付終了');
// } else if (remainder === 'null') { // 残数 講座登録前
//     $('#' + jsonId + ' .remainMark').append('―');
//     $('#' + jsonId + ' .entry').text('受付前');
// } else { // 残数 1/3以下
//     $('#' + jsonId + ' .remainMark').append('△');
// }

const displayRemainingNumber = (id, capacity, arr) => {
  const remainder =
    arr.filter(data => data.id === id)[0]["remainder"] || "null";

  if (remainder === "null") {
    // 残数 講座登録前
    return {
      mark: "―",
      text: "受付前"
    };
  }

  if (Number(capacity) / 3 < Number(remainder)) {
    // 残数 1/3以上
    return {
      mark: "○",
      text: ""
    };
  }

  if (Number(remainder) === 0) {
    // 残数 0
    return {
      mark: "-",
      text: "受付終了"
    };
  }

  // 残数 1/3以下
  return {
    mark: "△",
    text: ""
  };
};

export default displayRemainingNumber;
