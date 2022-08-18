import express from "express";
import * as apartmentController from './apartmentController.js';

const router = express.Router();

router.route('/apartments')
    .get([
        apartmentController.readAll
    ])

    .post([
        apartmentController.createOne
    ])

router.route('/apartments/:id')
    .get([
        apartmentController.readOneById
    ])

    .patch([
        apartmentController.updateOneById
    ])

    .delete([
        apartmentController.deleteOneById
    ])

export default router;