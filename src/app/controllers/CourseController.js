const Course=require('../Models/Course')
const {mongooseToObj}=require("../../util/mongoose")
class CourseController {
    // [Get] /course/:slug
    show(req, res,next) {   
        Course.findOne({slug : req.params.slug})
            .then(course=>{
                res.render('courses/show',{course: mongooseToObj(course)})
            })
            .catch(next)
    
    }
    // [GET] /course/create
    create(req, res,next) {   
        res.render('courses/create')
        }
    // [POST] /course/store
    store(req, res,next) {   
        const formData=req.body
        const course=new Course(formData)
        course.save()
            .then(()=> {console.log('save successfully')
            res.redirect('/') 
            })
            .catch(next)
        }
    edit(req,res,next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit',{
                course:mongooseToObj(course)
            }))
            .catch(next)
    }
    // [PUT] courses/:id
    update(req,res,next){
        Course.updateOne({_id: req.params.id},req.body)
            .then(()=> res.redirect('/me/stored/courses'))
            .catch(next)
    }
}
module.exports = new CourseController();