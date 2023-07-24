-- Drop the existing database if it exists
DROP DATABASE IF EXISTS ecommerce_db;

-- Create the database
CREATE DATABASE ecommerce_db;

-- Use the database
USE ecommerce_db;

-- Create the Categories table
CREATE TABLE categories (
  id INT AUTO_INCREMENT NOT NULL,
  category_name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

-- Create the Products table
CREATE TABLE products (
  id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock INT NOT NULL DEFAULT 10,
  category_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES categories (id)
);

-- Create the Tags table
CREATE TABLE tags (
  id INT AUTO_INCREMENT NOT NULL,
  tag_name VARCHAR(50),
  PRIMARY KEY (id)
);

-- Create the ProductTags table
CREATE TABLE product_tags (
  id INT AUTO_INCREMENT NOT NULL,
  product_id INT,
  tag_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (product_id) REFERENCES products (id),
  FOREIGN KEY (tag_id) REFERENCES tags (id)
);
