import {top20, mainStore} from '../datastore';
import Topic from '../models/topic';

export default class TopicController {
  static getTop20(req, res, cb) {
    const topics = Object.assign([], top20.store);
    topics.sort((topicA, topicB) => topicB.up- topicA.up);
    res.send(topics);
    cb();
  }

  static getTopic(req, res, cb) {
    const id = req.params.id ? req.params.id : null;
    if (!id) {
      cb(new Error('No id parameter'));
      return;
    }
    const topic = mainStore[id] ? mainStore[id] : null;
    res.send(topic);
    cb();
  }

  static addTopic(req, res, cb) {
    if (!req.body.str) {
      cb(new Error('No string in request body'));
      return;
    }
    const str = req.body.str;
    const newTopic = new Topic(str);   // Crate new Topic

    mainStore[newTopic.uid] = newTopic; // Add to main data storage
    //eslint-disable-next-line curly
    if (top20.canPush()) top20.push(newTopic);  // Add to top 20 if top 20 is not full
    res.send(newTopic);
    cb();
  }
}
