import  express  from "express";
import { addUsers,getAllUsers,deleteUsers,getSingleUser,updateUser } from "../controller/user-controller.js";


const router = express.Router()

router.post('/add',addUsers)
router.get("/all",getAllUsers)
router.delete("/:id",deleteUsers)
router.get("/edit/:id",getSingleUser)
router.put("/edit/:id",updateUser)

export default router
