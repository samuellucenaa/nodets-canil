import express from 'express';
import * as PageController from '../controllers/pageController.ts';
import * as SearchController from '../controllers/searchController.ts';

const router = express.Router()

router.get('/', PageController.home)
router.get('/cachorros', PageController.cachorros)
router.get('/gatos', PageController.gatos)
router.get('/peixes', PageController.peixes)
router.get('/search', SearchController.search)

export default router