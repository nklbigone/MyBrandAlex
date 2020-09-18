import blog from '../models/Blog'
import blogValidation from "../validation/blog.validation";
class blogsController{
    static async blogGetName(req , res){

        try{

            const blogs = await blog.find()
            res.json(blogs)
    
        }catch(err){
        res.send('error' +err)
        }
    }

    static async blogPostName(req, res){
        const {error} = blogValidation(req.body);
        if (error){
            res.json({
                success: 0,
                message: error.details[0].message
            })
        }
            

        const blo = new blog({
            title: req.body.title,
            blogDescription: req.body.blogDescription,
            blogPicture: req.body.blogPicture
        })
        try{
            const blog1 = await blo.save()
            res.json(blog1)
        }catch{
            res.send('Error')
        }
    }
}

export default blogsController