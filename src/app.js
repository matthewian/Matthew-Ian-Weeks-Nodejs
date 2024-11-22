const express = require('express')
const app = express()
const port = '8200'

app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get('/', (req, res) => res.render('pages/home', { }))
app.get('/about', (req, res) => res.render('pages/about', { }))
//app.get('/pricing', (req, res) => res.render('pages/pricing', { }))
app.get('/contact', (req, res) => res.render('pages/contact', { }))
app.get('/portfolio', (req, res) => res.render('pages/portfolio', { }))
app.get('/blog', (req, res) => res.render('pages/blog', { }))
app.get('/post', (req, res) => res.render('pages/post', { }))

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})