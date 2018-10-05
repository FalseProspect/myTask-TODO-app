const express       = require('express');
const mongoose      = require('mongoose');
const passport      = require('passport');
const cookieSession = require('cookie-session');
const keys          = require('./config/keys');
const authRoutes    = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const Task = require('./models/task-model');

//App
const app = express();

app.set('view engine','ejs');

//Static Files Route
app.use('/resources',express.static('resources'))


//CookieSession
app.use(cookieSession({
    maxAge: 1000*60*60*24,
    keys:   [keys.session.cookieKey]
}));

//Init passport
app.use(passport.initialize());
app.use(passport.session());

//MongoDB Connect
mongoose.connect(keys.mongodb.dbURI,{ useNewUrlParser: true },()=>{console.log('MongoDB connected');})

//Routes
app.use('/auth',authRoutes);
app.use('/submit',require('./routes/submit-route'));

//Main
app.get('/', (req,res) =>{
    res.render('index',{user: req.user});
});

//Port Listening
app.listen(7000, ()=>{
    console.log("Listening on port 7000");
});