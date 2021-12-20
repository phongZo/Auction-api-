use doanec;



create table category(
	id bigint primary key auto_increment,
    name varchar(255),
    webid bigint NOT NULL,
    code varchar(255)
);

create table website(
	id bigint primary key auto_increment,
    shortdescription text NULL,
    name varchar(255) NULL,
    link varchar(255) NOT NULL 
);

ALTER TABLE category ADD CONSTRAINT fk_category_website FOREIGN KEY (webid) REFERENCES website(id);

create table bannerposit
(
	id bigint primary key auto_increment,
    name varchar(255) NOT NULL,
    width varchar(150) NOT NULL,
    height varchar(150) NOT NULL,
    min_price float NULL,
    thumbnail varchar(255) NULL,
    web_id bigint NOT NULL,
    timeLive int NULL,
    auction_status int NOT NULL,
    price_step float NULL,
    last_auction_date varchar(255) NULL,
    auction_date varchar(255) NULL,
    auction_end_date varchar(255) NULL
);

ALTER TABLE bannerposit ADD FULLTEXT(name);
ALTER TABLE bannerposit ADD CONSTRAINT fk_banner_website FOREIGN KEY (web_id) REFERENCES website(id);

create table role(
	id bigint primary key auto_increment,
    name varchar(255) NOT NULL,
    code varchar(255) NOT NULL
);

create table user(
	id bigint primary key auto_increment,
    email varchar(150) NOT NULL,
    password varchar(150) NOT NULL,
    firstname varchar(255) NOT NULL,
    lastname varchar(255) NOT NULL,
    address varchar(255) NOT NULL,
    status int NULL,
    roleid bigint NOT NULL
);

ALTER TABLE user ADD CONSTRAINT fk_user_role FOREIGN KEY (roleid) REFERENCES role (id);

create table bill(
	id bigint primary key NOT NULL auto_increment,
    userid bigint NOT NULL,
    bannerpositid bigint NOT NULL,
    totalprice float NOT NULL,
    thumbnailuser varchar(255) NOT NULL 
);

ALTER TABLE bill ADD CONSTRAINT fk_bill_user FOREIGN KEY (userid) REFERENCES user (id);
ALTER TABLE bill ADD CONSTRAINT fk_bill_bannerposit FOREIGN KEY (bannerpositid) REFERENCES bannerposit (id);



create table auction(
	id bigint primary key auto_increment,
    userid bigint NOT NULL,
    bannerpositid bigint NOT NULL,
    price_bid float NOT NULL
);
ALTER TABLE auction ADD CONSTRAINT fk_auction_user FOREIGN KEY (userid) REFERENCES user (id);
ALTER TABLE auction ADD CONSTRAINT fk_auction_bannerposit FOREIGN KEY (bannerpositid) REFERENCES bannerposit (id);


create table cart(
	id bigint primary key auto_increment,
    userid bigint not null,
    bannerposit_id bigint not null,
    totalprice float NULL
);
ALTER TABLE cart ADD CONSTRAINT fk_cart_user FOREIGN KEY (userid) REFERENCES user (id);
ALTER TABLE cart ADD CONSTRAINT fk_cart_bannerposit FOREIGN KEY (bannerposit_id) REFERENCES bannerposit (id);






