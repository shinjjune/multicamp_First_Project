# multicamp_First_Project

우선 node-express를 설정하세요

개인프로젝트
주제: 블록체인과 보험업의 결합


# MYSQL 접목하기

-mysql 8 ver.


create schema nodejs;

use nodejs;

create table member(
mno int not null primary key auto_increment,
name varchar(30),
id varchar(30),
comments varchar(255));

insert into member(name,id,comments) values('신준혁','sjh','hihi');

select *from memeber;

cmd $) npm i mysql
