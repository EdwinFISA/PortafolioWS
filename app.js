const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app = express();
const port = process.env.PORT


//utilizacion de hbs para el renderizado de la pagina web
app.set('view engine', 'hbs')

//uso de parciales "codigo que se repite en mas de un lugar o paginas web"
hbs.registerPartials(__dirname + '/views/partials')

//servidor contenido estático public donde esta el templated
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/sobre-mi', (req, res) => {
    res.render('sobre-mi');
});

app.get('/skills', (req, res) => {
    res.render('skills');
});

app.get('/proyectos', (req, res) => {
    res.render('proyectos');
});

app.get('/contacto', (req, res) => {
    res.render('contacto');
});

app.get('/restaurante', (req, res) => {
    res.render('restaurante'); 
});

app.get('/calculadora', (req, res) => {
    res.render('calculadora'); 
});

app.get('/atm', (req, res) => {
    res.render('atm'); 
});

app.get('/mrumruv', (req, res) => {
    res.render('mrumruv'); 
});

app.get('/calculadorajubi', (req, res) => {
    res.render('calculadorajubi'); 
});
app.get('*', (req,res)=> {
    res.sendFile(__dirname + '/views/404.html')
})
app.listen(port, () => {
    console.log(`Escuchando en http://localhost:${port}`);
})