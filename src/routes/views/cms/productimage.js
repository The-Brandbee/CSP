'use strict';
var request = require('request');
var common = require('./common');
var moment = require('moment');

var productimage = {
    add: function(req, res, next) {
        common
        .apiRequest(
          req.protocol + "://" + req.get("host") + "/api/product",
          req.headers.cookie,
          "GET",
        )
        .then((result) => {
          res.render("cms/productimage-add.ejs", {
            product: result,
            response: "",
            msg: "",
          });
        })
        .catch((err) => {
          res.render("cms/productimage-add.ejs", {
            response: "error",
            msg: err,
          });
        });
        // res.render('cms/productimage-add.ejs', {
        //     response: ''
        // });
    },

    addPost: function(req, res, next) {             
       var requestData = [
        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/productimage/add', req.headers.cookie, 'POST', req.body, req.files),
        common.apiRequest(
              req.protocol + "://" + req.get("host") + "/api/product",
              req.headers.cookie,
              "GET",
            )];   
            Promise.all(requestData).then((postResult) => {
                
                res.render('cms/productimage-add.ejs', {
                    response: 'success',
                    product: postResult[1],
                    msg: 'Product image  added successfully.'
                });
            }).catch(err => {
                res.render('cms/productimage-add.ejs', {
                    response: 'error',
                    msg: err
                });
            });
    },

    manage: function(req, res, next) {

        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/productimage', req.headers.cookie, 'GET')
            .then((result) => {
                res.render('cms/productimage-manage.ejs', { productimage: result,moment: moment });
            }).catch(err => {
                console.log(err);
                res.render('cms/productimage-manage.ejs');
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
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/productimage/' + req.params.id, req.headers.cookie, 'GET'),
            common.apiRequest(
              req.protocol + "://" + req.get("host") + "/api/product",
              req.headers.cookie,
              "GET",
            )];

        Promise.all(requestData).then((data) => {
            
            res.render('cms/productimage-edit.ejs', {
               // _csrf: req.csrfToken(),
               productimage: data[0],
               product: data[1],
                response: ''
            });

        }).catch(err => {
            res.render('cms/productimage-edit.ejs', {
                response: 'error',
                msg: err
            });
        });
    },

    editPost: function(req, res, next) {
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/productimage/update', req.headers.cookie, 'POST', req.body, req.files),
            common.apiRequest(
                req.protocol + "://" + req.get("host") + "/api/product",
                req.headers.cookie,
                "GET",
              )
        ];
        Promise.all(requestData).then((data) => {
            res.render('cms/productimage-edit.ejs', {
                productimage: data[0],
                product: data[1],
                response: 'success',
                msg: 'Updated successfully.'
            });

        }).catch(err => {
           // console.log(err);
            res.render('cms/productimage-edit.ejs', {
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
             common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/productimage/delete', req.headers.cookie, 'POST', req.body),
         
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
module.exports = productimage;