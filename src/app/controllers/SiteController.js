const Course=require('../Models/Course')
const {multipleMongooseToObj}=require("../../util/mongoose")
class SiteController {
    // [Get =&gt; news]
    index(req, res,next) {        
        // res.render('home'); 
       Course.find({})
            .then(courses=>{
                courses=multipleMongooseToObj(courses)
                res.render("home",{
                    courses
            })})
            .catch(next)
             
    }
    search(req,res){
        res.render('search');
    }
}
module.exports = new SiteController;