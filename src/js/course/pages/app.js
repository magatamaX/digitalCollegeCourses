import React, { useEffect, useState } from "react";
import Static1 from "./Static1";
import Static2 from "./Static2";
import Dynamic from "./Dynamic";
import sortData from "./../helpers/sortData";
import changeDateFormat from "./../helpers/changeDateFormat";
import Api from "./../api/";

const api = new Api();

const App = ({ pageId, type, closeDate, deleteDate }) => {
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [locations, setLocations] = useState([]);
  const [sortType, setSortType] = useState("prefecture");

  useEffect(() => {
    async function fetchData() {
      const { courses } = await api.getCourse("/json/course.json", pageId);
      const { teachers } = await api.getTeacher("/json/teachers_list.json");
      const { locations } = await api.getLocation("/json/location_list.json");

      await console.log(courses, teachers, locations);
      // const aaa = courses.filter(c => c.)
      console.log(changeDateFormat("09-24-2019", "YY-MM-DD"));

      setCourses(courses);
      setTeachers(teachers);
      setLocations(locations);
    }
    fetchData();
  }, []);

  const onSort = (data, type = "prefecture") => {
    const sortedData = sortData(data, type);
    setSortType(type);
    setCourses(sortedData);
  };

  console.log(sortType);

  if (type === "static1") {
    return (
      <Static1
        courses={courses}
        sortType={sortType}
        onSort={type => onSort(courses, type)}
      />
    );
  }

  if (type === "static2") {
    return <Static2 courses={courses} />;
  }

  if (type === "dynamic") {
    return <Dynamic courses={courses} teachers={teachers} />;
  }

  return <p>nothing.</p>;
};

export default App;
