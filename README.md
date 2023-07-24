# Ecommerce Database

This repository contains the database schema and seed files for an ecommerce application. The database is designed to store information about products, categories, tags, and their relationships.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Database Schema](#database-schema)
- [Functionality](#functionality)
- [API Routes](#api-routes)
- [Testing API Routes](#testing-api-routes)
- [Getting Started](#getting-started)
- [Credits](#credits)

## Introduction

The Ecommerce Database is a MySQL database that serves as the backend for an ecommerce application. It provides the necessary tables and relationships to store and manage products, categories, and tags.

## Technologies Used

The following technologies were used in the development of this database:

- **MySQL**: The relational database management system used to store and retrieve data.
- **Sequelize**: An Object-Relational Mapping (ORM) library for Node.js that provides an easier way to interact with databases.
- **Sequelize CLI**: The command-line interface for Sequelize, used for database migrations and seed data management.
- **Node.js**: A JavaScript runtime environment that allows the execution of JavaScript code on the server-side.
- **Express.js**: A web application framework for Node.js that simplifies the process of building APIs and web applications.

## Database Schema

The database schema consists of the following tables:

### Categories

- `id`: Integer, primary key.
- `category_name`: String, the name of the category.

### Products

- `id`: Integer, primary key.
- `product_name`: String, the name of the product.
- `price`: Decimal, the price of the product.
- `stock`: Integer, the available stock quantity of the product.
- `category_id`: Integer, foreign key referencing the `id` column of the `Categories` table.

### Tags

- `id`: Integer, primary key.
- `tag_name`: String, the name of the tag.

### ProductTags

- `id`: Integer, primary key.
- `product_id`: Integer, foreign key referencing the `id` column of the `Products` table.
- `tag_id`: Integer, foreign key referencing the `id` column of the `Tags` table.

## Functionality

The Ecommerce Database provides the following functionality:

- Store and manage information about products, categories, and tags.
- Associate products with categories and tags.
- Perform CRUD (Create, Read, Update, Delete) operations on products, categories, and tags.

## API Routes

The API provides the following routes for interacting with the database:

- **GET /api/products**: Retrieve all products.
- **GET /api/products/:id**: Retrieve a single product by ID.
- **POST /api/products**: Create a new product.
- **PUT /api/products/:id**: Update a product by ID.
- **DELETE /api/products/:id**: Delete a product by ID.

## Testing API Routes

You can use a tool like Postman to test the API routes and perform CRUD operations on the database.

To test the routes, make HTTP requests to the appropriate endpoints using the following methods:

- **GET**: Retrieve data.
- **POST**: Create new data.
- **PUT**: Update existing data.
- **DELETE**: Delete data.

Make sure to include the necessary request payloads and parameters as specified in the API documentation.

## Getting Started

To set up and run the Ecommerce Database, follow the steps below:

1. Install MySQL on your system if you haven't already.

2. Clone this repository toyour local machine.

3. Navigate to the project's root directory in your terminal.

4. Create the database by executing the following command:

   ```bash
   mysql -u <username> -p < schema.sql

1. Install the required dependencies by running the following command: npm install
2. Seed the database with initial data by running the following command: 'npm run seed'. This command will sync the models with the database and populate it with sample data.
3. Start the server by executing the following command: 'nodemon server.js' or 'npm start'. The server will start running on http://localhost:3001.


## API Routes and Postman

1. GET /api/products: Retrieve all products.

  Open Postman and set the HTTP method to GET.
  Enter the following URL: http://localhost:3001/api/products.
  Click the Send button.
  Postman will send a GET request to the specified URL, and you will receive a response containing all products stored in the database.

2. GET /api/products/:id: Retrieve a single product by ID.
Open Postman and set the HTTP method to GET.
Enter the following URL: http://localhost:3001/api/products/:id.
Replace :id with the ID of the product you want to retrieve.
Click the Send button.
Postman will send a GET request to the specified URL, and you will receive a response containing the product with the specified ID.


3. POST /api/products: Create a new product.

Open Postman and set the HTTP method to POST.
Enter the following URL: http://localhost:3001/api/products
In the request body section, select "raw" and choose JSON from the dropdown menu.
Provide the necessary details of the new product in JSON format, for example:
json

 {
  "product_name": "New Product",
  "price": 19.99,
  "stock": 10,
  "category_id": 1
 }

Click the Send button.
Postman will send a POST request to the specified URL with the provided data, and you will receive a response containing the newly created product.


4. PUT /api/products/:id: Update a product by ID.

Open Postman and set the HTTP method to PUT.
Enter the following URL: http://localhost:3001/api/products/:id.
Replace :id with the ID of the product you want to update.
In the request body section, select "raw" and choose JSON from the dropdown menu.
Provide the updated details of the product in JSON format, for example:
json

{
  "product_name": "Updated Product",
  "price": 29.99,
  "stock": 15,
  "category_id": 2
}

Click the Send button.
Postman will send a PUT request to the specified URL with the updated data, and you will receive a response indicating whether the update was successful.


5. DELETE /api/products/:id: Delete a product by ID.

Open Postman and set the HTTP method to DELETE.
Enter the following URL: http://localhost:3001/api/products/:id.
Replace :id with the ID of the product you want to delete.
Click the Send button.
Postman will send a DELETE request to the specified URL, and you will receive a response indicating whether the deletion was successful.
Make sure to replace :id with the actual ID of the product you want to retrieve, update, or delete.


## Problems I faced during this project

1. Get request 200 error empty array []

2. POST request formating

3. PUT request error 400 Bad request

5. DELETE request 