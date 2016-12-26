import Application from 'elements/engine/Application';
import 'whatwg-fetch';


const status = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

window.fetch('https://intensive-ecmascript-server-nnpnvhhedl.now.sh/guess-melody/questions').
    then(status).
    then((response) => response.json()).
    then((data) => {
      Application.data = data;
      Application.showWelcome();
    }).
    catch(() => {
      throw new RangeError('Error loading data');
    });
