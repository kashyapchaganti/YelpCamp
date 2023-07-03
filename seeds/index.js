const mongoose = require('mongoose');
const Campground= require('../models/campground');
const cities = require('./cities');
const {places, descriptors}= require('./seedHelpers');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});



const db= mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open", ()=>{
    console.log("Database Connected")
})
// takes an array as input and gives out a random array value
const sample = array => array[Math.floor(Math.random() * array.length)];


// const seedDB = async () => {
//     await Campground.deleteMany({});
//     for (let i = 0; i < 50; i++) {
//         const random1000 = Math.floor(Math.random() * 1000);
//         const camp = new Campground({
//             location: `${cities[random1000].city}, ${cities[random1000].state}`,
//             title: `${sample(descriptors)} ${sample(places)}`
//         })
//         await camp.save();
//     }
// }
const seedDB= async () =>{
    await Campground.deleteMany({});
    for(let i=0;i<300;i++){
        const random1000 =Math.floor(Math.random()*1000);
        const price =Math.floor(Math.random()*20)+10;
        const camp= new Campground({
            author:'6496859af6cd9dbe67435332',
            title: `${sample(descriptors)} ${sample(places)}`,
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            images: [
                {
                  url: 'https://res.cloudinary.com/dtlukvxux/image/upload/v1687909397/YelpCamp/e4gkfx5ul07vxbosnih7.jpg',
                  filename: 'YelpCamp/e4gkfx5ul07vxbosnih7',
                  
                }
              ],
            price,
            geometry:{
              type:"Point",
              coordinates:[cities[random1000].longitude,
              cities[random1000].latitude]
            }
            ,description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores minus molestias placeat ea vero non? Quam odio veritatis harum corrupti dignissimos in eligendi aut et? Optio facilis distinctio id. '
        })
        await camp.save();
    }

    
}

seedDB().then(() => {
    mongoose.connection.close();
})