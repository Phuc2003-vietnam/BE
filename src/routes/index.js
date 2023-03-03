const newsRouter=require('./news')
const siteRouter=require('./site')
const coursesRouter=require('./shoes')
const meRouter=require('./me')

function route(app){
    // app.use('/news',newsRouter)
    app.use('/shoes',coursesRouter)
    app.use('/me',meRouter)
    app.use('/',siteRouter)
    
    
}

module.exports  = route;
