import express from 'express';
import TopicController from './controllers/topic';
const router = express.Router();

router.get('/top20', TopicController.getTop20);
router.get('/topics/:id', TopicController.getTopic);
router.post('/topics', TopicController.addTopic);
router.post('/topics/:id/up', TopicController.increaseUpVote);
router.post('/topics/:id/down', TopicController.increaseDownVote);

export default router;
