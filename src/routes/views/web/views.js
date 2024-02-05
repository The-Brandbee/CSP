"use strict";
var request = require("request");
// var common = require("./common");
var moment = require("moment");
var ec = require("../../../lib/error_consts");
var config = require("../../../config/config");
var needle = require("needle");
const fs = require("fs");

var views = {

        index: function (req, res, next) {   
          var requestData = [  
            needle("GET",req.protocol + "://" + req.get("host") + "/api/homebanner"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/projectcategory"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/latestinnovation"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/footer"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/sidenav"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/ourteam"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/testimonial"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/collaborations"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/ourbusinesses"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/blogs"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/about"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/aboutfeature"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/ourrange"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/product"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/project"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/productimage"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/artcat"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/location"),
        ];
    

              Promise.all(requestData).then((data) => {
                res.render("web/index.ejs",{
                  banner: data[0].body,
                  projectcategory: data[1].body,
                  latestinnovation: data[2].body,
                  footer: data[3].body,
                  sidenav: data[4].body,
                  ourteam: data[5].body,
                  testimonial: data[6].body,
                  collaborations: data[7].body,
                  ourbusinesses: data[8].body,
                  blogs: data[9].body.sort((a, b) => {return new Date(b.date) - new Date(a.date)}),
                  about: data[10].body,
                  aboutfeature: data[11].body,
                  ourrange: data[12].body,
                  product: data[13].body,
                  project: data[14].body,
                  productimage: data[15].body,
                  artcat: data[16].body,
                  location: data[17].body,
                });
              })
          .catch((err) => {
              console.log(err);
              res.render("web/index.ejs");
          });
        },


        about: function (req, res, next) {   
          var requestData = [  
            needle("GET",req.protocol + "://" + req.get("host") + "/api/about"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/aboutfeature"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/footer"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/sidenav"),
            

        ];
              Promise.all(requestData).then((data) => {
                res.render("web/about.ejs",{
                  about: data[0].body,
                  aboutfeature: data[1].body,
                  footer: data[2].body,
                  sidenav: data[3].body,
                });
              })
          .catch((err) => {
              console.log(err);
              res.render("web/about.ejs");
          });
        },

        exterior: function (req, res, next) {   
          var requestData = [  
            needle("GET",req.protocol + "://" + req.get("host") + "/api/footer"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/sidenav"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/ourteam"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/projectpropertydetails"),
            needle("GET",req.protocol + "://" + req.get("host") + `/api/project-property/${req.params.url}`),


        ];
              Promise.all(requestData).then((data) => {
                console.log({data:data[4].body})
                res.render("web/exterior.ejs",{
                  footer: data[0].body,
                  sidenav: data[1].body,
                  ourteam: data[2].body,
                  projectpropertydetails: data[3].body,
                  projectproperty: data[4].body,
                });
              })
          .catch((err) => {
              console.log(err);
              res.render("web/exterior.ejs");
          });
        },

        select_property: function (req, res, next) {   
          var requestData = [  
            needle("GET",req.protocol + "://" + req.get("host") + "/api/footer"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/sidenav"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/projectproperty"),
            needle("GET",req.protocol + "://" + req.get("host") + `/api/project-category/${req.params.url}`),


        ];
              Promise.all(requestData).then((data) => {
                console.log(data[3].body)
                res.render("web/select_property.ejs",{
                  footer: data[0].body,
                  sidenav: data[1].body,
                  projectproperty: data[2].body,
                  projectcategory: data[3].body,
                });
              })
          .catch((err) => {
              console.log(err);
              res.render("web/select_property.ejs");
          });
        },


        villas: function (req, res, next) {   
          var requestData = [  
            needle("GET",req.protocol + "://" + req.get("host") + "/api/footer"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/sidenav"),
            needle("GET",req.protocol + "://" + req.get("host") + `/api/project-property-details/${req.params.url}`),
            needle("GET",req.protocol + "://" + req.get("host") + `/api/projectpropertydetails`),
            needle("GET",req.protocol + "://" + req.get("host") + `/api/project`),
            


        ];
              Promise.all(requestData).then((data) => {
                res.render("web/villas.ejs",{
                  footer: data[0].body,
                  sidenav: data[1].body,
                  projectpropertydetails: data[2].body,
                  projectpropertydetailsall: data[3].body,
                  project: data[4].body,
                });
              })
          .catch((err) => {
              console.log(err);
              res.render("web/villas.ejs");
          });
        },


        art: function (req, res, next) {   
          var requestData = [  
            needle("GET",req.protocol + "://" + req.get("host") + "/api/footer"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/sidenav"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/project"),
            needle("GET",req.protocol + "://" + req.get("host") + `/api/artdetailss/${req.params.url}`),
          
            


        ];
              Promise.all(requestData).then((data) => {
                console.log({artdetails: data[2].body})
                res.render("web/art.ejs",{
                  footer: data[0].body,
                  sidenav: data[1].body,
                  project: data[2].body,
                  artdetails: data[3].body,
                  
                 
                  

                });
              })
          .catch((err) => {
              console.log(err);
              res.render("web/art.ejs");
          });
        },

        art_main: function (req, res, next) {   
          var requestData = [  
            needle("GET",req.protocol + "://" + req.get("host") + "/api/footer"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/sidenav"),
            needle("GET",req.protocol + "://" + req.get("host") + `/api/artcats/${req.params.url}`),
            needle("GET",req.protocol + "://" + req.get("host") + `/api/artdetails`),
            needle("GET",req.protocol + "://" + req.get("host") + `/api/project`),
            needle("GET",req.protocol + "://" + req.get("host") + `/api/product`),
            


        ];
              Promise.all(requestData).then((data) => {
                console.log({  artcat:  data[2].body})
                res.render("web/art_main.ejs",{
                  footer: data[0].body,
                  sidenav: data[1].body,
                  artcat:  data[2].body,
                  artdetails:  data[3].body,
                  project:  data[4].body,
                  projects:  data[5].body,
                  
                 
                  

                });
              })
          .catch((err) => {
              console.log(err);
              res.render("web/art_main.ejs");
          });
        },

        location: function (req, res, next) {   
          var requestData = [  
            needle("GET",req.protocol + "://" + req.get("host") + "/api/footer"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/sidenav"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/location"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/project"),

        ];
              Promise.all(requestData).then((data) => {
                console.log({  artcat:  data[1].body})
                res.render("web/featured-project.ejs",{
                  footer: data[0].body,
                  sidenav: data[1].body,
                  location: data[2].body,
                  project: data[3].body,
                });
              })
          .catch((err) => {
              console.log(err);
              res.render("web/featured-project.ejs");
          });
        },


        louvers: function (req, res, next) {   
          var requestData = [  
            needle("GET",req.protocol + "://" + req.get("host") + "/api/footer"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/sidenav"),
            needle("GET",req.protocol + "://" + req.get("host") + `/api/products/${req.params.url}`),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/productimage"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/product"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/project"),

        ];
              Promise.all(requestData).then((data) => {
                console.log({products: data[4].body})
                res.render("web/louvers.ejs",{
                  footer: data[0].body,
                  sidenav: data[1].body,
                  products: data[2].body,
                  productimage: data[3].body,
                  product: data[4].body,
                  project: data[5].body,
                  
                });
              })
          .catch((err) => {
              console.log(err);
              res.render("web/louvers.ejs");
          });
        },

        experience: function (req, res, next) {   
          var requestData = [  
            needle("GET",req.protocol + "://" + req.get("host") + "/api/footer"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/sidenav"),
            needle("GET",req.protocol + "://" + req.get("host") + `/api/projects/${req.params.url}`),
            needle("GET",req.protocol + "://" + req.get("host") + `/api/project`),

        ];
              Promise.all(requestData).then((data) => {

              console.log({project: data[2].body,
                projects: data[3].body,})

                res.render("web/experience.ejs",{
                  footer: data[0].body,
                  sidenav: data[1].body,
                                    project: data[2].body,
                                    projects: data[3].body,
                 
                  

                });
              })
          .catch((err) => {
              console.log(err);
              res.render("web/experience.ejs");
          });
        },




        




        ourteam: function (req, res, next) {   
          var requestData = [  
            needle("GET",req.protocol + "://" + req.get("host") + "/api/footer"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/sidenav"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/ourteam"),


        ];
              Promise.all(requestData).then((data) => {
                res.render("web/ourteam.ejs",{
                  footer: data[0].body,
                  sidenav: data[1].body,
                  ourteam: data[2].body,

                });
              })
          .catch((err) => {
              console.log(err);
              res.render("web/ourteam.ejs");
          });
        },


        contact: function (req, res, next) {   
          var requestData = [  
            needle("GET",req.protocol + "://" + req.get("host") + "/api/footer"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/sidenav"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/contactus"),


        ];
              Promise.all(requestData).then((data) => {
                res.render("web/contact.ejs",{
                  footer: data[0].body,
                  sidenav: data[1].body,
                  contactus: data[2].body,

                });
              })
          .catch((err) => {
              console.log(err);
              res.render("web/contact.ejs");
          });
        },
        

     

      pageNotFound: function (req, res, next) {
          res.send('web/404.ejs');
      },

};

module.exports = views;