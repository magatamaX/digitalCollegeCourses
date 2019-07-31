const sortJsonPrefecture = async (data = []) => {
  const sortedData = await [...data].sort((aData, bData) => {
    // 第1優先
    var aPrefecture = aData["都道府県"];
    var bPrefecture = bData["都道府県"];
    var prefectureList = [
      "東京",
      "神奈川",
      "千葉",
      "埼玉",
      "大阪",
      "愛知",
      "福岡",
      "北海道",
      "青森",
      "岩手",
      "宮城",
      "秋田",
      "山形",
      "福島",
      "茨城",
      "栃木",
      "群馬",
      "新潟",
      "富山",
      "石川",
      "福井",
      "山梨",
      "長野",
      "岐阜",
      "静岡",
      "三重",
      "滋賀",
      "京都",
      "大阪",
      "兵庫",
      "奈良",
      "和歌山",
      "鳥取",
      "島根",
      "岡山",
      "広島",
      "山口",
      "徳島",
      "香川",
      "愛媛",
      "高知",
      "佐賀",
      "長崎",
      "熊本",
      "大分",
      "宮崎",
      "鹿児島",
      "沖縄"
    ];
    var aPrefectureListNumber = $.inArray(aPrefecture, prefectureList);
    var bPrefectureListNumber = $.inArray(bPrefecture, prefectureList);
    // 第2優先
    var aYear = aData["開催日1"].substr(aData["開催日1"].length - 2, 2);
    var bYear = bData["開催日1"].substr(bData["開催日1"].length - 2, 2);
    var aDay = aData["開催日1"];
    var bDay = bData["開催日1"];
    // 第3優先
    var aTime = aData["時間1"];
    var bTime = bData["時間1"];

    if (aPrefectureListNumber < bPrefectureListNumber) return -1;
    if (aPrefectureListNumber > bPrefectureListNumber) return 1;
    if (aYear < bYear) return -1;
    if (aYear > bYear) return 1;
    if (aDay < bDay) return -1;
    if (aDay > bDay) return 1;
    if (aTime < bTime) return -1;
    if (aTime > bTime) return 1;
    return 0;
  });
  return sortedData;
};

export default sortJsonPrefecture;
