CREATE TABLE bundle (
  id TINYINT auto_increment,
  name VARCHAR(100),
  value SMALLINT,
  logoURL VARCHAR(2000),
  helper VARCHAR(16),
  minPurch TINYINT,
  PRIMARY KEY(id)
);