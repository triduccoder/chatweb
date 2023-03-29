var express = require("express");
var router = express.Router();
const Contact= require("./../model/product")
const ProductService= require("./../../services/productService")
//router.use("/index", require(__dirname + "/indexcontroller"));
//router.use("/product", require(__dirname + "/productcontroller"));
//router.use("/about", require(__dirname + "/aboutcontroller"));
router.use("/contact", require(__dirname + "/contactcontroller"));
//router.use("/services", require(__dirname + "/servicescontroller"));
router.get("/", function(req,res){
    //res.json({"message": "this is index page"});
    res.render("index");
});

router.get("/chat", function(req,res){
  res.render("chat");
});

router.post('/insertDBcontact', async function (req, res) {
    var contact = new Contact();
    var get = new ProductService();
    console.log(req.body)
    contact.Name = req.body.Name;
    contact.Phone = req.body.Phone;
    contact.Email = req.body.Email;
    contact.Message = req.body.Message;
  
    const result = await get.insertContact(contact);
    var order = await get.getALlContact();
    res.render('admin', { data: order });
    //res.json({ status: true, message: "Insert Success!!" });
  });
  
  router.get('/Allcontact', async function (req, res) {
    var get = new contactService();
    var order = await get.getALlContact();
    res.render('admin', { data: order });
  });

module.exports = router;
