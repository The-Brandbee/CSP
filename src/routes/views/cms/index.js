'use strict';
var csrf = require('csurf');
var csrfProtection = csrf();
var error = require('../../error');
var auth = require('../../auth/authenticate');
var users = require('./users.js');
var about = require('./about')
var homebanner = require('./homebanner')
var ourrange = require('./ourrange')
var product = require('./product')
var blogs = require('./blogs');
var footer = require('./footer');
var sidenav = require('./sidenav');
var latestinnovation = require('./latestinnovation');
var ourteam = require('./ourteam');
var testimonial = require('./testimonial');
var projectcategory = require('./projectcategory');
var projectproperty = require('./projectproperty');
var contactus = require('./contactus');
var collaborations = require('./collaborations');
var ourbusinesses = require('./ourbusinesses');
var projectpropertydetails = require('./projectpropertydetails');
var project = require('./project');
var aboutfeature = require('./aboutfeature');
var productimage = require('./productimage');
var artcat = require('./artcat');
var artdetails = require('./artdetails');
var enquiry = require('./enquiry');
var location = require('./location');



module.exports = function(app) {


      //enquiry
  app.get(
    "/cms/enquiry/manage",
    auth.checkSessionUser,
    auth.checkAccessControl,
    enquiry.manage,
    error
  );
  app.get(
    "/cms/enquiry/edit/:id",
    auth.checkSessionUser,
    auth.checkAccessControl,
    enquiry.edit,
    error
  );
  app.post("/cms/enquiry/add", auth.checkSessionUser, enquiry.addPost, error);
  app.post(
    "/cms/enquiry/edit/:id",
    auth.checkSessionUser,
    enquiry.editPost,
    error
  );
  app.post(
    "/cms/enquiry/delete",
    auth.checkSessionUser,
    enquiry.deletePost,
    error
  );
  app.get(
    "/cms/enquiry/add",
    auth.checkSessionUser,
    auth.checkAccessControl,
    enquiry.add,
    error
  );
  app.post("/cms/enquiry/add", auth.checkSessionUser, enquiry.addPost, error);
  app.post(
    "/cms/enquiry/edit/:id",
    auth.checkSessionUser,
    enquiry.editPost,
    error
  );

    //Login routes
    app.get('/cms/login', csrfProtection, users.login, error);
    app.get('/cms/logout', users.logout, error);
    app.get('/cms/dashboard', auth.checkSessionUser, users.dashboard, error);

    app.post('/cms/login', csrfProtection, users.loginPost, error);

    //About routes
    app.get('/cms/about/add', auth.checkSessionUser,auth.checkAccessControl, about.add,error);
    app.get('/cms/about/manage', auth.checkSessionUser,auth.checkAccessControl, about.manage,error);
    app.get('/cms/about/edit/:id', auth.checkSessionUser, auth.checkAccessControl,about.edit, error);
    
    app.get('/cms/homebanner/add', auth.checkSessionUser,auth.checkAccessControl, homebanner.add,error);
    app.get('/cms/homebanner/manage', auth.checkSessionUser,auth.checkAccessControl, homebanner.manage,error);
    app.get('/cms/homebanner/edit/:id', auth.checkSessionUser, auth.checkAccessControl,homebanner.edit, error);

    app.get('/cms/ourrange/add', auth.checkSessionUser,auth.checkAccessControl, ourrange.add,error);
    app.get('/cms/ourrange/manage', auth.checkSessionUser,auth.checkAccessControl, ourrange.manage,error);
    app.get('/cms/ourrange/edit/:id', auth.checkSessionUser, auth.checkAccessControl,ourrange.edit, error);

    app.get('/cms/product/add', auth.checkSessionUser,auth.checkAccessControl, product.add,error);
    app.get('/cms/product/manage', auth.checkSessionUser,auth.checkAccessControl, product.manage,error);
    app.get('/cms/product/edit/:id', auth.checkSessionUser, auth.checkAccessControl,product.edit, error);


    app.post('/cms/about/add', auth.checkSessionUser, about.addPost,error);
    app.post('/cms/about/edit/:id', auth.checkSessionUser, about.editPost, error);
    app.post('/cms/about/delete', auth.checkSessionUser, about.deletePost, error);
    
    //homebanner
    app.get('/cms/homebanner/add', auth.checkSessionUser,auth.checkAccessControl, homebanner.add,error);
    app.get('/cms/homebanner/manage', auth.checkSessionUser,auth.checkAccessControl, homebanner.manage,error);
    app.get('/cms/homebanner/edit/:id', auth.checkSessionUser, auth.checkAccessControl,homebanner.edit, error);

    app.post('/cms/homebanner/add', auth.checkSessionUser, homebanner.addPost,error);
    app.post('/cms/homebanner/edit/:id', auth.checkSessionUser, homebanner.editPost, error);
    app.post('/cms/homebanner/delete', auth.checkSessionUser, homebanner.deletePost, error);
    
    // Blogs
    app.get('/cms/blogs/add', auth.checkSessionUser,auth.checkAccessControl, blogs.add,error);
    app.get('/cms/blogs/manage', auth.checkSessionUser,auth.checkAccessControl, blogs.manage,error);
    app.get('/cms/blogs/edit/:id', auth.checkSessionUser, auth.checkAccessControl,blogs.edit, error);
    
    app.post('/cms/blogs/add', auth.checkSessionUser, blogs.addPost,error);
    app.post('/cms/blogs/edit/:id', auth.checkSessionUser, blogs.editPost, error);
    app.post('/cms/blogs/delete', auth.checkSessionUser, blogs.deletePost, error);


    //footer
    app.get("/cms/footer/manage",auth.checkSessionUser,auth.checkAccessControl,footer.manage,error);
    app.get("/cms/footer/edit/:id",auth.checkSessionUser,auth.checkAccessControl,footer.edit,error);
    app.get("/cms/footer/add",auth.checkSessionUser,auth.checkAccessControl,footer.add,error);

    app.post("/cms/footer/add", auth.checkSessionUser, footer.addPost, error);
    app.post("/cms/footer/edit/:id",auth.checkSessionUser,footer.editPost,error);
    app.post("/cms/footer/delete",auth.checkSessionUser,footer.deletePost,error);


    //sidenav
    app.get("/cms/sidenav/add",auth.checkSessionUser,auth.checkAccessControl,sidenav.add,error);
    app.get("/cms/sidenav/edit/:id",auth.checkSessionUser,auth.checkAccessControl,sidenav.edit,error);
    app.get("/cms/sidenav/manage",auth.checkSessionUser,auth.checkAccessControl,sidenav.manage,error);

    app.post("/cms/sidenav/add", auth.checkSessionUser, sidenav.addPost, error);
    app.post("/cms/sidenav/edit/:id",auth.checkSessionUser,sidenav.editPost,error);
    app.post("/cms/sidenav/delete",auth.checkSessionUser,sidenav.deletePost,error);

    //latestinnovation
    app.get('/cms/latestinnovation/add', auth.checkSessionUser,auth.checkAccessControl, latestinnovation.add,error);
    app.get('/cms/latestinnovation/manage', auth.checkSessionUser,auth.checkAccessControl, latestinnovation.manage,error);
    app.get('/cms/latestinnovation/edit/:id', auth.checkSessionUser, auth.checkAccessControl,latestinnovation.edit, error);

    app.post('/cms/latestinnovation/add', auth.checkSessionUser, latestinnovation.addPost,error);
    app.post('/cms/latestinnovation/edit/:id', auth.checkSessionUser, latestinnovation.editPost, error);
    app.post('/cms/latestinnovation/delete', auth.checkSessionUser, latestinnovation.deletePost, error);

    //ourteam
    app.get('/cms/ourteam/add', auth.checkSessionUser,auth.checkAccessControl, ourteam.add,error);
    app.get('/cms/ourteam/manage', auth.checkSessionUser,auth.checkAccessControl, ourteam.manage,error);
    app.get('/cms/ourteam/edit/:id', auth.checkSessionUser, auth.checkAccessControl,ourteam.edit, error);

    app.post('/cms/ourteam/add', auth.checkSessionUser, ourteam.addPost,error);
    app.post('/cms/ourteam/edit/:id', auth.checkSessionUser, ourteam.editPost, error);
    app.post('/cms/ourteam/delete', auth.checkSessionUser, ourteam.deletePost, error);

    //testimonial
    app.get('/cms/testimonial/add', auth.checkSessionUser,auth.checkAccessControl, testimonial.add,error);
    app.get('/cms/testimonial/manage', auth.checkSessionUser,auth.checkAccessControl, testimonial.manage,error);
    app.get('/cms/testimonial/edit/:id', auth.checkSessionUser, auth.checkAccessControl,testimonial.edit, error);

    app.post('/cms/testimonial/add', auth.checkSessionUser, testimonial.addPost,error);
    app.post('/cms/testimonial/edit/:id', auth.checkSessionUser, testimonial.editPost, error);
    app.post('/cms/testimonial/delete', auth.checkSessionUser, testimonial.deletePost, error);

    //projectcategory
    app.get('/cms/projectcategory/add', auth.checkSessionUser,auth.checkAccessControl, projectcategory.add,error);
    app.get('/cms/projectcategory/manage', auth.checkSessionUser,auth.checkAccessControl, projectcategory.manage,error);
    app.get('/cms/projectcategory/edit/:id', auth.checkSessionUser, auth.checkAccessControl,projectcategory.edit, error);

    app.post('/cms/ourrange/add', auth.checkSessionUser, ourrange.addPost,error);
    app.post('/cms/ourrange/edit/:id', auth.checkSessionUser, ourrange.editPost, error);
    app.post('/cms/ourrange/delete', auth.checkSessionUser, ourrange.deletePost, error);

    app.post('/cms/product/add', auth.checkSessionUser, product.addPost,error);
    app.post('/cms/product/edit/:id', auth.checkSessionUser, product.editPost, error);
    app.post('/cms/product/delete', auth.checkSessionUser, product.deletePost, error);

    app.post('/cms/projectcategory/add', auth.checkSessionUser, projectcategory.addPost,error);
    app.post('/cms/projectcategory/edit/:id', auth.checkSessionUser, projectcategory.editPost, error);
    app.post('/cms/projectcategory/delete', auth.checkSessionUser, projectcategory.deletePost, error);
  

    //projectproperty
    app.get('/cms/projectproperty/add', auth.checkSessionUser,auth.checkAccessControl, projectproperty.add,error);
    app.get('/cms/projectproperty/manage', auth.checkSessionUser,auth.checkAccessControl, projectproperty.manage,error);
    app.get('/cms/projectproperty/edit/:id', auth.checkSessionUser, auth.checkAccessControl,projectproperty.edit, error);

    app.post('/cms/projectproperty/add', auth.checkSessionUser, projectproperty.addPost,error);
    app.post('/cms/projectproperty/edit/:id', auth.checkSessionUser, projectproperty.editPost, error);
    app.post('/cms/projectproperty/delete', auth.checkSessionUser, projectproperty.deletePost, error);

    //contactus
    app.get('/cms/contactus/add', auth.checkSessionUser,auth.checkAccessControl, contactus.add,error);
    app.get('/cms/contactus/manage', auth.checkSessionUser,auth.checkAccessControl, contactus.manage,error);
    app.get('/cms/contactus/edit/:id', auth.checkSessionUser, auth.checkAccessControl,contactus.edit, error);

    app.post('/cms/contactus/add', auth.checkSessionUser, contactus.addPost,error);
    app.post('/cms/contactus/edit/:id', auth.checkSessionUser, contactus.editPost, error);
    app.post('/cms/contactus/delete', auth.checkSessionUser, contactus.deletePost, error);


    //collaborations
    app.get('/cms/collaborations/add', auth.checkSessionUser,auth.checkAccessControl, collaborations.add,error);
    app.get('/cms/collaborations/manage', auth.checkSessionUser,auth.checkAccessControl, collaborations.manage,error);
    app.get('/cms/collaborations/edit/:id', auth.checkSessionUser, auth.checkAccessControl,collaborations.edit, error);

    app.post('/cms/collaborations/add', auth.checkSessionUser, collaborations.addPost,error);
    app.post('/cms/collaborations/edit/:id', auth.checkSessionUser, collaborations.editPost, error);
    app.post('/cms/collaborations/delete', auth.checkSessionUser, collaborations.deletePost, error);

    //ourbusinesses
    app.get('/cms/ourbusinesses/add', auth.checkSessionUser,auth.checkAccessControl, ourbusinesses.add,error);
    app.get('/cms/ourbusinesses/manage', auth.checkSessionUser,auth.checkAccessControl, ourbusinesses.manage,error);
    app.get('/cms/ourbusinesses/edit/:id', auth.checkSessionUser, auth.checkAccessControl,ourbusinesses.edit, error);

    app.post('/cms/ourbusinesses/add', auth.checkSessionUser, ourbusinesses.addPost,error);
    app.post('/cms/ourbusinesses/edit/:id', auth.checkSessionUser, ourbusinesses.editPost, error);
    app.post('/cms/ourbusinesses/delete', auth.checkSessionUser, ourbusinesses.deletePost, error);

    //projectpropertydetails
    app.get('/cms/projectpropertydetails/add', auth.checkSessionUser,auth.checkAccessControl, projectpropertydetails.add,error);
    app.get('/cms/projectpropertydetails/manage', auth.checkSessionUser,auth.checkAccessControl, projectpropertydetails.manage,error);
    app.get('/cms/projectpropertydetails/edit/:id', auth.checkSessionUser, auth.checkAccessControl,projectpropertydetails.edit, error);

    app.post('/cms/projectpropertydetails/add', auth.checkSessionUser, projectpropertydetails.addPost,error);
    app.post('/cms/projectpropertydetails/edit/:id', auth.checkSessionUser, projectpropertydetails.editPost, error);
    app.post('/cms/projectpropertydetails/delete', auth.checkSessionUser, projectpropertydetails.deletePost, error);

    //project
    app.get('/cms/project/add', auth.checkSessionUser,auth.checkAccessControl, project.add,error);
    app.get('/cms/project/manage', auth.checkSessionUser,auth.checkAccessControl, project.manage,error);
    app.get('/cms/project/edit/:id', auth.checkSessionUser, auth.checkAccessControl,project.edit, error);

    app.post('/cms/project/add', auth.checkSessionUser, project.addPost,error);
    app.post('/cms/project/edit/:id', auth.checkSessionUser, project.editPost, error);
    app.post('/cms/project/delete', auth.checkSessionUser, project.deletePost, error);


    //aboutfeature
    app.get('/cms/aboutfeature/add', auth.checkSessionUser,auth.checkAccessControl, aboutfeature.add,error);
    app.get('/cms/aboutfeature/manage', auth.checkSessionUser,auth.checkAccessControl, aboutfeature.manage,error);
    app.get('/cms/aboutfeature/edit/:id', auth.checkSessionUser, auth.checkAccessControl,aboutfeature.edit, error);

    app.post('/cms/aboutfeature/add', auth.checkSessionUser, aboutfeature.addPost,error);
    app.post('/cms/aboutfeature/edit/:id', auth.checkSessionUser, aboutfeature.editPost, error);
    app.post('/cms/aboutfeature/delete', auth.checkSessionUser, aboutfeature.deletePost, error);


    //productimage
    app.get('/cms/productimage/add', auth.checkSessionUser,auth.checkAccessControl, productimage.add,error);
    app.get('/cms/productimage/manage', auth.checkSessionUser,auth.checkAccessControl, productimage.manage,error);
    app.get('/cms/productimage/edit/:id', auth.checkSessionUser, auth.checkAccessControl,productimage.edit, error);

    app.post('/cms/productimage/add', auth.checkSessionUser, productimage.addPost,error);
    app.post('/cms/productimage/edit/:id', auth.checkSessionUser, productimage.editPost, error);
    app.post('/cms/productimage/delete', auth.checkSessionUser, productimage.deletePost, error); 
    
    
    //artcat
    app.get('/cms/artcat/add', auth.checkSessionUser,auth.checkAccessControl, artcat.add,error);
    app.get('/cms/artcat/manage', auth.checkSessionUser,auth.checkAccessControl, artcat.manage,error);
    app.get('/cms/artcat/edit/:id', auth.checkSessionUser, auth.checkAccessControl,artcat.edit, error);

    app.post('/cms/artcat/add', auth.checkSessionUser, artcat.addPost,error);
    app.post('/cms/artcat/edit/:id', auth.checkSessionUser, artcat.editPost, error);
    app.post('/cms/artcat/delete', auth.checkSessionUser, artcat.deletePost, error);    


    //artdetails
    app.get('/cms/artdetails/add', auth.checkSessionUser,auth.checkAccessControl, artdetails.add,error);
    app.get('/cms/artdetails/manage', auth.checkSessionUser,auth.checkAccessControl, artdetails.manage,error);
    app.get('/cms/artdetails/edit/:id', auth.checkSessionUser, auth.checkAccessControl,artdetails.edit, error);

    app.post('/cms/artdetails/add', auth.checkSessionUser, artdetails.addPost,error);
    app.post('/cms/artdetails/edit/:id', auth.checkSessionUser, artdetails.editPost, error);
    app.post('/cms/artdetails/delete', auth.checkSessionUser, artdetails.deletePost, error);   


    //location
    app.get('/cms/location/add', auth.checkSessionUser,auth.checkAccessControl, location.add,error);
    app.get('/cms/location/manage', auth.checkSessionUser,auth.checkAccessControl, location.manage,error);
    app.get('/cms/location/edit/:id', auth.checkSessionUser, auth.checkAccessControl,location.edit, error);

    app.post('/cms/location/add', auth.checkSessionUser, location.addPost,error);
    app.post('/cms/location/edit/:id', auth.checkSessionUser, location.editPost, error);
    app.post('/cms/location/delete', auth.checkSessionUser, location.deletePost, error);  
    
};
