import axios from 'axios';
export default class ApiHelper {
  /**
   * Запрос к API
   * @param url Путь запроса
   * @param parameters Object параметров
   * @param method get / post / put (lowercase)
   * @param headers Object Переопределение заголовков
   */
  static callMethod(url, parameters = {}, method = 'get', headers = {}) {
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
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
      url: url,
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
      return response;
    }).catch(error => {
      return error.response;
    });
  }
}
