
import express from "express"
import QueryController from "../controller/queryController";

const router = express.Router()
router.get("/",QueryController.queryGetName)
 router.post("/", QueryController.queryPostName)
export default router