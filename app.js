const express       = require('express');
const mongoose      = require('mongoose');
const passport      = require('passport');
const cookieSession = require('cookie-session');
const keys          = require('./config/keys');
const authRoutes    = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const Task = require('./models/task-model');
const multiparty = require('multiparty');

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

//Main
app.get('/', (req,res) =>{
    console.log(req.user);
    if(req.user)return res.redirect('/0');
    res.render('index',{user: req.user}); //req.user is not sent
});

//Main for users
app.get('/0', async (req,res) =>{
    console.log(req.user);
    const tasks = await Task.find({owner: req.user._id});
    //console.log(tasks);
    res.render('index',{user: req.user, tasks: tasks.map(obj=>obj.task)});
});


//Fetch Post
app.get('/fetch', async (req,res)=>{
    console.log('fetch request')
    const tasks = await Task.find({owner: req.user._id});
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(tasks));
    //res.json(tasks).status(200);
});

//Create Post
app.post('/task', (req,res) =>{
    console.log(req.user);
    //Multiparty handles formData sent
    let form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
        console.log('Multiparty caught request');
        let newTask = fields;
            //If user is signed-in, data will be saved;
            if(req.user){
                newTask = Object.assign({owner: req.user._id},newTask);
                Task.create({
                    owner: newTask.owner,
                    task: newTask.task[0],
                    tID: newTask.uID[0],
                    dateID: newTask.dateID[0],
                    creationDate: newTask.creationDate[0],
                    completionDate: newTask.completionDate[0],
                    deletionDate: newTask.deletionDate[0]
                });
            }
        console.log(newTask);
        res.end();
        });
    res.sendStatus(200);
});

//Port Listening
app.listen(9000, ()=>{
    console.log("Listening on port 9000");
});