import express from 'express';
import TopicController from './controllers/topic';
const router = express.Router();

router.get('/top20', TopicController.getTop20);
router.get('/topics/:id', TopicController.getTopic);
router.post('/topics', TopicController.addTopic);

export default router;
