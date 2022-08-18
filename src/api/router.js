import userRoutes from './v1/modules/user/userRoutes.js';
import roomRoutes from './v1/modules/room/roomRoutes.js';

const router = (app) => {
    app.use(userRoutes, roomRoutes);
    app.use((req, res, next) => {
        next();
    });
};

export default router;