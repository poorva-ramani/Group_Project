-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS scheduler_db;
-- Creates the "blogger" database --
CREATE DATABASE scheduler_db;

USE scheduler_db;

CREATE TABLE chirps(
 id INT(11) NOT NULL AUTO_INCREMENT,
 author VARCHAR(30)  NOT NULL,
 body VARCHAR(30)  NOT NULL,
 created_set TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY (id)
);