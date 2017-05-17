import logger from 'winston';

const postHeader = {
  'Accept': 'application/json', // eslint-disable-line quote-props
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
    return fetch('/api/topics', {
      method: 'POST',
      headers: postHeader,
      body: JSON.stringify({str: str})
    })
      .then(response => response.json())
      .catch(error => {
        logger.error(error);
        return null;
      });
  }

  static getTopic(uid) {
    return fetch(`/api/topics/${uid}`, {method: 'GET'})
      .then(response => response.json())
      .catch(error => {
        logger.error(error);
        return null;
      });
  }

  static increateUpVoteTopic(uid) {
    return fetch(`/api/topics/${uid}/up`, {method: 'POST'})
      .then(response => response.json())
      .catch(error => {
        logger.error(error);
        return null;
      });
  }

  static increateDownVoteTopic(uid) {
    return fetch(`/api/topics/${uid}/down`, {method: 'POST'})
      .then(response => response.json())
      .catch(error => {
        logger.error(error);
        return null;
      });
  }
}
