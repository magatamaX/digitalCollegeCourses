import React, { useEffect, useState } from "react";
import CourseIndex from "./../components/CourseIndex";
import generateCourses from "./../helpers/generateCourses";
import Api from "./../api/";

const api = new Api();

const List = ({ pageIds, type }) => {

  const [courses, setCourses] = useState([]);
  const [sortType, setSortType] = useState("prefecture");
  const [loading, setLoading] = useState(false);

  let ids = [];
  ids.push(pageIds.split(','));

  console.log(ids);

  useEffect(() => {
     function fetchData() {
      setLoading(true);

      const courses = ids.map(async (id) => {

        const { courses } = await api.getCourse("https://www.fotopus9m.com/api/college/search", id);
        // helper::開催情報を配列化します。
        const generatedCourses = await generateCourses(courses);

        return generateCourses;

      })

      console.log(courses);



      await setCourses(courses);


      await setLoading(false);
    }
    fetchData();
  }, []);


  return <CourseIndex courses={courses} />;
};

export default List;
