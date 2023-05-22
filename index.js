


const { application } = require('express');
const express = require('express');
const cors = require('cors');

const url = require('url');

const app = express();
app.set(express.static('public'));
app.set('view engine', 'hbs');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.listen(3000, () => {
   
});
app.get('/', (req, res) => {
    res.render("index");
});

app.get('/home', (req, res) => {
  res.render("home");
});

app.get('/GameMode', (req,res) => {
  const token= req.query.token;
  res.render("GameMode", {token});
});


app.get('/SaraBanda', (req,res) => {
  const gen= req.query.genre;
  res.render("SaraBanda", {gen});
});

app.get('/WinOrLose', (req,res) =>{
 
  res.render("WinOrLose");
});

