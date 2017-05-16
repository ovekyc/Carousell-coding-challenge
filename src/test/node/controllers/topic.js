import test from 'tape';
import httpMocks from 'node-mocks-http';
import {mainStore, top20, clearDB} from '../../../server/datastore';
import TopicController from '../../../server/controllers/topic';

test('Add Topic', t => {
  const expected = {
    beforeLength: 0,
    status: 200,
    str: 'hello',
    up: 0,
    down: 0
  };
  clearDB();
  t.equal(Object.keys(mainStore).length, expected.beforeLength, 'should be same length');
  t.equal(top20.size, expected.beforeLength, 'should be same size');

  const req = httpMocks.createRequest({
    method: 'POST',
    url: '/topics',
    body: {
      str: expected.str
    }
  });
  const res = httpMocks.createResponse();
  TopicController.addTopic(req, res, () => {
    const data = res._getData();
    t.equal(res.statusCode, expected.status, 'should be same status');
    t.equal(data.str, expected.str, 'should be same string');
    t.equal(data.up, expected.up, 'should be same count of up-vote');
    t.equal(data.down, expected.down, 'should be same count of down-vote');
    t.end();
  });
});
