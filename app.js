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

app.get('*', (req,res)=> {
    res.sendFile(__dirname + '/public/404.html')
})


app.listen(port, () => {
    console.log(`Escuchando en http://localhost:${port}`);
})