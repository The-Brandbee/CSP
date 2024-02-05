'use strict';
var request = require('request');
var common = require('./common');
var moment = require('moment');

var project = {
    add: function(req, res, next) {
        var requestData = [
            common
        .apiRequest(
          req.protocol + "://" + req.get("host") + "/api/product",
          req.headers.cookie,
          "GET",
        ),
         common.apiRequest(req.protocol + "://" + req.get("host") + "/api/projectpropertydetails",req.headers.cookie,"GET",),    
         common.apiRequest(req.protocol + "://" + req.get("host") + "/api/project",req.headers.cookie,"GET",),
         common.apiRequest(req.protocol + "://" + req.get("host") + "/api/location",req.headers.cookie,"GET",),
                
        ];
       
        Promise.all(requestData).then((result) => {
          res.render("cms/project-add.ejs", {
            product: result[0],
            projectpropertydetails: result[1],
            project: result[2],
            location: result[3],
            response: "",
            msg: "",
          });
        })
        .catch((err) => {
          res.render("cms/project-add.ejs", {
            response: "error",
            msg: err,
          });
        });
    },

    addPost: function(req, res, next) {   
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/project/add', req.headers.cookie, 'POST', req.body, req.files),
            common.apiRequest(req.protocol + "://" + req.get("host") + "/api/product",req.headers.cookie,"GET",),     
            common.apiRequest(req.protocol + "://" + req.get("host") + "/api/projectpropertydetails",req.headers.cookie,"GET",),       
            common.apiRequest(req.protocol + "://" + req.get("host") + "/api/project",req.headers.cookie,"GET",) , 
            common.apiRequest(req.protocol + "://" + req.get("host") + "/api/location",req.headers.cookie,"GET",),     
        ];
          
        Promise.all(requestData).then((postResult) => {
                res.render('cms/project-add.ejs', {
                    response: 'success',
                    product: postResult[1],
                    projectpropertydetails: postResult[2],
                    project: postResult[3],
                    location: postResult[4],
                    msg: 'Added successfully.'
                });
            }).catch(err => {
                res.render('cms/project-add.ejs', {
                    response: 'error',
                    msg: err
                });
            });
    },

    manage: function(req, res, next) {

        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/project', req.headers.cookie, 'GET')
            .then((result) => {
                res.render('cms/project-manage.ejs', { project: result,moment: moment });
            }).catch(err => {
                console.log(err);
                res.render('cms/project-manage.ejs');
            });
    },

    edit: function(req, res, next) {
        if (!req.params || !req.params.id) {
            return next(ec.appError({
                status: ec.INVALID_ID,
                message: "invalid id provided."
            }));
        }

        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/project/' + req.params.id, req.headers.cookie, 'GET'),
            common.apiRequest(req.protocol + "://" + req.get("host") + "/api/product",req.headers.cookie,"GET",),
            common.apiRequest(req.protocol + "://" + req.get("host") + "/api/projectpropertydetails",req.headers.cookie,"GET",) ,      
            common.apiRequest(req.protocol + "://" + req.get("host") + "/api/project",req.headers.cookie,"GET",),       
            common.apiRequest(req.protocol + "://" + req.get("host") + "/api/location",req.headers.cookie,"GET",)       
        
        ];

        Promise.all(requestData).then((data) => {
            res.render('cms/project-edit.ejs', {
               // _csrf: req.csrfToken(),
               project: data[0],
               product: data[1],
               projectpropertydetails: data[2],
               projects: data[3],
               location: data[4],
                response: ''
            });

        }).catch(err => {
            res.render('cms/project-edit.ejs', {
                response: 'error',
                msg: err
            });
        });
    },

    editPost: function(req, res, next) {
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/project/update', req.headers.cookie, 'POST', req.body, req.files),
            common.apiRequest(req.protocol + "://" + req.get("host") + "/api/projectpropertydetails",req.headers.cookie,"GET",)   ,
            common.apiRequest(req.protocol + "://" + req.get("host") + "/api/product",req.headers.cookie,"GET",),
            common.apiRequest(req.protocol + "://" + req.get("host") + "/api/project",req.headers.cookie,"GET",),
            common.apiRequest(req.protocol + "://" + req.get("host") + "/api/location",req.headers.cookie,"GET",),
        ];
        Promise.all(requestData).then((data) => {
            res.render('cms/project-edit.ejs', {
                project: data[0],
                projectpropertydetails: data[1],
                product: data[2],
                projects: data[3],
                location: data[4],
                response: 'success',
                msg: 'Updated successfully.'
            });

        }).catch(err => {
           // console.log(err);
            res.render('cms/project-edit.ejs', {
                response: 'error',
                msg: err
            });
        });
    },

    deletePost:function(req, res, next) {
        if (!req.body || !req.body.id) {
            return next(ec.appError({
                status: ec.INVALID_ID,
                message: "invalid id provided."
            }));
        }
    
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/project/delete', req.headers.cookie, 'POST', req.body),
        
        ];
    
        let result = {success: false};
    
        Promise.all(requestData).then((data) => {
            result = data;
    
        }).catch(err => {
            console.log("e:", err)
        });
    
            res.json({success: true});
      
    },
};
module.exports = project;