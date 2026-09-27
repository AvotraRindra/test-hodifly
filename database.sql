CREATE DATABASE IF NOT EXISTS test_hodifly;
USE test_hodifly;

CREATE TABLE IF NOT EXISTS utilisateurs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL
);

INSERT INTO utilisateurs (nom) VALUES ('Rindra');
