var express = require("express")
const session = require("cookie-session")
const cookieParser = require("cookie-parser")
const path = require('path');


var app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(
    {
        name:"session",
        keys:['5921719c3037662e94250307ec5ed1db']
    }
))

app.post('/auth', function(req, res){
    let username = req.body.username
    if(true){
        req.session.username = username;
        res.redirect('/home');
    }else{
        res.send("Error")
    }
    res.end()
})

app.get('/home', function(req, res){
    if(req.session.username == "admin"){
        res.send("welcome Back "+ req.session.username)
    }
    else{
        res.send("Not admin")
    }

    res.end()
})

app.get('/', function(request, response) {
    // Render login template
    response.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000)
