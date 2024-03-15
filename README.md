created a user form to collect input data from user.
Next added styles to the form 
Next validated the form 
Database is created with the schema in Mysql below is my database schema
CREATE DATABASE userDatabase;

USE userDatabase;

CREATE TABLE userInfo (
  ID INT NOT NULL AUTO_INCREMENT,
  Name VARCHAR(255),
  Email VARCHAR(255),
  Age INT,
  DateOfBirth DATE,
  PRIMARY KEY (ID)
);
connect both frontend and backend using php
