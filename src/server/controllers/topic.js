import {mainStore} from '../datastore';
import Topic from '../models/topic';
import Top20Service from '../services/top20service';

export default class TopicController {
  static getTop20(req, res, cb) {
    res.send(Top20Service.getSortedList());
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
    Top20Service.update(true, newTopic);
    res.send(newTopic);
    cb();
  }

  static increaseUpVote(req, res, cb) {
    const id = req.params.id ? req.params.id : null;
    if (!id) {
      cb(new Error('No id parameter'));
      return;
    }
    const topic = mainStore[id];
    topic.up = topic.up + 1;  // There is no sync problem because of the reference
    Top20Service.update(false, topic);
    res.send(topic);
    cb();
  }

  static increaseDownVote(req, res, cb) {
    const id = req.params.id ? req.params.id : null;
    if (!id) {
      cb(new Error('No id parameter'));
      return;
    }
    mainStore[id].down = mainStore[id].down + 1;
    res.send(mainStore[id]);
    cb();
  }
}
