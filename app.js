const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const essRoutes = require('./routes/essential');
const coronaRoutes = require('./routes/coronaCases');
const detailsRoutes = require('./routes/details');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use(essRoutes);
app.use(coronaRoutes);
app.use(detailsRoutes);
//app.use('/essential', essRoutes.route);


app.use((req, res, next) => {
  //res.status(404).render('404', { pageTitle: 'Page Not Found' });
  res.status(404).sendFile(path.join(__dirname,'.', 'views', '404.ejs'));
});

app.listen(8080);
