import RUText from './RU';
import ENText from './EN';

const language = LOCALE.substring(0,2);
let Texts = {};
switch (language) {
  case 'ru':
    Texts = RUText;
    break;
  case 'en':
    Texts = ENText;
    break;
  default:
    Texts = ENText;
    break;
}
export default {...ENText, ...Texts};
