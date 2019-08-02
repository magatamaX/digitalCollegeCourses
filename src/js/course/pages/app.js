import React, { useEffect, useState } from "react";
import Static1 from "./Static1";
import Static2 from "./Static2";
import Dynamic from "./Dynamic";
import sortData from "./../helpers/sortData";
import generateCourses from "./../helpers/generateCourses";
import Api from "./../api/";

const api = new Api();

const App = ({ pageId, type, closeDate, deleteDate }) => {
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [locations, setLocations] = useState([]);
  const [sortType, setSortType] = useState("prefecture");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const { courses } = await api.getCourse("https://www.fotopus9m.com/api/college/search", pageId);
      const { teachers } = await api.getTeacher("/schoolnew/json/teachers_list.json");
      const { locations } = await api.getLocation("/schoolnew/json/location_list.json");

      // helper::開催情報を配列化します。
      const generatedCourses = await generateCourses(courses);

      await setCourses(generatedCourses);
      await setTeachers(teachers);
      await setLocations(locations);

      await setLoading(false);
    }
    fetchData();
  }, []);

  const onSort = (data, type = "prefecture") => {
    const sortedData = sortData(data, type);
    setSortType(type);
    setCourses(sortedData);
  };

  if (type === "static1") {
    return (
      <Static1
        loading={loading}
        courses={courses}
        sortType={sortType}
        onSort={type => onSort(courses, type)}
      />
    );
  }

  if (type === "static2") {
    return <Static2 loading={loading} courses={courses} />;
  }

  if (type === "dynamic") {
    return <Dynamic loading={loading} courses={courses} teachers={teachers} />;
  }

  return <p>nothing.</p>;
};

export default App;
