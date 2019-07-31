import React, { useEffect, useState } from "react";
import Static1 from "./Static1";
import Static2 from "./Static2";
import Dynamic from "./Dynamic";
import sortJsonPrefecture from "./../helpers/sortJsonPrefecture";
import sortJsonDay from "./../helpers/sortJsonDay";

const sortData = (arr, type = "prefecture") => {
  if (!arr.length) {
    return;
  }
  if (type !== "prefecture") {
    return sortJsonDay(arr);
  }
  return sortJsonPrefecture(arr);
};

const App = ({ pageId, type, closeDate, deleteDate }) => {
  console.log(pageId, type, closeDate, deleteDate);

  const [courses, setCourses] = useState([]);
  const [sortType, setSortType] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/json/course.json")
      .then(res => res.json())
      .then(res => {
        const pageData = res.filter(course => course.ページid === pageId);
        const sortedData = sortData(pageData);
        setCourses(sortedData);
      })
      .catch(e => setError(e));
  }, []);

  const onSort = (data, type) => {
    const sortedData = sortData(data, type);
    setSortType(type);
    setCourses(sortedData);
  };

  if (error) {
    return (
      <p style={{ margin: `3em`, textAlign: `center` }}>
        通信結果を取得できませんでした。
      </p>
    );
  }

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
    return <Dynamic courses={courses} />;
  }

  return <p>nothing.</p>;
};

export default App;
