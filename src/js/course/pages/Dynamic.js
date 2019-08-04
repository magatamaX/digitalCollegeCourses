import React from "react";
import CourseContent from "./../components/CourseContent";
import CourseContentFlexbox from "./../components/CourseContentFlexbox";
import CourseContentCard from "../components/CourseContentCard";
import CourseContentEntry from "./../components/CourseContentEntry";
import Teacher from "./../components/Teacher";
import displayRemainingNumber from "../helpers/displayRemainingNumber";

const Dynamic = ({ courses, teachers, locations, remainings }) => {
  if (!courses.length) {
    return (
      <div className="blank_schedule course__blank-schedule">
        <p className="text_red">現在、参加受け付け中の講座はございません。</p>
      </div>
    );
  }

  return (
    <div className="course__app-wrapper">
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
            <CourseContentCard
              classNamePrefix="course"
              courseInfo={course}
              locations={locations}
              remaining={displayRemainingNumber(
                course.講座id,
                course.定員,
                remainings
              )}
            />
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
