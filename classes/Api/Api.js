import axios from 'axios';
import Helper from "../Helper";
export default class Api {
  /**
   * Запрос к API
   * @param path Путь запроса
   * @param parameters Object параметров
   * @param method get / post / put (lowercase)
   * @param headers Object Переопределение заголовков
   */
  static callMethod(path, parameters = {}, method = 'get', headers = {}) {
    const language = LOCALE.substring(0,2);
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Language' : language,
      ...headers,
    };

    if (typeof parameters.access_token !== 'undefined') {
      headers['Authorization'] = 'Bearer ' + parameters.access_token;
      delete parameters.access_token;
    }

    if (typeof parameters.refresh_token !== 'undefined') {
      headers['Authorization'] = 'Bearer ' + parameters.refresh_token;
      delete parameters.refresh_token;
    }

    let request = {
      method: method,
      url: 'https://api.brskl.io/customer-api/v1/' + path,
      headers: headers,
      responseType: 'json',
      transformRequest: [
        function(data, headers) {
          if (headers['Content-Type'] !==
              'application/x-www-form-urlencoded') {
            return data;
          }

          const serializedData = [];

          for (let k in data) {
            if (data.hasOwnProperty(k)) {
              serializedData.push(k + '=' + encodeURIComponent(data[k]));
            }
          }

          return serializedData.join('&');
        },
      ],
    };

    if (typeof parameters === 'object') {
      if (method === 'get') {
        request['params'] = parameters;
      } else {
        request['data'] = parameters;
      }
    }

    return axios(request).then((response) => {
      // goLog(response);
      return response;
    }).catch(error => {
      return error.response;
    });
  }
}

const goLog = (res) => Helper.saveApiLogs(res);
