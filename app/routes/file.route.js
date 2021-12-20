// const express = require('express');
// const multer = require('multer');
// var router = express.Router();

// var storage = multer.diskStorage({
//     destination: function(req,file,cb){
//         cb(null,'./upload')
//     },
//     filename: function(req,file,cb){       
//         //Kiểm tra xem đúng định dạng hình hay không
//         if (!/\S+\.(jpg|bmp|gif|png|jpeg)/gi.test(file.originalname)) {
//             cb(Error('Invalid image file name'), false)
//         }        
//         cb(null,file.originalname);
//     }
// })
// const upload = multer({storage:storage}).single('file')

// router.get('/',function(req,res){
//     res.render('items/demoUploadFile')
// })

// router.post('/upload',function(req,res,next){
//     upload(req,res,err =>{
//         if(err){
//             res.send('File sai định dạng hình')
//             return;
//         }    
//         console.log(req.file)   
//         req.link =  req.file.path; 
//         console.log(req.link);
//         res.send('Upload file thanh cong')
//         // res.send('Upload file thanh cong')  
//     })
//     // console.log(req.file)
//     // req.link =  req.file.path;
//     // console.log(req.link);
    
//     // next()  
// })



// module.exports = router;