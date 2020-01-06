-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS scheduler_db;
-- Creates the "blogger" database --
CREATE DATABASE scheduler_db;

USE scheduler_db;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `mob_no` int(11) NOT NULL,
  `user_name` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
);


-- scheduling/event details-
-- User name - host name
-- Phone,
-- Location
-- Time,
-- Date
-- TimeZone, 
-- Event Name, 
-- Event Descriptions