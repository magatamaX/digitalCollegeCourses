function* gfn(from, to) {
  while (from <= to) yield from++;
}

const generateCourses = (courses, from = 1, to = 10) => {
  const generatedCourses = courses.map(course => {
    const all = gfn(from, to);

    let details = [];
    for (const n of all) {
      if (course[`開催日${n}`] !== "") {
        details.push({
          place: course[`会場${n}`],
          content: course[`授業内容${n}`],
          time: course[`時間${n}`],
          day: course[`曜日${n}`],
          date: course[`開催日${n}`]
        });
      }
    }
    return {
      ...course,
      details
    };
  });

  return generatedCourses;
};

export default generateCourses;
