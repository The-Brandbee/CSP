'use strict';
var request = require('request');
var common = require('./common');
var moment = require('moment');

var projectproperty = {
    add: function(req, res, next) {
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/project/add', req.headers.cookie, 'POST', req.body, req.files),
            common.apiRequest(req.protocol + "://" + req.get("host") + "/api/product",req.headers.cookie,"GET",) ,      
            common.apiRequest(req.protocol + "://" + req.get("host") + "/api/projectcategory",req.headers.cookie,"GET",)       
        ];
          
        Promise.all(requestData).then((postResult) => {
                res.render('cms/projectproperty-add.ejs', {
                    response: 'success',
                    product: postResult[1],
                    projectcategory: postResult[2],
                    msg: 'Added successfully.'
                });
            }).catch(err => {
                res.render('cms/projectproperty-add.ejs', {
                    response: 'error',
                    msg: err
                });
            });
        // res.render('cms/projectproperty-add.ejs', {
        //     response: ''
        // });
    },

    addPost: function(req, res, next) {     
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/projectproperty/add', req.headers.cookie, 'POST', req.body, req.files),
            common.apiRequest(req.protocol + "://" + req.get("host") + "/api/projectcategory",req.headers.cookie,"GET",)       
        ];        
        Promise.all(requestData).then((postResult) => {
                res.render('cms/projectproperty-add.ejs', {
                    response: 'success',
                    projectcategory:postResult[1],
                    msg: 'Added successfully.'
                });
            }).catch(err => {
                res.render('cms/projectproperty-add.ejs', {
                    response: 'error',
                    msg: err
                });
            });
    },

    manage: function(req, res, next) {
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/projectproperty', req.headers.cookie, 'GET'),
        ];    

            Promise.all(requestData).then((result) => {
                res.render('cms/projectproperty-manage.ejs', { projectproperty: result[0],moment: moment });
            }).catch(err => {
                console.log(err);
                res.render('cms/projectproperty-manage.ejs');
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
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/projectproperty/' + req.params.id, req.headers.cookie, 'GET'),
        common.apiRequest(req.protocol + "://" + req.get("host") + "/api/projectcategory",req.headers.cookie,"GET",)       
        ];

        Promise.all(requestData).then((data) => {
            res.render('cms/projectproperty-edit.ejs', {
               // _csrf: req.csrfToken(),
               projectproperty: data[0],
               projectcategory: data[1],
                response: ''
            });

        }).catch(err => {
            res.render('cms/projectproperty-edit.ejs', {
                response: 'error',
                msg: err
            });
        });
    },

    editPost: function(req, res, next) {
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/projectproperty/update', req.headers.cookie, 'POST', req.body, req.files),
        common.apiRequest(req.protocol + "://" + req.get("host") + "/api/projectcategory",req.headers.cookie,"GET",)       
        ];
        Promise.all(requestData).then((data) => {
            res.render('cms/projectproperty-edit.ejs', {
                projectproperty: data[0],
                projectcategory: data[1],
                response: 'success',
                msg: 'Updated successfully.'
            });

        }).catch(err => {
           // console.log(err);
            res.render('cms/projectproperty-edit.ejs', {
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
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/projectproperty/delete', req.headers.cookie, 'POST', req.body),
        
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
module.exports = projectproperty;