const multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./upload')
    },
    filename: function(req,file,cb){       
        //Kiểm tra xem đúng định dạng hình hay không
        if (!/\S+\.(jpg|bmp|gif|png|jpeg)/gi.test(file.originalname)) {
            cb(Error('Invalid image file name'), false)
        }        
        cb(null,file.originalname);
    }
})
const upload = multer({storage:storage}).single('file')


module.exports.upFile = function(req,res,next){
    upload(req,res,err =>{
        if(err){
            res.send('File sai định dạng hình')
            return;
        }        
        console.log(req.body.file)   
        req.link =  req.body.file.path; 
        console.log(req.link);
        next();
        // res.send('Upload file thanh cong')  
    })  
};