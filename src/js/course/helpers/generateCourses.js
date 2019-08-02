const generateCourses = (courses) => {
  const generatedCourses = courses.map((course, i, all) => {
    let details = [];
    for ( let i=0; i<10; i++) {
      details.push({
        place:course[`会場${i + 1}`],
        content:course[`授業内容${i + 1}`],
        time:course[`時間${i + 1}`],
        day:course[`曜日${i + 1}`],
        date:course[`開催日${i + 1}`]
      })
    }
    return {
      ...course,
      details
    };
  });
  return generatedCourses;
}


export default generateCourses;