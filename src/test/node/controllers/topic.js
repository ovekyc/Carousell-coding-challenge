import test from 'tape';
import httpMocks from 'node-mocks-http';
import {mainStore, top20, clearDB} from '../../../server/datastore';
import TopicController from '../../../server/controllers/topic';
import Topic from '../../../server/models/topic';

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

test('Top20 Topic', t => {
  clearDB();
  const expected = {
    max: 30,
    min: 11,
    status: 200
  };
  const mockTopic = new Topic('mock-topic');
  for (let i = 0; i < 30; i = i + 1) {
    mockTopic.upVote();
    const data = Object.assign({}, mockTopic);
    if (top20.canPush()) top20.push(data); // eslint-disable-line curly
    else if (top20.top().up < data.up) {
      top20.pop();
      top20.push(data);
    }
  }

  const req = httpMocks.createRequest({
    method: 'GET',
    url: '/top20'
  });
  const res = httpMocks.createResponse();
  TopicController.getTop20(req, res, () => {
    const data = res._getData();
    t.equal(res.statusCode, expected.status, 'should be same status');
    t.equal(data[0].up, expected.max, 'should be same max up-vote');
    t.equal(data[data.length - 1].up, expected.min, 'should be same min up-vote');
    t.end();
  });
});

test('Get Topic', t => {
  clearDB();
  const mockTopic = new Topic('mock-topic');
  mockTopic.downVote();
  const expected = {
    topic: mockTopic,
    status: 200
  };

  top20.push(mockTopic);
  mainStore[mockTopic.uid] = mockTopic;

  const req = httpMocks.createRequest({
    method: 'GET',
    url: `/topics/${mockTopic.uid}`,
    params: {
      id: mockTopic.uid
    }
  });
  const res = httpMocks.createResponse();
  TopicController.getTopic(req, res, () => {
    const data = res._getData();
    t.equal(res.statusCode, expected.status, 'should be same status');
    t.equal(data.uid, expected.topic.uid, 'should be same uid');
    t.equal(data.str, expected.topic.str, 'should be same string');
    t.equal(data.up, expected.topic.up, 'should be same up-vote');
    t.equal(data.down, expected.topic.down, 'should be same down-vote');
    t.end();
  });
});

test('Up vote Topic', t => {
  clearDB();
  const mockTopic = new Topic('mock-topic');
  const expected = {
    up: 1,
    down: 0,
    topic: mockTopic,
    status: 200
  };

  top20.push(mockTopic);
  mainStore[mockTopic.uid] = mockTopic;

  const req = httpMocks.createRequest({
    method: 'POST',
    url: `/topics/${mockTopic.uid}/up`,
    params: {
      id: mockTopic.uid
    }
  });
  const res = httpMocks.createResponse();
  TopicController.increaseUpVote(req, res, () => {
    const data = res._getData();
    t.equal(res.statusCode, expected.status, 'should be same status');
    t.equal(data.uid, expected.topic.uid, 'should be same uid');
    t.equal(data.str, expected.topic.str, 'should be same string');
    t.equal(data.up, expected.up, 'should be same up-vote');
    t.equal(data.down, expected.down, 'should be same down-vote');
    t.end();
  });
});
