'use strict';
var request = require('request');
var common = require('./common');
var moment = require('moment');

var ourrange = {
    add: function(req, res, next) {
        res.render('cms/our-range-add.ejs', {
            response: ''
        });
    },

    addPost: function(req, res, next) {             
        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/ourrange/add', req.headers.cookie, 'POST', req.body, req.files)
            .then((postResult) => {
                res.render('cms/our-range-add.ejs', {
                    response: 'success',
                    msg: 'Our range  added successfully.'
                });
            }).catch(err => {
                res.render('cms/our-range-add.ejs', {
                    response: 'error',
                    msg: err
                });
            });
    },

    manage: function(req, res, next) {

        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/ourrange', req.headers.cookie, 'GET')
            .then((result) => {
                res.render('cms/our-range-manage.ejs', { ourrange: result,moment: moment });
            }).catch(err => {
                console.log(err);
                res.render('cms/our-range-manage.ejs');
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
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/ourrange/' + req.params.id, req.headers.cookie, 'GET')
        ];

        Promise.all(requestData).then((data) => {
            res.render('cms/our-range-edit.ejs', {
               // _csrf: req.csrfToken(),
               ourrange: data[0],
                response: ''
            });

        }).catch(err => {
            res.render('cms/our-range-edit.ejs', {
                response: 'error',
                msg: err
            });
        });
    },

    editPost: function(req, res, next) {
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/ourrange/update', req.headers.cookie, 'POST', req.body, req.files)
        ];
        Promise.all(requestData).then((data) => {
            res.render('cms/our-range-edit.ejs', {
                ourrange: data[0],
                response: 'success',
                msg: 'Updated successfully.'
            });

        }).catch(err => {
           // console.log(err);
            res.render('cms/our-range-edit.ejs', {
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
             common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/ourrange/delete', req.headers.cookie, 'POST', req.body),
         
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
module.exports = ourrange;