import express from "express";
import 
{ 
    getNotifs, 
    createNotif, 
    updateNotif,
    getNotifsById,
    deleteNotif,
} from "../controllers/notifController.js";

const router = express.Router()

router.get('/', getNotifs)
router.get('/:id', getNotifsById)
router.post('/', createNotif)
router.patch('/:id', updateNotif)
router.delete('/:id', deleteNotif)

export default router