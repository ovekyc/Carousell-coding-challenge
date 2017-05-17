import logger from 'winston';

const postHeader = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

export default class APIFetcher {
  static getTop20() {
    return fetch('/api/top20', {method: 'GET'})
      .then(response => response.json())
      .catch(error => {
        logger.error(error);
        return null;
      });
  }

  static createTopic(str) {
    fetch('/api/topics', {
        method: 'POST',
        headers: postHeader,
        body: JSON.stringify({str: str})
      })
      .catch(error => {
        logger.error(error);
        return null;
      });
  }
}