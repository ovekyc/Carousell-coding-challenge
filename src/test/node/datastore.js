import test from 'tape';
import {PriorityQueue} from '../../server/datastore';

test('PQ push test', t => {
  const expected = {
    data: [10, 1, 100, 1],
    length: 4
  };
  const pq = new PriorityQueue();
  expected.data.map((value => {
    pq.push(value);
  }));

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
