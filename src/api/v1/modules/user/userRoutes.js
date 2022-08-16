import express from "express";
import * as userController from './userController.js';

const router = express.Router();

router.route('/users')
    
    .get([
        userController.readAll
    ])
    
    .post([
        userController.createOne
    ])

router.route('/users/:id')

    .get([
        userController.readOneById
    ])

    .patch([
        userController.updateOneById
    ])

    .delete([
        userController.deleteOneById
    ])
    
export default router;