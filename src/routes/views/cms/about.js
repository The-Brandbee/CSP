'use strict';
var request = require('request');
var common = require('./common');
var moment = require('moment');

var about = {
    add: function(req, res, next) {

        common
        .apiRequest(
          req.protocol + "://" + req.get("host") + "/api/ourrange",
          req.headers.cookie,
          "GET",
        )
.then((result) => {

console.log({result})

        res.render('cms/about-add.ejs', {
            range:result,
            response: ''
        });
    })
    .catch((err) => {
      res.render("cms/about-add.ejs", {
        response: "error",
        msg: err,
      });
    });
    },

    addPost: function(req, res, next) {             
        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/about/add', req.headers.cookie, 'POST', req.body, req.files)
            .then((postResult) => {
                res.render('cms/about-add.ejs', {
                    response: 'success',
                    msg: 'About added successfully.'
                });
            }).catch(err => {
                res.render('cms/about-add.ejs', {
                    response: 'error',
                    msg: err
                });
            });
    },

    manage: function(req, res, next) {

        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/about', req.headers.cookie, 'GET')
            .then((result) => {
                res.render('cms/about-manage.ejs', { about: result,moment: moment });
            }).catch(err => {
                console.log(err);
                res.render('cms/about-manage.ejs');
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
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/about/' + req.params.id, req.headers.cookie, 'GET')
        ];

        Promise.all(requestData).then((data) => {
            res.render('cms/about-edit.ejs', {
               // _csrf: req.csrfToken(),
               about: data[0],
                response: ''
            });

        }).catch(err => {
            res.render('cms/about-edit.ejs', {
                response: 'error',
                msg: err
            });
        });
    },

    editPost: function(req, res, next) {
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/about/update', req.headers.cookie, 'POST', req.body, req.files)
        ];
        Promise.all(requestData).then((data) => {
            res.render('cms/about-edit.ejs', {
                about: data[0],
                response: 'success',
                msg: 'Updated successfully.'
            });

        }).catch(err => {
           // console.log(err);
            res.render('cms/about-edit.ejs', {
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
             common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/about/delete', req.headers.cookie, 'POST', req.body),
         
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
module.exports = about;