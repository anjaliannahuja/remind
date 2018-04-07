DROP DATABASE IF EXISTS twilio;

CREATE DATABASE twilio;

\c twilio;

CREATE TABLE users (
  user_id BIGSERIAL PRIMARY KEY,
  phone_number varchar(20) NOT NULL UNIQUE,
  verify_code integer NOT NULL,
  verified_status boolean NOT NULL
);

CREATE TABLE messages (
  message_id BIGSERIAL PRIMARY KEY,
  message_text varchar(200) NOT NULL,
  scheduled_time timestamp NOT NULL,
  user_id BIGSERIAL NOT NULL references users(user_id)
);


/*  Execute this file from the command line by typing:
 *    psql -U anjaliahuja < schema.pgsql
 *  to create the database and the tables.*/

--  
