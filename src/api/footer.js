"use strict";

var path = require("path");
var fs = require("fs");

var footerModel = require("../model/footer");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var footer = {
  add: function (params, cb) {
    var createData = {
      email: params.email,
      menu: params.menu,
      ourrange: params.ourrange,
      collabration: params.collabration,
      callus: params.callus,
      facebook: params.facebook,
      instagram: params.instagram,
    };

    if (params.files && params.files.image) {
        var title="footer";
        var fileName =title+ params.files.image.md5 +
        path.extname(params.files.image.name);
      var filePath = "public/uploads/footer/" + fileName;

      fs.writeFile(filePath, params.files.image.data, function (err, written) {
        if (err) {
          console.log("Error in uploading icon." + err);
        }
      });

      createData["image"] = filePath;
    }
    console.log(createData);

    footerModel.create(createData, function (err, result) {
      if (err) {
        return cb(err);
      }

      return cb(err, result);
    });
  },

  fetchAll: function (cb) {
    footerModel.fetchAll(function (err, result) {
      if (err) {
        return cb(err);
      }
      return cb(err, result);
    });
  },

  fetchById: function (id, cb) {
    footerModel.fetchById(id, function (err, result) {
      if (err) {
        return cb(err);
      }
      return cb(err, result);
    });
  },

  update: function (params, cb) {
    var createData = {
        email: params.email,
        menu: params.menu,
        ourrange: params.ourrange,
        collabration: params.collabration,
        callus: params.callus,
        facebook: params.facebook,
        instagram: params.instagram,
      };

    if (params.files && params.files.image) {
        var title="footer";
        var fileName =title+ params.files.image.md5 +
        path.extname(params.files.image.name);
      var filePath = "public/uploads/footer/" + fileName;

      fs.writeFile(filePath, params.files.image.data, function (err, written) {
        if (err) {
          console.log("Error in uploading icon." + err);
        }
      });

      createData["image"] = filePath;
    }
    console.log(createData);

    footerModel.update(params._id, createData, function (err, result) {
      if (err) {
        return cb(err);
      }

      footerModel.fetchById(params._id, function (err, updatedData) {
        if (err) {
          return cb(err);
        }
        return cb(err, updatedData);
      });
    });
  },

  deleteId: function (params, cb) {
    footerModel.deleteId(params, function (err, result) {
      if (err) {
        return cb(err);
      }
      return cb(err, result);
    });
  },
};
module.exports = footer;
