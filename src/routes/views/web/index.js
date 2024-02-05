"use strict";

var csrf = require('csurf');
var csrfProtection = csrf();

var error = require("../../error");
const { experience } = require('./views');
const views = require("./views");

module.exports = function (app) {
  
    app.get('/', views.index, error);
    app.get('/about', views.about, error);
    app.get('/ourteam', views.ourteam, error);
    app.get('/contact', views.contact, error);
    app.get('/projectproperty/:url', views.exterior, error);
    app.get('/projectcategory/:url', views.select_property, error);
    app.get('/projectpropertydetails/:url', views.villas, error);
    app.get('/expdetails/:url', views.art, error);
    app.get('/product/:url', views.louvers, error);
    app.get('/project/:url', views.experience, error);
    app.get('/experience/:url', views.art_main, error);
    app.get('/location', views.location, error);


    app.get("*", views.pageNotFound, error);
    
}