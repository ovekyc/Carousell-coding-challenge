import {top20} from '../datastore';

export default class Top20Service {
  static update(created, topic) {
    /* eslint-disable curly */
    if (created && top20.canPush()) top20.push(topic);
    else if (created && !top20.canPush()) return; // up vote is always 0 when it was just created
    else if (!created && top20.canPush()) return; // Just updated up vote
    /* eslint-enable curly */
    else {
      // not a new one and top20 is full.
      if (top20.top().up < topic.up && !top20.store.includes(topic)) {
        top20.pop();
        top20.push(topic);
      }
    }
  }

  static getSortedList() {
    const topics = Object.assign([], top20.store);
    return topics.sort((topicA, topicB) => topicB.up - topicA.up);
  }
}
