import React from "react";
import CourseIndex from "./../components/CourseIndex";
import CourseContent from "./../components/CourseContent";
import CourseContentFlexbox from "./../components/CourseContentFlexbox";
import CourseContentSelect from "./../components/CourseContentSelect";
import CourseContentEntry from "./../components/CourseContentEntry";
import Teacher from "./../components/Teacher";

const Dynamic = ({ loading, courses, teachers }) => {

  if (loading) {
    return <p>Now Loading...</p>
  }

  if (!courses.length) {
    return <p>現在、参加受け付け中の講座はございません。</p>;
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
                id={course.講座id}
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
