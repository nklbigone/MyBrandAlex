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

    static async blogGetOneName(req , res){

        try{

            const blogs = await blog.findById(req.params.id)
            res.json(blogs)
    
        }catch(err){
        res.send('error' +err)
        }
    }


    static async updateBlog(req, res) {
        try {

            const blogs = await blog.findById(req.params.id)
            if (!blogs) return (res, 404, "doesn't find one blog")

                blogs.title = req.body.title
         
                blogs.blogDescription = req.body.blogDescription
            
                blogs.blogPicture = req.body.blogPicture
                const blogup = await blogs.save()
                res.json(blogup)

        } catch (e) {
            return(res, 404, " fails")
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

    static async deleteBlog(req, res) {
        try {

            const blogs = await blog.findById(req.params.id)
            if (!blogs) return (res, 404, "doesn't find one blog")
                const blogup = await blogs.deleteOne()
                res.json(blogup)

        } catch (e) {
            return(res, 404, " fails")
        }
    }
    
}

export default blogsController