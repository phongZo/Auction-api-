const session = require('express-session');
var Auction = require('../models/auction.model');
var Bannerposit = require('../models/bannerposit.model');

exports.get_all = function (req, res) {
    Auction.findAll(function (respnse) {
        res.send({
            result: respnse
        });
    })
}


//Gửi vào giá đấu giá, id của sản phẩm => check để đấu giá
exports.makeAuction = function (req, res) {
    var price_bid = req.body.price_bid;
    var bannerpositid = req.body.bannerpositid;
    Bannerposit.findOneById(bannerpositid, function (respnse) {
        if (respnse != null) {
            Auction.get_rank(respnse.id, function (result) {
                    var count = 0;
                    if (result != null && result.length != 0) {
                        result.forEach(element => {
                            if (element.userid == req.session.user.id) {
                                count = 1;
                                if (parseFloat(price_bid) <= parseFloat(result[0].price_bid + respnse.price_step)) {
                                    res.send('Số tiền cần lớn hơn: ' + (result[0].price_bid + respnse.price_step) + '$');
                                } else {
                                    var data = {
                                        userid: req.session.user.id,
                                        bannerpositid: bannerpositid,
                                        price_bid: price_bid
                                    }
                                    Auction.updateUserBid(data, function (resultInsert) {
                                        if (resultInsert != null) {
                                            res.send('Đấu giá thành công');
                                        } else {
                                            res.send('Đấu giá không thành công');
                                        }
                                    })
                                }
                                return;
                            }
                            else{
                                if (parseFloat(price_bid) <= parseFloat(respnse.min_price + respnse.price_step)) {
                                    res.send('Số tiền cần lớn hơn: ' + (respnse.min_price + respnse.price_step) + '$');
                                    return;
                                }
                                else{
                                    var data2 = {
                                        userid: req.session.user.id,
                                        bannerpositid: bannerpositid,
                                        price_bid: price_bid
                                    }
                                    Auction.insert(data2, function (resultInsert) {
                                        if (resultInsert != null) {
                                            res.send('Đấu giá thành công')
                                        } else {
                                            res.send('Đấu giá không thành công');
                                        }
                                        
                                    })
                                }                               
                                return;
                            }
                        })
                    }
                    else{
                        if (parseFloat(price_bid) <= parseFloat(respnse.min_price + respnse.price_step)) {
                            res.send('Số tiền cần lớn hơn: ' + (respnse.min_price + respnse.price_step) + '$');
                        }
                        else{
                            var data2 = {
                                userid: req.session.user.id,
                                bannerpositid: bannerpositid,
                                price_bid: price_bid
                            }
                            Auction.insert(data2, function (resultInsert) {
                                if (resultInsert != null) {
                                    res.send('Đấu giá thành công')
                                } else {
                                    res.send('Đấu giá không thành công');
                                }
                            })
                        }                       
                        return;
                    }
                }

            )

        } else {
            res.send('Không tìm thấy product');
            return;
        }
    })
}



// else {
//     if (parseFloat(price_bid) <= parseFloat(respnse.min_price + respnse.price_step)) {
//         res.send('Số tiền cần lớn hơn: ' + (respnse.min_price + respnse.price_step) + '$');
//     } else {
//         var data = {
//             userid: req.session.user.id,
//             bannerpositid: bannerpositid,
//             price_bid: price_bid
//         }
//         Auction.insert(data, function (resultInsert) {
//             if (resultInsert != null) {
//                 res.send('Đấu giá thành công')
//             } else {
//                 res.send('Đấu giá không thành công');
//             }
//         })
//     }
//     return;
// }