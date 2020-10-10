import Api from './Api';
import Auth from './Auth';

export default class Config {

  /**
   * Магазины
   * @param parameters
   * @returns {Promise<*>}
   */
  static getConfig(parameters = {}) {
    return Api.callMethod('common/config/get-list/', parameters, 'get');
  }
}
