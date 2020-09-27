CREATE DATABASE bundle;

USE bundle;

 CREATE TABLE bundles (
  id INTEGER auto_increment IS NOT NULL,
  name TEXT IS NOT NULL,
  value INTEGER IS NOT NULL,
  logoURL TEXT IS NOT NULL,
  helper VARCHAR(16) IS NOT NULL,
  minPurch FLOAT IS NOT NULL
);