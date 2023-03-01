const express = require("express");
const router = express.Router();
const newsController = require("../app/controllers/NewsController");

router.use("/not", newsController.index); //show news
router.post('/post',(req,res)=>{
    res.send(req.body)
})
router.use("/:slug", newsController.show); //show picture
router.use("/", newsController.index);
module.exports = router;
