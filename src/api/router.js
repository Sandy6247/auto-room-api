import userRoutes from './v1/modules/user/userRoutes.js';
import roomRoutes from './v1/modules/room/roomRoutes.js';
import apartmentRoutes from './v1/modules/apartment/apartmentRoutes.js';

const router = (app) => {
    app.use(userRoutes, roomRoutes, apartmentRoutes);
    app.use((req, res, next) => {
        next();
    });
};

export default router;