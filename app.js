var createError = require('http-errors');
var express = require('express');
var path = require('path');
var session = require('express-session')
const redis = require("redis");
var cookie = require('cookie');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// const redisClient = redis.createClient();
// const redisStore = require('connect-redis')(session);
// if (process.env.NODE_ENV != 'production') {
//   dotenv.load();
// }

// const stripeSecretKey = process.env.STRIPE_SECRET_KEY
// const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

// console.log(stripeSecretKey);




const app = express();

// redisClient.on('error', (err) => {
//   console.log('Redis error: ', err);
// });


//var sessionMiddleware = require('./app/middlewares/session.middleware');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false , maxAge: 24*60*60*1000 }
  
}))
//, ttl: 86400  // store: new redisStore({ host: 'localhost', port: 6379, client: redisClient , ttl }),
//Cấu hình kết nối với angular
// var CORSMiddleware = require('./app/middlewares/CORS.middleware');

//var csurf = require('csurf');




// app.use(CORSMiddleware);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser('adasdasdas'));
//app.use(sessionMiddleware);



//app.use(csurf);

// Mặc định trỏ tới đường dẫn views khi gọi 'views'
//app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
//app.set('views', './views');

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'views')));
//app.use(sessionMiddleware);

const pathConfig            = require('./path');
global.__base               = __dirname + '/';
global.__path_app           = __base + pathConfig.folder_app + '/';

global.__path_schemas       = __path_app + pathConfig.folder_schemas + '/';
global.__path_models        = __path_app + pathConfig.folder_models + '/';
global.__path_routers       = __path_app + pathConfig.folder_routers + '/';
global.__path_configs       = __path_app + pathConfig.folder_configs + '/';



const systemConfig    = require(__path_configs + 'system');


app.locals.systemConfig = systemConfig;

app.use('/api',require(__path_routers)); 


//catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
