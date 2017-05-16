import test from 'tape';
import {TopicPQ, PriorityQueue} from '../../server/datastore';
import Topic from '../../server/models/topic';

test('PQ push test', t => {
  const expected = {
    data: [10, 1, 100, 1],
    length: 4
  };
  const pq = new PriorityQueue();
  expected.data.map((value => pq.push(value)));

  t.equal(pq.store[0] <= pq.store[1] && pq.store[0] <= pq.store[2],
    true, 'parent value should small or equal to children');
  t.equal(pq.store.length, expected.length,
    true, 'parent value should small or equal to children');
  t.end();
});

test('PQ top test', t => {
  const expected = {
    trolling: null,
    data: [5, 3, 2, 1, 4],
    normal: 1
  };
  const pq = new PriorityQueue();
  t.equal(pq.top(), expected.trolling, 'top value should be null');

  expected.data.map((value => pq.push(value)));
  t.equal(pq.top(), expected.normal, 'top value should be same with normal expected value');
  t.end();
});

test('PQ pop test', t => {
  const expected = {
    data: [5, 3, 2, 1, 4],
    firstPop: 2,
    secondPop: 3
  };
  const pq = new PriorityQueue();
  expected.data.map((value => pq.push(value)));
  pq.pop();
  t.equal(pq.top(), expected.firstPop, 'should be same value with firstPop');
  pq.pop();
  t.equal(pq.top(), expected.secondPop, 'should be same value with secondPop');
  t.end();
});

test('PQ empty test', t => {
  const pq = new PriorityQueue();
  t.equal(pq.empty(), true, 'should be empty');
  pq.push(1);
  t.equal(pq.empty(), false, 'should not be empty');
  t.end();
});

test('TopicPQ test', t => {
  const mockThreeTopic = new Topic('3');
  mockThreeTopic.upVote(); mockThreeTopic.upVote(); mockThreeTopic.upVote();
  const mockTwoTopic = new Topic('2');
  mockTwoTopic.upVote(); mockTwoTopic.upVote();
  const mockOneTopic = new Topic('1');
  mockOneTopic.upVote();
  const expected = {
    data: [mockTwoTopic, mockOneTopic, mockThreeTopic],
    result: mockOneTopic
  };
  const pq = new TopicPQ();
  expected.data.map((value => pq.push(value)));

  t.equal(pq.top().uid, expected.result.uid, 'should be same uid');
  t.equal(pq.top().str, expected.result.str, 'should be same string');
  t.equal(pq.top().up, expected.result.up, 'should be same count of up-vote');
  t.equal(pq.top().down, expected.result.down, 'should be same count of down-vote');
  t.end();
});

test('TopicPQ test', t => {
  const mockTopic = new Topic('mock');
  const pq = new TopicPQ();
  t.equal(pq.canPush(), true, 'can push');
  for (let i = 0; i < 19; i = i + 1) {
    pq.push(mockTopic);
    t.equal(pq.canPush(), true, 'can push');
  }
  pq.push(mockTopic);
  t.equal(pq.canPush(), false, 'cannot push');
  t.end();
});
