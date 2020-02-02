var express = require('express');
var router = express.Router();

var products=[
  {
    id:1,
    image:'/images/advertisement-image-01.jpg',
    title:'商品1',
    subTitle:'描述1'
  },
  {
    id:2,
    image:'/images/advertisement-image-02.jpg',
    title:'商品2',
    subTitle:'描述2'
  },
  {
    id:3,
    image:'/images/advertisement-image-03.jpg',
    title:'商品3',
    subTitle:'描述3'
  },
  {
    id:4,
    image:'/images/advertisement-image-04.jpg',
    title:'商品4',
    subTitle:'描述4'
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(products));
});

router.post('/',function(req,res,next){
  products=products.concat(req.body);
  res.send(JSON.stringify(products));
})

router.put('/:id',function(req,res,next){
  for (var i=0;i<products.length;i++){
    if (products[i].id===parseInt(req.params.id)){
      products[i]=req.body;
    }
  }
  res.send(JSON.stringify(products));
})

router.delete('/:id',function(req,res,next){
  for (var i=0;i<products.length;i++){
    if (products[i].id===parseInt(req.params.id)){
      products.splice(i,1);
    }
  }
  res.send("Success");
})

module.exports = router;
