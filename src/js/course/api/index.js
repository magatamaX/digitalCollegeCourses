import axios from "axios-jsonp-pro";
import jsonp from "jsonp";

export default class Api {
  static async get(url, params = {}, responseType = "json") {
    const result = await axios
      .get(url, {
        params,
        responseType
      })
      .then(res => res.data)
      .catch(error => error);
    return result;
  }

  static async getJSONP(url, name = "collegeData") {
    return new Promise(function(resolve, reject) {
      jsonp(url, { name }, (error, data) => {
        if (error) {
          console.log("error!!");
          throw new Error("err");
        } else {
          console.log("datadata::", data);
          resolve(data);
        }
      });
      // $.ajax({
      //   type: 'GET',
      //   // url: '/school/common/json/courseID.json', // 繝�せ繝育畑
      //   url, // 譛ｬ逡ｪ逕ｨ
      //   dataType: 'jsonp',
      //   jsonpCallback: name
      // }).done(function(data) {
      //   resolve(data);
      // });
    })
      .then(data => data)
      .catch(error => error);
  }
}
