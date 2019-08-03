import React from "react";
import CourseContent from "./../components/CourseContent";
import CourseContentFlexbox from "./../components/CourseContentFlexbox";
import CourseContentCard from "../components/CourseContentCard";
import CourseContentEntry from "./../components/CourseContentEntry";
import Teacher from "./../components/Teacher";

const Dynamic = ({ loading, courses, teachers }) => {
  if (loading) {
    return <p>Now Loading...</p>;
  }

  if (!courses.length) {
    return <p>現在、参加受け付け中の講座はございません。</p>;
  }

  return (
    <div>
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
          <div className="course__content-select" style={{ paddingBottom: 0 }}>
            <h6 className="course__content">{course.都道府県}</h6>
            <CourseContentCard classNamePrefix="course" courseInfo={course} />
          </div>
          <CourseContentEntry
            href={`/school/entry.php?seminar_id=${course.講座id}`}
          />
        </CourseContent>
      ))}
    </div>
  );
};

export default Dynamic;
