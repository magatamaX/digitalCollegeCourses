import axios from "axios";

export default class Api {
  static async get(url, params = {}, responseType = "json") {
    const result = await axios
      .get(url, {
        params,
        responseType
      })
      .then(res => res.data)
      .catch(error => {
        console.error(
          `${url}からデータを取得できませんでした。空配列を返します。`,
          error
        );
        return [];
      });
    return result;
  }

  static async getJSONP(url, name = "collegeData") {
    const result = await axios
      .get(url, {
        params: {
          callback: name,
          _: new Date().getTime()
        },
        headers: {
          Accept:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          "X-Requested-With": "XMLHttpRequest"
        }
      })
      .then(res => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML = res.data;

        // execute callback function
        const s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(script, s);
        return window.__COLLEGE_DATA__;
      })
      .catch(error => {
        console.error(
          `${url}からデータを取得できませんでした。空配列を返します。`,
          error
        );
        return [];
      });
    return result;
  }
}
