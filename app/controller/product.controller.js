var BannerPosit = require('../models/bannerposit.model')
var Auction = require('../models/auction.model')
var User = require('../models/user.model')
var Web = require('../models/web.model')
var CartController = require('../controller/cart.controller');

exports.findAllBySearchString = function(req,res){
    BannerPosit.findAllByString(req.body.searchString, function (respnse){
        if(respnse != null & respnse.length != 0){
            var ArrayList = new Array();
            var count = 0;
            respnse.forEach(element => {    
                Web.findOneById(element.web_id,function(result){
                    if(result!=null){
                        ArrayList.push(result);
                    }
                    count++;
                    if(count == respnse.length){
                        res.send({
                            BannerPosit: respnse,
                            WebInfo: ArrayList
                        });
                        return;
                    }
                })
            });         
        }
        else
            res.send('Khong tim thay ket qua');
    });
}

exports.findAllByName = function(req,res){
    BannerPosit.findAllByName(req.body.name, function (respnse){
        if(respnse != null || respnse.length != 0){
            var ArrayList = new Array();
            var count = 0;
            respnse.forEach(element => {    
                Web.findOneById(element.web_id,function(result){
                    if(result!=null){
                        ArrayList.push(result);
                    }
                    count++;
                    if(count == respnse.length){
                        res.send({
                            BannerPosit: respnse,
                            WebInfo: ArrayList
                        });
                        return;
                    }
                })
            });         
        }
        else
            res.send('Khong tim thay ket qua');
    });
}



exports.get_one_by_id = function (req, res) {
    BannerPosit.findOneById(req.params.id, function (respnse) {
        if (respnse != null) {
            //res.render(__dirname.replace('app\\controller','')+'views/items/product',{result:respnse});
            Auction.get_rank(req.params.id, function (result) {
                if (result == null) {
                    res.send({
                        BannerPosit: respnse,
                        rank: "Không có ai đấu giá sản phẩm này"
                    });
                } else {
                    var ArrayList = new Array();
                    var count = 0;
                    result.forEach(element => {
                        User.findOneById(element.userid,function(userInfo){
                            if(userInfo != null)
                                ArrayList.push(userInfo);                               
                            count++;
                            if(count == result.length){
                                res.send({
                                    BannerPosit: respnse,
                                    rank: result,
                                    UserInfo: ArrayList
                                });
                                return;
                            }
                        })
                    });
                }
            })
        } else res.send(respnse);
    })
}

//Tạo mới một BannerPosit => timeLive sẽ mặc định set null
exports.create = function(req,res){
    var data = req.body;
    //Check xem đã tồn tại BannerPosit chưa (ở đây xét trùng tên và web_id)
    BannerPosit.checkExisted(data.name,data.web_id,function(respnse){
        // Nếu chưa có thì thêm vào được
        if(respnse == null){
            BannerPosit.insert(data,function(respnse){        
                res.send('Đã thêm thành công BannerPosit có thông tin : '+ respnse);
            })
        }
        //Nếu có thì không thực thi 
        else res.send('Đã tồn tại BannerPosit này');
    })
    
} 

exports.get_all = function(req,res){
    BannerPosit.findAll(function(respnse){     
        if(respnse != null | respnse.length != 0){
            var ArrayList = new Array();
            var count = 0;
            respnse.forEach(element => {    
                Web.findOneById(element.web_id,function(result){
                    if(result!=null){
                        ArrayList.push(result);
                    }
                    count++;
                    if(count == respnse.length){
                        res.send({
                            BannerPosit: respnse,
                            WebInfo: ArrayList
                        });
                        return;
                    }
                })
            });         
        }
        else res.send("ko có dữ liệu BannerPosit");
    })
} 


// Thay đổi thông tin của sản phẩm (nếu cần) => truyền vào tất cả data muốn thay đổi
exports.changeInfo = function(req,res){
    var data = req.body;
    BannerPosit.update(data,function(respnse){
        res.send(respnse);
    })
}

//Gửi đi thời gian đấu giá, thời gian kết thúc đấu giá ,id của sản phẩm => đưa sản phẩm ra đấu giá => sau thời gian timeLive (thời gian kết thúc trừ thời gian đấu giá) 
//sẽ đưa sản phẩm vào cart của người rank 1 đồng thời set trạng thái đấu giá về 0 (ko đấu giá)
exports.moveBannerPositToAuction = function(req,res){
    var data = req.body;
    BannerPosit.findOneById(data.id,function(FindResult){
        if(FindResult != null){
            
            // if(data.timeLive == null ) {
            //     res.send('Thời gian không hợp lệ');
            // }
            FindResult.auction_status = 1;
            FindResult.price_step = parseFloat(data.price_step);

            d=new Date(data.auction_end_date)
            e=new Date(data.auctionTime)
            var timeLive = (d.getTime() - e.getTime());
            if(timeLive<=0){
                res.send('Thời gian bị sai !');
                return;
            }
            else{
                FindResult.timeLive = (timeLive/1000)/3600/24;
                FindResult.min_price = data.min_price;
                FindResult.last_auction_date = data.auctionTime;
                FindResult.auction_date = (data.auctionTime);
                FindResult.auction_end_date = data.auction_end_date;
                console.log(FindResult.auction_end_date);
                console.log(FindResult);
                BannerPosit.update(FindResult,function(respnse){
                    if(respnse != null){
                        //Sau thời gian timeLive sẽ thêm sản phẩm vào người có rank cao nhất
                        var myVar = setInterval(function(){
                            CartController.add(FindResult.id)
                            //Sau khi add vào giỏ hàng người rank cao nhất => set lại auction_status = 0 để ko hiện đấu giá nữa
                            BannerPosit.findOneById(FindResult.id,function(result){
                                result.auction_status = 0
                                result.timeLive = 0;
                                setTimeout(() => {clearInterval(myVar);BannerPosit.update(result,function(updateStatus){
                                    console.log(updateStatus);
                                })}, 0); 
                            })                        
                        },timeLive);
                        //Sau khi thay đổi trạng thái đấu giá thì trả về dòng msg nhằm kết thúc request
                        // => có thể đưa các sản phẩm khác lên đấu giá 
                        res.send('Đã đưa sản phẩm lên đấu giá')
                    }
                    else
                        res.send("Update status khong thanh cong");
                })
            }            
        }
        else res.send('Lỗi update BannerPosit')
    })
    
}

exports.remove = function(req,res){
    Auction.findOneByPositId(req.params.id,function(respnse){
        if(respnse != null){
            Auction.delete(respnse.id,function(data){
                    console.log(data);
            });
        }
        BannerPosit.delete(req.params.id,function(respnse){
            res.send({result:respnse});
        })
    }); 
}
