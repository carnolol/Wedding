create table wedding_users(
id serial primary key,
first_name varchar(200),
last_name varchar(200),
profile_pic VARCHAR(2000),
password varchar(500),
email varchar(250)
)

create table slideshow_pictures(
id serial primary key, 
img text,
description varchar(400)
)