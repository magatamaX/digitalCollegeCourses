import axios from "axios";

export default class Api {
  static async get(url, params = {}, responseType = "json") {
    const result = await axios
      .get(url, {
        params,
        responseType
      })
      .then(res => res.data)
      .catch(error => ({
        error
      }));
    return result;
  }
}
