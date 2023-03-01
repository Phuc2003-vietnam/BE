class NewsController {
    // [Get =&gt; news]
    index(req, res) {        
        res.render('news');
    }
    show(req,res){
        res.render('picture');

    }
}
module.exports = new NewsController;