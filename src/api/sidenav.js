"use strict";

var path = require("path");
var fs = require("fs");

var sidenavModel = require("../model/sidenav");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var sidenav = {
  add: function (params, cb) {
    var createData = {
        title: params.title,
        nav: params.nav,
    };    

    console.log(createData);

    sidenavModel.create(createData, function (err, result) {
      if (err) {
        return cb(err);
      }

      return cb(err, result);
    });
  },

  fetchAll: function (cb) {
    sidenavModel.fetchAll(function (err, result) {
      if (err) {
        return cb(err);
      }
      return cb(err, result);
    });
  },

  fetchById: function (id, cb) {
    sidenavModel.fetchById(id, function (err, result) {
      if (err) {
        return cb(err);
      }
      return cb(err, result);
    });
  },

  update: function (params, cb) {

    var createData = {
        title: params.title,
        nav: params.nav,
    };  

    console.log(createData);

    sidenavModel.update(params._id, createData, function (err, result) {
      if (err) {
        return cb(err);
      }

      sidenavModel.fetchById(params._id, function (err, updatedData) {
        if (err) {
          return cb(err);
        }
        return cb(err, updatedData);
      });
    });
  },

  deleteId: function (params, cb) {
    sidenavModel.deleteId(params, function (err, result) {
      if (err) {
        return cb(err);
      }
      return cb(err, result);
    });
  },
};
module.exports = sidenav;
