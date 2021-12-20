var paypal = require('paypal-rest-sdk');
const keys = require('../configs/keys')
const stripe = require('stripe')(keys.stripeSecretKey);

var BannerPosit = require('../models/bannerposit.model');
var Cart = require('../models/cart.model');
var Bill = require('../models/bill.model');
var Web = require('../models/web.model');

var totalPrice = 0;
var bannerpositid = null;
var userid = null;
var ProductName = null;

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'Aaf2qU4ofFz6t4ozlzfYDyZJKxhp0Q68c9TWtKzSBEOp6c6vgz7HsEXlYGAq6VXKAjkIKO3ngcqXa4X2',
    'client_secret': 'ELbD2ofW0aqh4z2tLG_opmefwR1j8s3Y0TNv10ZT56chzCebQvQbNNh2VNN6vlmkRkC1zgDJwWmEdIA4'
});


//Cho vào id sản phẩm, tổng giá và id user trong cookie => ra trangg để bỏ hình banner vào 
//amount, name, description
exports.move_to_checkout = function (req, res) {
    Cart.findOneByUserIdandPositId(2,1,function(resultCart){
        if(resultCart != null){
            BannerPosit.findOneById(resultCart.bannerposit_id,function(result){
                if(result != null){
                    Web.findOneById(result.web_id,function(respnse){
                        if(respnse!=null){
                            totalPrice = resultCart.totalprice;
                            bannerpositid = result.id;
                            ProductName = 'Vị trí '+result.name + ' tại website ' + respnse.name;
                            res.render('items/testpayment',{
                                name : result.name,
                                amount : totalPrice,
                                stripePublishableKey : keys.stripePublishableKey
                            });
                        }
                        else('')
                    })              
                }
            })
        }else{
            res.send('Cart không có banner posit tương ứng');
        }
        
    })
    
    
};


//Gửi id sản phẩm + tổng giá + id user trong cookie + link hình banner => ra trang thanh toán paypal 
//=> nếu thanh toán thành công => lưu vào bill, xóa cart
exports.move_to_paypal = function (req, res) {
    var id = req.body.id   
    BannerPosit.findOneById(id, function (respnse) {       
        if (respnse != null) {
            totalPrice = req.body.total;
            bannerpositid = respnse.id;
            bannerName = respnse.name;
            userid = req.session.user.id;
            var create_payment_json = {
                "intent": "sale",
                "payer": {
                    "payment_method": "paypal"
                },
                "redirect_urls": {
                    "return_url": "http://localhost:3000/api/payment/success",
                    "cancel_url": "http://localhost:3000/api/payment/cancel"
                },
                "transactions": [{
                    "item_list": {
                        "items": [{
                            "name": "x Name: "+respnse.name,
                            "sku": "ID: "+respnse.id,
                            "price": totalPrice,
                            "currency": "USD",
                            "quantity": 1
                        }]
                    },
                    "amount": {
                        "currency": "USD",
                        "total": totalPrice
                    },
                    "description": "Hat for the best team ever"
                }]
            };
            paypal.payment.create(create_payment_json, function (error, payment) {
                if (error) {
                    res.send('cancle');
                } else {
                    for (let i = 0; i < payment.links.length; i++) {
                        if (payment.links[i].rel === 'approval_url') {
                            res.send(payment.links[i].href);
                        }
                    }
                }
            });
        }
    })
};


exports.check_success = function (req, res) {
    var payerID = req.query.PayerID;
    var paymentId = req.query.paymentId;
    var execute_payment_json = {
        "payer_id": payerID,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": totalPrice
            }
        }]
    };
    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            res.send('cancle');
        } else {
            var data = {
                userid: userid,
                bannerpositid: bannerpositid,
                totalprice: totalPrice
            }
            Bill.insert(data, function (result) {
                if (result != null) {
                    Cart.findOneByUserIdandPositId(userid,bannerpositid,function(respnse){
                        if(respnse!=null){
                            Cart.delete(respnse.id,function(resultDelete){
                                if(resultDelete!=null){
                                    res.redirect('http://localhost:4200/payment');
                                }
                            })
                        }
                        else res.send('Xóa giỏ hàng không thành công')
                    })                    
                } else res.send('Khong thanh cong')
            })
        }
    });
};



//Thanh toán mastercard , visa...
exports.move_to_visa = function(req,res){
    const amount = totalPrice;
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
      })
      .then(customer => stripe.charges.create({
        amount,
        description: ProductName,
        currency: 'USD',
        customer: customer.id
      }))
      .then(charge => res.render('items/success'));
};