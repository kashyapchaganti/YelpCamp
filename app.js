const express = require('express')
const app = express();
const path= require('path');
const mongoose = require('mongoose');
const methodOverride= require('method-override');
const ejsMate = require('ejs-mate');
const ExpressError= require('./utils/ExpressError');


const campgrounds = require('./routes/campground')
const reviews = require('./routes/reviews')

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});
const db= mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open", ()=>{
    console.log("Database Connected")
})


app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));
const { campgroundSchema,reviewSchema } = require('./schemas.js');





app.use('/campgrounds',campgrounds);
app.use('/campgrounds/:id/reviews',reviews);
app.get('/',(req,res)=>{
    res.render('home');
})


app.all('*',async(req,res,next)=>{
    const err = new ExpressError('Something wrong', 404);
    next(err);
})
app.use((err,req,res,next)=>{
    const {statusCode=500}= err;
    if(!err.message) err.message="Oh no something wrong";
    res.status(statusCode).render('error',{err});
    
    
})
app.listen(3000,()=> {
    console.log('Serving on port 3000');
})

