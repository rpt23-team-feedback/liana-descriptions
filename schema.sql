DROP DATABASE IF EXISTS bundle;

CREATE DATABASE bundle;

USE bundle;

DROP TABLE IF EXISTS bundles;

CREATE TABLE bundles (
  id TINYINT(1) auto_increment,
  name VARCHAR(68),
  value TINYINT(1) UNSIGNED,
  logoURL VARCHAR(2000),
  helper VARCHAR(16),
  minimum TINYINT(1) UNSIGNED,
  PRIMARY KEY(id)
);

ALTER TABLE bundles AUTO_INCREMENT = 1;
