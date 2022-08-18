import express from "express";
import * as roomController from './roomController.js';

const router = express.Router();

router.route('/rooms')
    .get([
        roomController.readAll
    ])
    
    .post([
        roomController.createOne
    ])

router.route('/rooms/:id')
    .get([
        roomController.readOneById
    ])

    .patch([
        roomController.updateOneById
    ])

    .delete([
        roomController.deleteOneById
    ])

export default router;