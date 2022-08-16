import userRoutes from './v1/modules/user/userRoutes.js';

const router = (app) => {
    app.use(userRoutes);
    app.use((req, res, next) => {
        next();
    });
};

export default router;