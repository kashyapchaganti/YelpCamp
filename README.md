
# 🔭 Welcome to Yelp Camp


- YelpCamp is a full-stack website project where users can create and review campgrounds. In order to review or create a campground, you must have an account. This project is a part of Colt Steele's web dev bootcamp course on udemy.

- This project was created created using Node.js, Express, MongoDB, and Bootstrap. Passport.js is used to handle authentication.


## 🔨 Tech Stack

**Client:** HTML, CSS, Javascript, Bootstrap

**Server:** Node, Express

**Database:** MongoDB

**Tools:** Express-Session, Passport.js, Cloudinary, Mongoose, Mapbox, EJS, Heroku



## 💡 Lessons Learned

- MVC (Model-View-Controller) architecture to achieve seperation of concerns and maintain independence in relation to backend/frontend services.

- Express.js minimal, unopinionated backend framework to keep serverside boilerplate as low as possible. Especially useful for learning how to piece different technologies together to develop a complete backend.

- Express-Session to learn how cookies work to deliver a rich user experience through client and serverside cookies.

- Passport.js for authentication and authorization.

- MongoDB as the primary NoSQL database to store campgrounds, users, reviews and session details.

- Mongoose as an ORM(Object relation mapping) library to interact with MongoDB.

- Cloudinary to store images of campgrounds when users create new campgrounds, and to optimize them for when client-side requests them.

- Mapbox to deliver an interactive map for users to visually see the location of campgrounds through a cluster map and a zoomed in map for each campground.

- EJS (Embedded JavaScript Templates) as a templating language to create dynamic user experices.

- Bootstrap as the driving CSS framework to create visually appealing user experiences.

- Render to host the complete application
## 🚀 Getting Started

#### To run this project on your system:

Create an .env file and add values to the following variables:
```
CLOUDINARY_CLOUD_NAME=<Your Cloudinary cloud name>
CLOUDINARY_KEY=<Your Cloudinary key>
CLOUDINARY_SECRET=<Your Cloudinary secret>
MAPBOX_TOKEN=<Your Mapbox token>
DB_URL=<Your MongoDB atlas URL or local MongoDB URL>

```
Make sure you have MongoDB installed on your system In a terminal window, initialize a MongoDB Database
```
$ ./mongod
```
In a second terminal window, access the MongoDB Database with 
Mongoose
```
$ mongoose
```
In a third terminal window, install dependencies using npm:

```
$ npm install
```
And then run the application with

```
$ npm start
```
or for hot reloading (recommended)

```
$ nodemon app.js
```
## 🚗 Roadmap


- Refactor backend to use Typescript instead of JavaScript to ensure code type safety

- Replace EJS with Next.js to take advantage of the scalability and modularity of React while still maintaining the performance of server rendered applications

- Overhaul the UI to create a more interactive experience. Three.js 👀👀

# Home Page

<img width="1102" alt="Screenshot 2023-07-03 at 5 12 12 PM" src="https://github.com/kashyapchaganti/YelpCamp/assets/66533610/cc5bc910-1487-4df0-bc6a-38a654a8d373">

# All Campgrounds 

<img width="729" alt="Screenshot 2023-07-03 at 5 24 08 PM" src="https://github.com/kashyapchaganti/YelpCamp/assets/66533610/2feff216-94d9-4706-9e39-4da3c289a4f8">

# Individual Campground Show Page 

<img width="749" alt="Screenshot 2023-07-03 at 5 24 20 PM" src="https://github.com/kashyapchaganti/YelpCamp/assets/66533610/73d34a0a-599f-4ee5-a3e8-3deb3e879572">

# Login and Register Page
<img width="990" alt="Screenshot 2023-07-03 at 5 23 38 PM" src="https://github.com/kashyapchaganti/YelpCamp/assets/66533610/4a34be73-452e-4c76-ae87-b90dbfdfe747">





