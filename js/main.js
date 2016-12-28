import Application from 'elements/engine/Application';
import toCheckStatus from 'elements/checkStatus';
import 'whatwg-fetch';

const URL_GET_QUESTIONS = 'https://intensive-ecmascript-server-nnpnvhhedl.now.sh/guess-melody/questions';

window.fetch(URL_GET_QUESTIONS).
    then(toCheckStatus).
    then((response) => response.json()).
    then((data) => {
      Application.data = data;
      Application.showWelcome();
    }).
    catch(() => {
      throw new RangeError('Error loading data');
    });
