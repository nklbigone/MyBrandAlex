import joi from 'joi'

const articleValidation =  (body) => {
    const articleSchema = joi.object({
        title: joi.string().required().min(3).max(20),
        description: joi.string().required().min(10),
        picture: joi.string().required().min(10),
    })
    return articleSchema.validate(body)
}
export default articleValidation