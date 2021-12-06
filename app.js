var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

// Database
var database = require('./config/database');

var empleadosRouter = require('./routes/empleados.router');
var usuariosRouter = require('./routes/usuarios.router');
var productosRouter = require('./routes/productos.router');
var ventasRouter = require('./routes/ventas.router');
var proveedoresRouter = require('./routes/proveedores.router');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

// MONGO CONNECTION
database.mongoConnect();

// ROUTER
app.use('/usuarios', usuariosRouter);
app.use('/empleados', empleadosRouter);
app.use('/productos', productosRouter);
app.use('/ventas', ventasRouter);
app.use('/proveedores', proveedoresRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});

module.exports = app;
