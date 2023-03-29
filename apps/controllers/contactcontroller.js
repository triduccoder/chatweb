var express = require("express");
var router = express.Router();
var app = express();
router.get("/", function(req,res){
    // res.json({"message": "this is product"});
    res.render("contact");
});
module.exports = router;
