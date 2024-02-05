'use strict';
var request = require('request');
var common = require('./common');
var moment = require('moment');

var product = {
    add: function(req, res, next) {
        common
        .apiRequest(
          req.protocol + "://" + req.get("host") + "/api/ourrange",
          req.headers.cookie,
          "GET",
        )
        .then((result) => {
          res.render("cms/product-add.ejs", {
            range: result,
            response: "",
            msg: "",
          });
        })
        .catch((err) => {
          res.render("cms/product-add.ejs", {
            response: "error",
            msg: err,
          });
        });
        // res.render('cms/product-add.ejs', {
        //     response: ''
        // });
    },

    addPost: function(req, res, next) {             
       var requestData = [
        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/product/add', req.headers.cookie, 'POST', req.body, req.files),
        common.apiRequest(
              req.protocol + "://" + req.get("host") + "/api/ourrange",
              req.headers.cookie,
              "GET",
            )];   
            Promise.all(requestData).then((postResult) => {
                
                res.render('cms/product-add.ejs', {
                    response: 'success',
                    range: postResult[1],
                    msg: 'Product  added successfully.'
                });
            }).catch(err => {
                res.render('cms/product-add.ejs', {
                    response: 'error',
                    msg: err
                });
            });
    },

    manage: function(req, res, next) {

        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/product', req.headers.cookie, 'GET')
            .then((result) => {
                res.render('cms/product-manage.ejs', { product: result,moment: moment });
            }).catch(err => {
                console.log(err);
                res.render('cms/product-manage.ejs');
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
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/product/' + req.params.id, req.headers.cookie, 'GET'),
            common.apiRequest(
              req.protocol + "://" + req.get("host") + "/api/ourrange",
              req.headers.cookie,
              "GET",
            )];

        Promise.all(requestData).then((data) => {
            
            res.render('cms/product-edit.ejs', {
               // _csrf: req.csrfToken(),
               product: data[0],
               range: data[1],
                response: ''
            });

        }).catch(err => {
            res.render('cms/product-edit.ejs', {
                response: 'error',
                msg: err
            });
        });
    },

    editPost: function(req, res, next) {
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/product/update', req.headers.cookie, 'POST', req.body, req.files),
            common.apiRequest(
                req.protocol + "://" + req.get("host") + "/api/ourrange",
                req.headers.cookie,
                "GET",
              )
        ];
        Promise.all(requestData).then((data) => {
            res.render('cms/product-edit.ejs', {
                product: data[0],
                range: data[1],
                response: 'success',
                msg: 'Updated successfully.'
            });

        }).catch(err => {
           // console.log(err);
            res.render('cms/product-edit.ejs', {
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
             common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/product/delete', req.headers.cookie, 'POST', req.body),
         
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
module.exports = product;