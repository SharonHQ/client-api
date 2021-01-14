create database if not exists company;

use company;

create table clients (
	id integer not null auto_increment,
    name varchar(45) default null,
    last_name varchar(45) default null,
    age integer default null,
    birthdate date not null,
    primary key(id)
);

describe clients;

