import express from "express"
import blogController from '../controller/blogController'
const router = express.Router()
router.get('/', blogController.blogGetName )
router.post('/', blogController.blogPostName )
export default router;