'use strict';
var request = require('request');
var common = require('./common');
var moment = require('moment');

var projectpropertydetails = {
    add: function(req, res, next) {
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/project/add', req.headers.cookie, 'POST', req.body, req.files),
            common.apiRequest(req.protocol + "://" + req.get("host") + "/api/product",req.headers.cookie,"GET",) ,      
            common.apiRequest(req.protocol + "://" + req.get("host") + "/api/projectproperty",req.headers.cookie,"GET",)       
        ];
          
        Promise.all(requestData).then((postResult) => {
                res.render('cms/projectpropertydetails-add.ejs', {
                    response: 'success',
                    product: postResult[1],
                    projectproperty: postResult[2],
                    msg: 'Added successfully.'
                });
            }).catch(err => {
                res.render('cms/projectpropertydetails-add.ejs', {
                    response: 'error',
                    msg: err
                });
            });

        // res.render('cms/projectpropertydetails-add.ejs', {
        //     response: ''
        // });
    },

    addPost: function(req, res, next) {     
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/projectpropertydetails/add', req.headers.cookie, 'POST', req.body, req.files),
            common.apiRequest(req.protocol + "://" + req.get("host") + "/api/projectproperty",req.headers.cookie,"GET",)       
        ];

        Promise.all(requestData).then((postResult) => {
                res.render('cms/projectpropertydetails-add.ejs', {
                    response: 'success',
                    projectproperty: postResult[1],
                    msg: 'Added successfully.'
                });
            }).catch(err => {
                res.render('cms/projectpropertydetails-add.ejs', {
                    response: 'error',
                    msg: err
                });
            });
    },

    manage: function(req, res, next) {

        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/projectpropertydetails', req.headers.cookie, 'GET')
            .then((result) => {
                res.render('cms/projectpropertydetails-manage.ejs', { projectpropertydetails: result,moment: moment });
            }).catch(err => {
                console.log(err);
                res.render('cms/projectpropertydetails-manage.ejs');
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
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/projectpropertydetails/' + req.params.id, req.headers.cookie, 'GET'),
            common.apiRequest(req.protocol + "://" + req.get("host") + "/api/projectproperty",req.headers.cookie,"GET",)       
        ];

        Promise.all(requestData).then((data) => {
            res.render('cms/projectpropertydetails-edit.ejs', {
               // _csrf: req.csrfToken(),
               projectpropertydetails: data[0],
               projectproperty: data[1],
                response: ''
            });

        }).catch(err => {
            res.render('cms/projectpropertydetails-edit.ejs', {
                response: 'error',
                msg: err
            });
        });
    },

    editPost: function(req, res, next) {
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/projectpropertydetails/update', req.headers.cookie, 'POST', req.body, req.files),
            common.apiRequest(req.protocol + "://" + req.get("host") + "/api/projectproperty",req.headers.cookie,"GET",)       
        ];
        Promise.all(requestData).then((data) => {
            res.render('cms/projectpropertydetails-edit.ejs', {
                projectpropertydetails: data[0],
                projectproperty: data[1],
                response: 'success',
                msg: 'Updated successfully.'
            });

        }).catch(err => {
           // console.log(err);
            res.render('cms/projectpropertydetails-edit.ejs', {
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
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/projectpropertydetails/delete', req.headers.cookie, 'POST', req.body),
        
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
module.exports = projectpropertydetails;