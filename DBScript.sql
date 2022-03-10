create database delilah;

use delilah;

create table users
(idUser int auto_increment primary key, 
username varchar(50) NOT NULL,
password varchar(50) NOT NULL,
name varchar(50),
email varchar(50) NOT NULL,
phone varchar(50),
address varchar(50),
typeUser smallint
);

create table products
(idProduct int auto_increment primary key,
description varchar(50) not null,
price varchar (50) not null
);

create table state
(idState int auto_increment primary key,
description varchar(50) not null
)

create table payment_method
(idPayment int auto_increment primary key,
description varchar (50) not null
)

create table orders
(idOrder int auto_increment primary key,
idUser int not null, 
idState int not null,
idPayment int not null,
addressUser int not null,
description varchar(50) not null,
timeOrder varchar(50)
)

create table products_Order
(idPP int auto_increment primary key,
idOrder int not null,
idProduct int not null,
amount int not null
)


alter table products_order 
add foreign key (idOrder) references orders(idOrder);


alter table products_order 
add foreign key (idProduct) references products(idProduct);


alter table orders
add foreign key (idUser) references users(idUser);


alter table orders
add foreign key (idState) references state(idState);

alter table orders
add foreign key (idPayment) references payment_method(idPayment);

