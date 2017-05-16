import test from 'tape';
import isuuid from 'isuuid';
import Topic from '../../../server/models/topic';

test('Normal topic test', t => {
  const topic = new Topic('this is string');
  t.equal(isuuid(topic.uid), true, 'uid should be a type of uuid4');
  t.equal(topic.up, 0, 'up-vote count should be 0');
  t.equal(topic.down, 0, 'down-vote count should be 0');
  t.end();
});
