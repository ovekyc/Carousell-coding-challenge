export default class TopicController {
  static getTop20(req, res, cb) {
    res.send('top20');
    cb();
  }

  static getTopic(req, res, cb) {
    res.send('get t');
    cb();
  }

  static addTopic(req, res, cb) {
    res.send('post t');
    cb();
  }
}