DROP DATABASE IF EXISTS hbdesc;

CREATE DATABASE hbdesc;

USE hbdesc;

DROP TABLE IF EXISTS bundles;

CREATE TABLE bundles (
  id TINYINT(1) auto_increment,
  name VARCHAR(68),
  value TINYINT(1) UNSIGNED,
  logoURL VARCHAR(101),
  helper VARCHAR(16),
  minimum TINYINT(1) UNSIGNED,
  timesUp varchar(10),
  PRIMARY KEY(id)
);

ALTER TABLE bundles AUTO_INCREMENT = 1;
