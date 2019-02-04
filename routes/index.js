import express from 'express';
import TodoController from '../controllers/todos';
import ScrapeController from '../controllers/scrapes';

const router = express.Router();

router.get('/api/v1/todos', TodoController.getAllTodos);
router.get('/api/v1/todos/:id', TodoController.getTodo);
router.post('/api/v1/todos', TodoController.createTodo);
router.put('/api/v1/todos/:id', TodoController.updateTodo);
router.delete('/api/v1/todos/:id', TodoController.deleteTodo);

// Rutas que generan scrapes (definidas en el ScrapeController)
router.get('/api/v1/scrapeven', ScrapeController.scrapeVen);
router.get('/api/v1/scrapepen', ScrapeController.scrapePen);
router.get('/api/v1/scrapecol', ScrapeController.scrapeCol);

export default router;
