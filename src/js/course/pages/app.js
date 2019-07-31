import React, { useEffect, useState } from "react";
import Static1 from "./Static1";
import Static2 from "./Static2";
import Dynamic from "./Dynamic";
import sortJsonPrefecture from "./../helpers/sortJsonPrefecture";

const App = ({ pageId, type, closeDate, deleteDate }) => {
  console.log(pageId, type, closeDate, deleteDate);

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/json/course.json")
      .then(res => res.json())
      .then(async res => {
        await console.log(res);

        const pageData = await res.filter(course => course.ページid === pageId);
        await console.log("pageData", pageData);

        const sortedData = await sortJsonPrefecture(pageData);

        await console.log("sortedData", sortedData);

        await setCourses(sortedData);
      })
      .catch(e => console.log(e));
  }, []);

  if (type === "static1") {
    return <Static1 courses={courses} />;
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
