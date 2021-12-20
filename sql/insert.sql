-- PHẦN THÔNG TIN CÁC WEBSITE

INSERT INTO website(name,shortdescription,link) VALUES("24 Giờ","24h hay Tin tức 24h là một trang tin thức điện tử tại Việt Nam.<br>
Trang tin điện tử 24h Hoạt động theo giấy phép số 332/GP–TTĐT ngày cấp 22/01/2018 sở thông tin và truyền thông Hà Nội cấp. Trang do Công ty Cổ phần Trực tuyến 24H (gọi tắt là 24h) chịu trách nhiệm vận hành và quản lý."
,"https://www.24h.com.vn/");

INSERT INTO website(name,shortdescription,link) VALUES("Vnexpress","VnExpress hay Tin nhanh Việt Nam là một trang báo điện tử tại Việt Nam được thành lập bởi tập đoàn FPT,
 ra mắt vào ngày 26 tháng 02 năm 2001 và được Bộ Văn hóa - Thông tin cấp giấy phép số 511/GP - BVHTT ngày 25 tháng 11 năm 2002, hiện tại do FPT Online quản lý. 
 Đây là trang báo đầu tiên ở Việt Nam chỉ có bản điện tử mà không có bản in giấy. Ngoài ra, VnExpress cũng cho ra mắt một phiên bản báo điện tử Tiếng Anh để phục vụ người đọc tại nước ngoài.<br>
Theo trang web Alexa, VnExpress được xếp hạng top 5 trong những trang web có lượng truy cập nhiều nhất tại Việt Nam vào năm 2019."
,"https://vnexpress.net/");

INSERT INTO website(name,shortdescription,link) VALUES("Thế giới di động","Thegioididong.com là thương hiệu thuộc Công ty Cổ phần Thế giới di động, Tên tiếng Anh là Mobile World JSC, (mã Chứng Khoán: MWG) là một tập đoàn bán lẻ tại Việt Nam với lĩnh vực kinh doanh chính là bán lẻ điện thoại di động, thiết bị số và điện tử tiêu dùng. Theo nghiên cứu của EMPEA, thống kê thị phần bán lẻ điện thoại di động tại Việt Nam năm 2014 thì Thế giới di động hiện chiếm 25% và là doanh nghiệp lớn nhất trong lĩnh vực của mình.<br>
Năm 2018, Thế giới Di Động lọt top 100 nhà bán lẻ lớn nhất châu Á - Thái Bình Dương. Ngoài chuỗi cửa hàng điện thoại di động thegioididong.com, Công ty Cổ phần Thế giới di động còn sở hữu chuỗi cửa hàng điện máy Điện máy Xanh, Trần Anh và chuỗi siêu thị thực phẩm Bách hóa Xanh."
,"https://www.thegioididong.com/");



-- PHẦN VỊ TRÍ BANNER

INSERT INTO bannerposit(name,width,height,web_id) VALUES("3:1 Rectangle",'300','100',1);
INSERT INTO bannerposit(name,width,height,web_id) VALUES("Leaderboard",'728','90',1);
INSERT INTO bannerposit(name,width,height,web_id) VALUES("Half-page ad",'300','600',1);
INSERT INTO bannerposit(name,width,height,web_id) VALUES("Vertical Rectangle",'240','400',1);


INSERT INTO bannerposit(name,width,height,web_id) VALUES("Full Banner",'468','60',2);
INSERT INTO bannerposit(name,width,height,web_id) VALUES("Pop-under",'720','300',2);
INSERT INTO bannerposit(name,width,height,web_id) VALUES("Rectangle",'180','150',2);
INSERT INTO bannerposit(name,width,height,web_id) VALUES("Vertical Rectangle",'240','400',2);


INSERT INTO bannerposit(name,width,height,web_id) VALUES("Medium Rectangle",'300','250',3);
INSERT INTO bannerposit(name,width,height,web_id) VALUES("Large Rectangle",'336','280',3);
INSERT INTO bannerposit(name,width,height,web_id) VALUES("Leaderboard",'728','90',3);
INSERT INTO bannerposit(name,width,height,web_id) VALUES("Half-page ad",'300','600',3);


-- PHẦN ROLE
INSERT INTO role(name,code) VALUES('Quản trị','admin');
INSERT INTO role(name,code) VALUES('Người dùng','user');


-- PHẦN USER                 

-- 150512
-- 151200
-- Lagiaphong2306
INSERT INTO user(email,password,firstname,lastname,address,roleid) VALUES("lagiaphong.2001phong@gmail.com",'f85d2e076df823bc9078b8bb7ae36444',"Phong","La Gia","Nguyễn Đình Chiểu,phường ĐaKao Quận 1",1);
INSERT INTO user(email,password,firstname,lastname,address,roleid) VALUES("phongphong@gmail.com","73d50f8faef91ab5ec16d75900dc81a4","Phong","Phong","Chung cư Nguyễn Đình Chiểu",2);
INSERT INTO user(email,password,firstname,lastname,address,roleid) VALUES("phongla@gmail.com","0fc335b4e308b99574630af669fa4ab5","Phong","La","Cư Xá Đô Thành Q3",2);


