const express = require('express');
const path = require('path');
const app = express();
const route = require('./routeHandlers');
const session = require('express-session');
app.set('views', path.join(__dirname,'view'));
app.set('view engine','ejs');
const port = app.get('port');
app.use('/css', express.static(path.join(__dirname,"css"))); 
app.use(express.urlencoded());
app.use(session({
    secret: 'salt for cookie signing',
  }));
app.get('/',route.homePage);
app.get('/shoppingcart', route.itemsInCart);
app.post('/addToCart',route.productDetails);
app.get('/tomato',route.registerItem);
app.get('/banana',route.registerItem);
app.get('/pumpkin',route.registerItem);

app.listen(port,route.serverMessage);