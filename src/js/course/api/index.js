import axios from "axios";
import sortData from "./../helpers/sortData";

export default class Api {
  async getCourse(url, pageId, responseType = "json") {
    const result = await axios
      .get(url, {
        responseType
      })
      .then(res => {
        const { data } = res;
        const pageData = data.filter(course => course.ページid === pageId);
        const courses = sortData(pageData) || [];
        return {
          courses
        };
      })
      .catch(error => ({
        error
      }));
    return result;
  }

  async getTeacher(url, responseType = "json") {
    const result = await axios
      .get(url, {
        responseType
      })
      .then(res => {
        const { data } = res;
        return {
          teachers: data
        };
      })
      .catch(error => ({
        error
      }));
    return result;
  }

  async getLocation(url, responseType = "json") {
    const result = await axios
      .get(url, {
        responseType
      })
      .then(res => {
        const { data } = res;
        return {
          locations: data
        };
      })
      .catch(error => ({
        error
      }));
    return result;
  }
}
