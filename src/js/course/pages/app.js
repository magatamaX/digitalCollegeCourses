import React, { useEffect, useState } from "react";
import Static from "./Static";
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

  const { type, teachers, locations, remainings } = props;
  if (type === "static") {
    return (
      <Static
        courses={courses}
        sortType={sortType}
        remainings={remainings}
        onSort={type => onSort(courses, type)}
      />
    );
  }

  if (type === "dynamic") {
    return (
      <Dynamic courses={courses} teachers={teachers} remainings={remainings} />
    );
  }

  return <p>nothing.</p>;
};

export default App;
