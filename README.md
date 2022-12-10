# WEB-INFO61500_FINAL-PROJECT

# STAR BOOKING | Happy Holidays

## Complete booking project built with Node.js, React, Redux, Express and MongoDB

This is a Hotel Booking app where user can login and select a hotel and book a room in the hotel.
Users can login, reset password and create profiles. Admins have full control of all aspects with admin-dashboard. They can add and delete hotels and users.

## Backend

- bcryptjs
- cloudinary
- cookie-parser
- dotenv
- express
- express-fileupload
- jsonwebtoken
- mongoose
- nodemailer
- stripe
- validator

### Two devDependecies

- nodemon
- concurrently

## Frontend

- stripe/react-stripe
- axios
- countries-list
- mdbreact
- rc-slider
- react
- react-alert
- react-alert-template-basic
- react-bootstrap
- react-dom
- react-helmet
- react-icons
- react-js-pagination
- react-redux
- react-router-dom
- react-scripts
- redux
- redux-devtools-extension
- redux-thunk

Also, used Bootstrap, poppins and jQuery external scripts.

## Installation

Install the dependencies and devDependencies in main folder, then get into
client folder and install there.

```sh
npm i
cd client
npm i
cd ..
```

Also you can seed the database inside api/data folder there is a file with
several items, just run

```
npm run seeder
```

### Env variables

Inside api/config folder, you will see .env file with sorted names of variables,
you will first of all have to fill up those, in order for app to work.

After that just enter into console:

```
npm run dev
```

And concurrently will do its work If you are on the Linux systems, you might
have to type

```
sudo npm run dev
```
