'use strict';
var request = require('request');
var common = require('./common');
var moment = require('moment');

var artdetails = {
    add: function(req, res, next) {
        var requestData = [
            common
        .apiRequest(
          req.protocol + "://" + req.get("host") + "/api/artcat",
          req.headers.cookie,
          "GET",
        ),
         common.apiRequest(req.protocol + "://" + req.get("host") + "/api/product",req.headers.cookie,"GET",)       
        ];
       
        Promise.all(requestData).then((result) => {
          res.render("cms/artdetails-add.ejs", {
            artcat: result[0],
            product: result[1],
            response: "",
            msg: "",
          });
        })
        .catch((err) => {
          res.render("cms/artdetails-add.ejs", {
            response: "error",
            msg: err,
          });
        });
        // res.render('cms/artdetails-add.ejs', {
        //     response: ''
        // });
    },

    addPost: function(req, res, next) {             
       var requestData = [
        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/artdetails/add', req.headers.cookie, 'POST', req.body, req.files),
        common.apiRequest(
              req.protocol + "://" + req.get("host") + "/api/artcat",
              req.headers.cookie,
              "GET",
            ),
            common.apiRequest(
                req.protocol + "://" + req.get("host") + "/api/product",
                req.headers.cookie,
                "GET",
              )
            
        ];   
            Promise.all(requestData).then((postResult) => {
                
                res.render('cms/artdetails-add.ejs', {
                    response: 'success',
                    artcat: postResult[1],
                    product: postResult[2],
                    msg: 'artdetails  added successfully.'
                });
            }).catch(err => {
                res.render('cms/artdetails-add.ejs', {
                    response: 'error',
                    msg: err
                });
            });
    },

    manage: function(req, res, next) {

        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/artdetails', req.headers.cookie, 'GET')
            .then((result) => {
                res.render('cms/artdetails-manage.ejs', { artdetails: result,moment: moment });
            }).catch(err => {
                console.log(err);
                res.render('cms/artdetails-manage.ejs');
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
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/artdetails/' + req.params.id, req.headers.cookie, 'GET'),
            common.apiRequest(
              req.protocol + "://" + req.get("host") + "/api/artcat",
              req.headers.cookie,
              "GET",
            ),
            common.apiRequest(
                req.protocol + "://" + req.get("host") + "/api/product",
                req.headers.cookie,
                "GET",
              ),
        ];

        Promise.all(requestData).then((data) => {
            
            res.render('cms/artdetails-edit.ejs', {
               // _csrf: req.csrfToken(),
               artdetails: data[0],
               artcat: data[1],
               product: data[2],
                response: ''
            });

        }).catch(err => {
            res.render('cms/artdetails-edit.ejs', {
                response: 'error',
                msg: err
            });
        });
    },

    editPost: function(req, res, next) {
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/artdetails/update', req.headers.cookie, 'POST', req.body, req.files),
            common.apiRequest(
                req.protocol + "://" + req.get("host") + "/api/artcat",
                req.headers.cookie,
                "GET",
              ),
              common.apiRequest(
                req.protocol + "://" + req.get("host") + "/api/product",
                req.headers.cookie,
                "GET",
              )
        ];
        Promise.all(requestData).then((data) => {
            res.render('cms/artdetails-edit.ejs', {
                artdetails: data[0],
                artcat: data[1],
                product: data[2],
                response: 'success',
                msg: 'Updated successfully.'
            });

        }).catch(err => {
           // console.log(err);
            res.render('cms/artdetails-edit.ejs', {
                response: 'error',
                msg: err
            });
        });
    },

    deletePost:function(req, res, next) {
        // console.log(req.body);
         if (!req.body || !req.body.id) {
             return next(ec.appError({
                 status: ec.INVALID_ID,
                 message: "invalid id provided."
             }));
         }
     
         var requestData = [
             common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/artdetails/delete', req.headers.cookie, 'POST', req.body),
         
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
module.exports = artdetails;