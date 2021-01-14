create database if not exists company;

use company;

create table clients (
	id integer not null auto_increment,
    name varchar(45) default null,
    last_name varchar(45) default null,
    invoice_date DATETIME NULL,
    birthdate date not null,
    age int generated always as (YEAR(invoice_date) - YEAR(birthdate) - IF(STR_TO_DATE(CONCAT(YEAR(invoice_date), '-', MONTH(birthdate), '-', DAY(birthdate)) ,'%Y-%c-%e') > invoice_date, 1, 0)),
    primary key(id)
);

describe clients;

select * from clients;


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin';

ALTER TABLE clients DROP COLUMN age;

drop table clients;

DELETE FROM clients where id = 2;