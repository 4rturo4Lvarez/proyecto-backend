import { Router } from 'express';
import {
    getUser,
    getUsers,
    updatePassUser,
    getPlace,
    getPermission,
    getPermissionCount,
} from '../solicitudes/solicitudes.js';

const router = Router()

router.get('/users', getUsers)

router.get('/users/:dni', getUser)

router.put('/users/:dni', updatePassUser)

router.get('/places/:codigo', getPlace)

router.get('/permissions/:dni', getPermission)

router.get('/permissions/count/:dni', getPermissionCount)

export default router