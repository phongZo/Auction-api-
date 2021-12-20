var authMiddleware = require('../middlewares/auth.middleware');

module.exports.checkUser = function(req,res,next){
    
    if (req.session.user == null){
        console.log('Chưa đăng nhập');
        authMiddleware.requireAuth(req,res);
        return;
    }
    next();
}