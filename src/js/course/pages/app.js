import React, { useEffect, useState } from "react";
import Static1 from "./Static1";
import Static2 from "./Static2";
import Dynamic from "./Dynamic";
import sortData from "./../helpers/sortData";

const App = props => {
  const [courses, setCourses] = useState([]);
  const [sortType, setSortType] = useState("prefecture");

  const onSort = (data, type = "prefecture") => {
    const sortedData = sortData(data, type);
    setSortType(type);
    setCourses(sortedData);
  };

  useEffect(() => {
    onSort([...props.courses]);
  }, []);

  const { type, teachers, locations } = props;
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
