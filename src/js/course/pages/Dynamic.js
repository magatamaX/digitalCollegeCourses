import React, { useEffect, useState } from "react";
import CourseIndex from "./../components/CourseIndex";
import CourseContent from "./../components/CourseContent";
import CourseContentFlexbox from "./../components/CourseContentFlexbox";
import CourseContentSelect from "./../components/CourseContentSelect";
import CourseContentEntry from "./../components/CourseContentEntry";
import Teacher from "./../components/Teacher";

const Dynamic = ({ courses, teachers }) => {
  console.log("ダイナミック", courses, teachers);

  if (!courses.length) {
    return <p>Now loading...</p>;
  }
  return (
    <div>
      <CourseIndex courses={courses} />
      {courses.map((course, i) => (
        <CourseContent key={i} id={course.講座id}>
          <CourseContentFlexbox
            courseInfo={course}
            teacherComponent={() => (
              <Teacher
                name={course.講師.split("　").join("")}
                profile={course.講師プロフィール}
                teachers={teachers}
              />
            )}
          />
          <CourseContentSelect courseInfo={course} />
          <CourseContentEntry
            href={`/school/entry.php?seminar_id=${course.講座id}`}
          />
        </CourseContent>
      ))}
    </div>
  );
};

export default Dynamic;
