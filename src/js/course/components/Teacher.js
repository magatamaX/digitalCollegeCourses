import React from "react";

const Teacher = ({ name, profile, teachers }) => {
  if (!teachers.length) {
    return null;
  }
  return (
    <div className="course__content-card-teacher">
      <div className="course__content-card-teacher-avatar">
        <img
          src={`/schoolnew/images/instructor/koshi/${teachers[0][name]}.jpg`}
          alt={name}
        />
      </div>
      <div className="course__content-card-teacher-description pc-show">
        <h5 className="course__content">
          <a
            href={`https://fotopus.com/school/instructor/index.html#${teachers[0][name]}`}
            target="_blank"
          >
            {name}
          </a>
        </h5>
        {profile && <p>{profile}</p>}
      </div>
    </div>
  );
};

export default Teacher;
