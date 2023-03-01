const Course=require('../Models/Course')
const {mongooseToObj}=require("../../util/mongoose")
const {multipleMongooseToObj}=require("../../util/mongoose")
class MeController {
    // [Get] /me/stored/courses
    storedCourses(req,res){
        Course.find({})
            .then(courses=>{
                res.render('me/stored-courses',{
                    courses: multipleMongooseToObj(courses)
                })
            })
    }
 
}
module.exports = new MeController();