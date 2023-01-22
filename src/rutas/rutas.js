import { Router } from 'express';
import {
    getUser,
    getUsers,
    updatePassUser,
    getPlaces,
    getPlace,
    getPermission,
    getPermissionCount,
} from '../solicitudes/solicitudes.js';

const router = Router()

router.get('/users', getUsers)  //Lista de Todos los Usuarios

router.get('/users/:dni', getUser)  //Datos de un solo Usuario

router.put('/users/:dni', updatePassUser)   //Actualizar Contraseña Usuario

router.get('/places', getPlaces)     //Datos de un Espacio con su Codigo

router.get('/places/:codigo', getPlace)     //Datos de un Espacio con su Codigo

router.get('/permissions/:dni', getPermission)  //Permisos de un solo Usuario por su DNI

router.get('/permissions/count/:dni', getPermissionCount)   //Cantidad de Espacios donde el Usuario tiene Permiso

export default router