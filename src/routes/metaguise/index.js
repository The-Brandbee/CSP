"use strict";
var error = require("../error");
var auth = require("../auth/authenticate");
var about = require("./about")
var homebanner = require("./homebanner")
var ourrange = require("./ourrange")
var product = require("./product")
var homebanner = require("./homebanner");
var blogs = require("./blogs");
var footer = require("./footer");
var sidenav = require("./sidenav");
var latestinnovation = require("./latestinnovation");
var ourteam = require("./ourteam");
var testimonial = require("./testimonial");
var projectcategory = require("./projectcategory");
var projectproperty = require("./projectproperty");
var contactus = require("./contactus");
var collaborations = require("./collaborations");
var ourbusinesses = require("./ourbusinesses");
var projectpropertydetails = require("./projectpropertydetails");
var project = require("./project");
var aboutfeature = require("./aboutfeature");
var productimage = require("./productimage");
var artcat = require("./artcat");
var artdetails = require("./artdetails");
var enquiry = require("./enquiry");
var location = require("./location");


module.exports = function(app){

      //enquiry
  app.get("/api/enquiry", enquiry.fetchAll, error);
  app.get("/api/enquiry/:id", enquiry.fetchById, error);

  app.post(
    "/api/enquiry/add",
    // auth.checkSessionUser,
    // auth.checkAccessControl,
    enquiry.add,
    error
  );
  app.post(
    "/api/enquiry/update",
    auth.checkSessionUser,
    auth.checkAccessControl,
    enquiry.update,
    error
  );
  app.post(
    "/api/enquiry/delete",
    auth.checkSessionUser,
    auth.checkAccessControl,
    enquiry.delete,
    error
  );


    //About
    app.get("/api/about", about.fetchAll, error);
    app.get("/api/about/:id", about.fetchById, error);

    app.get("/api/homebanner", homebanner.fetchAll, error);
    app.get("/api/homebanner/:id", homebanner.fetchById, error);

    app.get("/api/ourrange", ourrange.fetchAll, error);
    app.get("/api/ourrange/:id", ourrange.fetchById, error);

    app.get("/api/product", product.fetchAll, error);
    app.get("/api/product/:id", product.fetchById, error);
    app.get("/api/products/:url", product.fetchByUrl, error);


    //Post Api
    app.post("/api/about/add",auth.checkSessionUser,auth.checkAccessControl,about.add,error);
    app.post("/api/about/update", auth.checkSessionUser,auth.checkAccessControl, about.update, error);
    app.post("/api/about/delete",auth.checkSessionUser,auth.checkAccessControl,about.delete,error);

    //Homebanner
    app.get("/api/homebanner", homebanner.fetchAll, error);
    app.get("/api/homebanner/:id", homebanner.fetchById, error);

    app.post("/api/homebanner/add",auth.checkSessionUser,auth.checkAccessControl,homebanner.add,error);
    app.post("/api/homebanner/update", auth.checkSessionUser,auth.checkAccessControl, homebanner.update, error);
    app.post("/api/homebanner/delete",auth.checkSessionUser,auth.checkAccessControl,homebanner.delete,error);

    app.post("/api/ourrange/add",auth.checkSessionUser,auth.checkAccessControl,ourrange.add,error);
    app.post("/api/ourrange/update", auth.checkSessionUser,auth.checkAccessControl, ourrange.update, error);
    app.post("/api/ourrange/delete",auth.checkSessionUser,auth.checkAccessControl,ourrange.delete,error);

    app.post("/api/product/add",auth.checkSessionUser,auth.checkAccessControl,product.add,error);
    app.post("/api/product/update", auth.checkSessionUser,auth.checkAccessControl, product.update, error);
    app.post("/api/product/delete",auth.checkSessionUser,auth.checkAccessControl,product.delete,error);
    //Blogs
    app.get("/api/blogs", blogs.fetchAll, error);
    app.get("/api/blogs/:id", blogs.fetchById, error);

    app.post("/api/blogs/add",auth.checkSessionUser,auth.checkAccessControl,blogs.add,error);
    app.post("/api/blogs/update", auth.checkSessionUser,auth.checkAccessControl, blogs.update, error);
    app.post("/api/blogs/delete",auth.checkSessionUser,auth.checkAccessControl,blogs.delete,error);
    
    
    //footer
    app.get("/api/footer", footer.fetchAll, error);
    app.get("/api/footer/:id", footer.fetchById, error);

    app.post("/api/footer/add",auth.checkSessionUser,auth.checkAccessControl,footer.add,error);
    app.post("/api/footer/update",auth.checkSessionUser,auth.checkAccessControl,footer.update,error);
    app.post("/api/footer/delete",auth.checkSessionUser,auth.checkAccessControl,footer.delete,error);

    //sidenav
    app.get("/api/sidenav", sidenav.fetchAll, error);
    app.get("/api/sidenav/:id", sidenav.fetchById, error);

    app.post("/api/sidenav/add",auth.checkSessionUser,auth.checkAccessControl,sidenav.add,error);
    app.post("/api/sidenav/update",auth.checkSessionUser,auth.checkAccessControl,sidenav.update,error);
    app.post("/api/sidenav/delete",auth.checkSessionUser,auth.checkAccessControl,sidenav.delete,error);

    //latestinnovation
    app.get("/api/latestinnovation", latestinnovation.fetchAll, error);
    app.get("/api/latestinnovation/:id", latestinnovation.fetchById, error);

    app.post("/api/latestinnovation/add",auth.checkSessionUser,auth.checkAccessControl,latestinnovation.add,error);
    app.post("/api/latestinnovation/update", auth.checkSessionUser,auth.checkAccessControl, latestinnovation.update, error);
    app.post("/api/latestinnovation/delete",auth.checkSessionUser,auth.checkAccessControl,latestinnovation.delete,error);

    //latestinnovation
    app.get("/api/ourteam", ourteam.fetchAll, error);
    app.get("/api/ourteam/:id", ourteam.fetchById, error);

    app.post("/api/ourteam/add",auth.checkSessionUser,auth.checkAccessControl,ourteam.add,error);
    app.post("/api/ourteam/update", auth.checkSessionUser,auth.checkAccessControl, ourteam.update, error);
    app.post("/api/ourteam/delete",auth.checkSessionUser,auth.checkAccessControl,ourteam.delete,error);

    //latestinnovation
    app.get("/api/testimonial", testimonial.fetchAll, error);
    app.get("/api/testimonial/:id", testimonial.fetchById, error);

    app.post("/api/testimonial/add",auth.checkSessionUser,auth.checkAccessControl,testimonial.add,error);
    app.post("/api/testimonial/update", auth.checkSessionUser,auth.checkAccessControl, testimonial.update, error);
    app.post("/api/testimonial/delete",auth.checkSessionUser,auth.checkAccessControl,testimonial.delete,error);

    //projectcategory
    app.get("/api/projectcategory", projectcategory.fetchAll, error);
    app.get("/api/projectcategory/:id", projectcategory.fetchById, error);
    app.get("/api/project-category/:url", projectcategory.fetchByUrl, error);

    app.post("/api/projectcategory/add",auth.checkSessionUser,auth.checkAccessControl,projectcategory.add,error);
    app.post("/api/projectcategory/update", auth.checkSessionUser,auth.checkAccessControl, projectcategory.update, error);
    app.post("/api/projectcategory/delete",auth.checkSessionUser,auth.checkAccessControl,projectcategory.delete,error);

    //projectproperty
    app.get("/api/projectproperty", projectproperty.fetchAll, error);
    app.get("/api/projectproperty/:id", projectproperty.fetchById, error);
    app.get("/api/project-property/:url", projectproperty.fetchByUrl, error);

    app.post("/api/projectproperty/add",auth.checkSessionUser,auth.checkAccessControl,projectproperty.add,error);
    app.post("/api/projectproperty/update", auth.checkSessionUser,auth.checkAccessControl, projectproperty.update, error);
    app.post("/api/projectproperty/delete",auth.checkSessionUser,auth.checkAccessControl,projectproperty.delete,error);

    //contactus
    app.get("/api/contactus", contactus.fetchAll, error);
    app.get("/api/contactus/:id", contactus.fetchById, error);

    app.post("/api/contactus/add",auth.checkSessionUser,auth.checkAccessControl,contactus.add,error);
    app.post("/api/contactus/update", auth.checkSessionUser,auth.checkAccessControl, contactus.update, error);
    app.post("/api/contactus/delete",auth.checkSessionUser,auth.checkAccessControl,contactus.delete,error);

    //collaborations
    app.get("/api/collaborations", collaborations.fetchAll, error);
    app.get("/api/collaborations/:id", collaborations.fetchById, error);

    app.post("/api/collaborations/add",auth.checkSessionUser,auth.checkAccessControl,collaborations.add,error);
    app.post("/api/collaborations/update", auth.checkSessionUser,auth.checkAccessControl, collaborations.update, error);
    app.post("/api/collaborations/delete",auth.checkSessionUser,auth.checkAccessControl,collaborations.delete,error);
    
    //ourbusinesses
    app.get("/api/ourbusinesses", ourbusinesses.fetchAll, error);
    app.get("/api/ourbusinesses/:id", ourbusinesses.fetchById, error);

    app.post("/api/ourbusinesses/add",auth.checkSessionUser,auth.checkAccessControl,ourbusinesses.add,error);
    app.post("/api/ourbusinesses/update", auth.checkSessionUser,auth.checkAccessControl, ourbusinesses.update, error);
    app.post("/api/ourbusinesses/delete",auth.checkSessionUser,auth.checkAccessControl,ourbusinesses.delete,error);


    //projectpropertydetails
    app.get("/api/projectpropertydetails", projectpropertydetails.fetchAll, error);
    app.get("/api/projectpropertydetails/:id", projectpropertydetails.fetchById, error);
    app.get("/api/project-property-details/:url", projectpropertydetails.fetchByUrl, error);

    app.post("/api/projectpropertydetails/add",auth.checkSessionUser,auth.checkAccessControl,projectpropertydetails.add,error);
    app.post("/api/projectpropertydetails/update", auth.checkSessionUser,auth.checkAccessControl, projectpropertydetails.update, error);
    app.post("/api/projectpropertydetails/delete",auth.checkSessionUser,auth.checkAccessControl,projectpropertydetails.delete,error);

    //project
    app.get("/api/project", project.fetchAll, error);
    app.get("/api/project/:id", project.fetchById, error);
    app.get("/api/projects/:url", project.fetchByUrl, error);

    app.post("/api/project/add",auth.checkSessionUser,auth.checkAccessControl,project.add,error);
    app.post("/api/project/update", auth.checkSessionUser,auth.checkAccessControl, project.update, error);
    app.post("/api/project/delete",auth.checkSessionUser,auth.checkAccessControl,project.delete,error);


    //aboutfeature
    app.get("/api/aboutfeature", aboutfeature.fetchAll, error);
    app.get("/api/aboutfeature/:id", aboutfeature.fetchById, error);

    app.post("/api/aboutfeature/add",auth.checkSessionUser,auth.checkAccessControl,aboutfeature.add,error);
    app.post("/api/aboutfeature/update", auth.checkSessionUser,auth.checkAccessControl, aboutfeature.update, error);
    app.post("/api/aboutfeature/delete",auth.checkSessionUser,auth.checkAccessControl,aboutfeature.delete,error);


    //productimage
    app.get("/api/productimage", productimage.fetchAll, error);
    app.get("/api/productimage/:id", productimage.fetchById, error);

    app.post("/api/productimage/add",auth.checkSessionUser,auth.checkAccessControl,productimage.add,error);
    app.post("/api/productimage/update", auth.checkSessionUser,auth.checkAccessControl, productimage.update, error);
    app.post("/api/productimage/delete",auth.checkSessionUser,auth.checkAccessControl,productimage.delete,error);    


    //artcat
    app.get("/api/artcat", artcat.fetchAll, error);
    app.get("/api/artcat/:id", artcat.fetchById, error);
    app.get("/api/artcats/:url", artcat.fetchByUrl, error);

    app.post("/api/artcat/add",auth.checkSessionUser,auth.checkAccessControl,artcat.add,error);
    app.post("/api/artcat/update", auth.checkSessionUser,auth.checkAccessControl, artcat.update, error);
    app.post("/api/artcat/delete",auth.checkSessionUser,auth.checkAccessControl,artcat.delete,error);    


    //artdetails
    app.get("/api/artdetails", artdetails.fetchAll, error);
    app.get("/api/artdetails/:id", artdetails.fetchById, error);
    app.get("/api/artdetailss/:url", artdetails.fetchByUrl, error);

    app.post("/api/artdetails/add",auth.checkSessionUser,auth.checkAccessControl,artdetails.add,error);
    app.post("/api/artdetails/update", auth.checkSessionUser,auth.checkAccessControl, artdetails.update, error);
    app.post("/api/artdetails/delete",auth.checkSessionUser,auth.checkAccessControl,artdetails.delete,error);    

    //location
    app.get("/api/location", location.fetchAll, error);
    app.get("/api/location/:id", location.fetchById, error);
    

    app.post("/api/location/add",auth.checkSessionUser,auth.checkAccessControl,location.add,error);
    app.post("/api/location/update", auth.checkSessionUser,auth.checkAccessControl, location.update, error);
    app.post("/api/location/delete",auth.checkSessionUser,auth.checkAccessControl,location.delete,error);    




};