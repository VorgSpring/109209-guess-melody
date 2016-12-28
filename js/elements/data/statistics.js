import toCheckStatus from 'elements/checkStatus';
import 'whatwg-fetch';

const URL_STATISTICS = 'https://intensive-ecmascript-server-dxttmcdylw.now.sh/guess-melody/stats/109209';

const getStatistics = () => {
  return window.fetch(URL_STATISTICS, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).
      then(toCheckStatus).
      then((response) => response.json());
};

const setStatistics = (statistics) => {
  return window.fetch(URL_STATISTICS, {
    method: 'POST',
    body: JSON.stringify({
      'date': statistics.date,
      'time': statistics.time,
      'answers': statistics.answers
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).
      then(toCheckStatus);
};

export default {
  getStatistics,
  setStatistics
};
