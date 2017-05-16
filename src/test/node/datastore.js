import test from 'tape';
import {PriorityQueue} from '../../server/datastore';

test('PQ insertion test', t => {
  const expected = {
    data: [10, 1, 100, 1],
    length: 4
  };
  const pq = new PriorityQueue();
  expected.data.map((value => {
    pq.insert(value);
  }));

  t.equal(pq.store[0] <= pq.store[1] && pq.store[0] <= pq.store[2],
    true, 'parent value should small or equal to children');
  t.equal(pq.store.length, expected.length,
    true, 'parent value should small or equal to children');
  t.end();
});
