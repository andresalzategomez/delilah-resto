create database delilah;

use delilah;

CREATE table meals (
	id_meal int not null primary key auto_increment,
	name_meal varchar(255),
	price int,
	image varchar(255),
	date_creation timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE table users (
	id_user int not null primary key auto_increment,
	username varchar(255),
	email varchar(255) not null unique,
	phone varchar(255),
	address varchar(255),
	password varchar(255),
	id_role int
);

CREATE table orders (
	id_order int not null primary key auto_increment,
	id_user int,
	id_meal int,
	hour timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	id_payment_method int,
	id_status int
);

CREATE table status (
	id_status int not null primary key auto_increment,
	name_status varchar(255)
);

create table users_roles(
	id_role int not null primary key auto_increment,
	name_role varchar(255)
);

CREATE table payment_method (
	id_payment_method int not null primary key auto_increment,
	name_payment_method varchar(255)
);



ALTER table users add CONSTRAINT users_fk_1 FOREIGN KEY (id_role) REFERENCES users_roles (id_role);

ALTER table orders add CONSTRAINT orders_fk_1 FOREIGN KEY (id_user) REFERENCES users (id_user);

ALTER table orders add CONSTRAINT orders_fk_2 FOREIGN KEY (id_meal) REFERENCES meals (id_meal);

ALTER table orders add CONSTRAINT orders_fk_3 FOREIGN KEY (id_status) REFERENCES status (id_status);

ALTER table orders add CONSTRAINT orders_fk_4 FOREIGN KEY (id_payment_method) REFERENCES payment_method (id_payment_method);



INSERT into status(name_status) values 
	('Nuevo'),
	 ('Confirmado'),
	 ('Preparando'),
	 ('Enviando'),
	 ('Entregado');
	
INSERT into users_roles (name_role) values 
	('admin'),
	 ('user');
	
INSERT INTO payment_method (name_payment_method) values 
	('Efectivo'),
	('Tarjeta de débito'),
	('Tarjeta de crédito');
