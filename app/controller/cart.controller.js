var Cart = require('../models/cart.model')
var Auction = require('../models/auction.model')
var Web = require('../models/web.model')
var User = require('../models/user.model')
const BannerPosit = require('../models/bannerposit.model')



exports.add = function (id) {
    Auction.get_rank(id, function (result) {
        if (result != null && result.length != 0) {
            Cart.insetWithId(id, result[0].userid, result[0].price_bid, function (data) {
                console.log(data);
                //res.send({result:data});
            })
        } else console.log('ko co ai dau gia');
    })

}



exports.getOneByUserId = function (req, res) {
    Cart.findOneByUserId(req.session.user.id, function (respnse) {
        if (respnse == null || respnse.length == 0) {
            res.send(null);
        } else {
            var ArrayList = new Array();
            var count = 0;
            respnse.forEach(element => {
                BannerPosit.findOneById(element.bannerposit_id, function (result) {
                    if (result != null) {
                        Web.findOneById(result.web_id, function (resultData) {
                            if (resultData != null) {
                                var webName = resultData.name;
                                var ProductName = result.name;
                                var total = element.totalprice;
                                var ProductId = result.id;
                                ArrayList.push({WebInfo:webName,Product:ProductName,ProductId:ProductId,totalPrice:total});
                            }
                            count++;
                            if (count == respnse.length) {
                                res.send(ArrayList)
                            }
                        })
                    };

                })
            })
        }
    })
}


