CREATE DATABASE sconfort; 
USE sconfort;

CREATE TABLE sconfort(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(40) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select*from sconfort;