import React, { useEffect, useState } from "react";
import Static1 from "./Static1";
import Static2 from "./Static2";
import Dynamic from "./Dynamic";
import sortData from "./../helpers/sortData";
import axios from "axios";

const fetchCourseData = async (url, pageId) => {
  const result = await axios.get(url)
    .then(res => {
      const {data} = res;
      const pageData = data.filter(course => course.ページid === pageId);
      const courses = sortData(pageData);
      return {
        courses
      }
    })
    .catch( error => ({
      error
    }));
    console.log(result)
    return result;
};

const App = ({ pageId, type, closeDate, deleteDate }) => {

  const [courses, setCourses] = useState([]);
  const [sortType, setSortType] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { courses, error } = await fetchCourseData('/json/course.json', pageId);
      if ( error ) {
        setError(error)
      }

      setCourses(courses);
    }
    fetchData();
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
