# BestBags

## Table of contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Run](#run)
- [Technology](#technology)
- [Features](#features)
- [Database Models](#database)
- [Color Palette](#colors)
- [License](#license)

## Introduction

A virtual ecommerce website using Node js, Express js, and Mongoose.

NOTE: Please read the RUN section before opening an issue.

## Demo

![screenshot](screenshot.png)

The application is deployed to Heroku and can be accessed through the following link:

[BestBags on Heroku](https://best-bags.herokuapp.com/)

The website resembles a real store and you can add products to your cart and pay for them. If you want to try the checkout process, you can use the dummy card number provided by stripe for testing which is 4242 4242 4242 4242 with any expiration date, CVC, and zip codes. Please <u><b>DO NOT</b></u> provide real card number and data.

In order to access the admin panel on "/admin" you need to provide the admin email and password.

## Run

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

- MONGO_URI: this is the connection string of your MongoDB Atlas database.

- SESSION_SECRET: a secret message for the session. You can use any string here.

- STRIPE_PRIVATE_KEY: the stripe package is used to process payment in the checkout route. To get this, you should set up a stripe account and put your private API key here.

- GMAIL_EMAIL, GMAIL_PASSWORD: the email and password given to nodemailer to send/receive the email. Please put a real email and password here because you will receive the messages sent from the contact us form on this email.

- ADMIN_EMAIL, ADMIN_PASSWORD: the email and password used to log into the admin panel using AdminBro. You can put any email and password here.

- ADMIN_COOKIE_NAME, ADMIN_COOKIE_PASSWORD: the cookie name and password used in the AdminBro authentication method. You can put any strings here.

After you've set these environmental variables in the .env file at the root of the project, you need to navigate to the "seedDB" folder and run "node category-seed.js" and "node product-seed.js" to fill your empty MongoDB Atlas database.

Now you can run "npm start" in the terminal and the application should work.

## Technology

The application is built with:

- Node.js version 12.16.3
- MongoDB version 4.2.0
- Express version 4.16.1
- Bootstrap version 4.4.1
- FontAwesome version 5.13.0
- Stripe API v3: used for payment in the checkout page
- Mapbox API: used to show the map in the about us page
- AdminBro: used and customized to implement the admin panel
- Nodemailer: used to send emails from the contact us form
- Passport: used for authentication
- Express Validator: used for form validation

## Features

The application displays a virtual bags store that contains virtual products and contact information.

Users can do the following:

- Create an account, login or logout
- Browse available products added by the admin
- Add products to the shopping cart
- Delete products from the shopping cart
- Display the shopping cart
- To checkout, a user must be logged in
- Checkout information is processed using stripe and the payment is send to the admin
- The profile contains all the orders a user has made

Admins can do the following:

- Login or logout to the admin panel
- View all the information stored in the database. They can view/add/edit/delete orders, users, products and categories. The cart model cannot be modified by an admin because a cart is either modified by the logged in user before the purchase or deleted after the purchase.

## Database

All the models can be found in the models directory created using mongoose.

### User Schema:

- username (String)
- email (String)
- password (String)

### Category Schema:

- title (String)
- slug (String)

### Product Schema:

- productCode (String)
- title (String)
- imagePath (String)
- description (String)
- price (Number)
- category (ObjectId - a reference to the category schema)
- manufacturer (String)
- available (Boolean)
- createdAt (Date)

### Cart Schema:

- items: an array of objects, each object contains: <br>
  ~ productId (ObjectId - a reference to the product schema) <br>
  ~ qty (Number) <br>
  ~ price (Number) <br>
  ~ title (String) <br>
  ~ productCode (Number) <br>
- totalQty (Number)
- totalCost (Number)
- user (ObjectId - a reference to the user schema)
- createdAt
  <br><br>
  \*\*The reason for including the title, price, and productCode again in the items object is AdminBro. If we are to write our own admin interface, we can remove them and instead populate a product field using the product id. However, AdminBro doesn't populate deep levels, so we had to repeat these fields in the items array in order to display them in the admin panel.

### Order Schema:

- user (ObjectId - a reference to the user schema)
- cart (instead of a reference, we had to structure an object identical to the cart schema because of AdminBro, so we can display the cart's contents in the admin interface under each order)
- address (String)
- paymentId (String)
- createdAt (Date)
- Delivered (Boolean)

## Colors

Below is the color palette used in this application:

- ![#478ba2](https://via.placeholder.com/15/478ba2/000000?text=+) `#478ba2`
- ![#b9d4db](https://via.placeholder.com/15/b9d4db/000000?text=+) `#b9d4db`
- ![#e9765b](https://via.placeholder.com/15/e9765b/000000?text=+) `#e9765b`
- ![#f2a490](https://via.placeholder.com/15/f2a490/000000?text=+) `#f2a490`
- ![#de5b6d](https://via.placeholder.com/15/de5b6d/000000?text=+) `#de5b6d`
- ![#18a558](https://via.placeholder.com/15/18a558/000000?text=+) `#18a558`
- ![#f9f7f4](https://via.placeholder.com/15/f9f7f4/000000?text=+) `#f9f7f4`
- ![#202020](https://via.placeholder.com/15/202020/000000?text=+) `#202020`
- ![#474747](https://via.placeholder.com/15/474747/000000?text=+) `#474747`

## License

[![License](https://img.shields.io/:License-MIT-blue.svg?style=flat-square)](http://badges.mit-license.org)

- MIT License
- Copyright 2020 © [Maryam Aljanabi](https://github.com/maryamaljanabi)
