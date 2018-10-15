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
    console.log(`Address:${req.connection.remoteAddress} has arrived`);
    if(req.user)return res.redirect('/0');
    res.render('index',{user: req.user}); //req.user is not sent
});

//Signed-in Main
app.get('/0', async (req,res) =>{
    if(!req.user){
        res.redirect('/');
        return;
    }
    console.log(`${req.user.username} has signed in with Address:${req.connection.remoteAddress}`);
    const tasks = await Task.find({owner: req.user._id});
    //console.log(tasks);
    res.render('index',{user: req.user, tasks: tasks.map(obj=>obj.task)});
});


//Fetch Post
app.get('/fetch', async (req,res)=>{
    if(req.user){
        console.log(`User:${req.user._id} called fetch request with Address:${req.connection.remoteAddress}`);
        const tasks = await Task.find({owner: req.user._id});
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(tasks));
    };
});

//Sync Post
app.get('/sync', async (req,res)=>{
    if(req.user){
        console.log(`User:${req.user._id} created new sync request with Address:${req.connection.remoteAddress}`);
        let task = await Task.findOne({owner: req.user._id});
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(task));
    };
});

//Delete Post
app.post('/remove', async (req,res)=>{
    if(req.user){
        let body = '';
        req.on('data', chunk => {body += chunk.toString()});
        req.on('end', async () => {
            let target = await Task.findOneAndDelete(JSON.parse(body));
            //console.log(target);
        });
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('ok');
        return;
    }
    res.status(403);
    res.end('forbidden');
});

//Update Post
app.post('/update', async (req,res)=>{
    if(req.user){
        let body = '';
        req.on('data', chunk => {body += chunk.toString()});
        req.on('end', async () => {
            let targetOld = JSON.parse(body);
            let target = await Task.findByIdAndUpdate(targetOld[0],targetOld[1]);
        });
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('ok');
        return;
    }
    res.status(403);
    res.end('forbidden');
});

//Create Post
app.post('/task', (req,res) =>{
    //console.log(req.user);
    //Multiparty handles formData sent
    let form = new multiparty.Form();
    form.parse(req, async function(err, fields, files) {
        console.log('Multiparty caught post');
        let newTask = fields;
            //If user is signed-in, data will be saved;
            if(req.user){
                newTask = Object.assign({owner: req.user._id},newTask);
                let newData = await Task.create({
                    owner: newTask.owner,
                    task: newTask.task[0],
                    tID: newTask.uID[0],
                    dateID: newTask.dateID[0],
                    creationDate: newTask.creationDate[0],
                    completionDate: newTask.completionDate[0],
                    deletionDate: newTask.deletionDate[0]
                });
                let task = await Task.findOne(newData);
                console.log(task);
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end(JSON.stringify(task));
                return;
            }
            //res.end();
        });
    //res.sendStatus(200);
});

//Port Listening
app.listen(9000, ()=>{
    console.log("Listening on port 9000");
});