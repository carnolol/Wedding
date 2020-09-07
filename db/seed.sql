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
description varchar(400),
chadwick_slides oid,
chaadwick_pictures bytea
)

create table airbnb_pictures(
    id serial primary key, 
    img text
)

-- trying to import files into database from my local machine.... thats what the oid & bytea datatypes are

create table google_map_locations(
    id serial primary key, 
    lat decimal, 
    lng decimal,
    name varchar(100),
    description varchar(250),
    address varchar(500),
    image text,
    href text,
)