const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helps');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//parcial
hbs.registerPartials(__dirname + '/views/parcial');
//expres hbs
app.set('view engine', 'hbs');



app.get("/", (req, res) => {
    // res.send('Hola mundo');
    // let salida = {
    //     nombre: 'Jorge',
    //     edad: 19,
    //     url: req.url
    // }
    // res.send(salida);
    res.render('home', {
        nombre: 'jorge jacobo'
    });

});


app.get("/about", (req, res) => {
    res.render('about');

});


// app.get('/data', (req, res) => {
//     res.send('Hola mundo');
// });
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});