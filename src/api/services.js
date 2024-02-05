"use strict";

var path = require("path");
var fs = require("fs");

var servicesModel = require("../model/services");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var services = {
    add: function (params, cb) {
        var createData = {
            heading: params.heading,
            sub_heading:params.sub_heading,
            image_alt : params.image_alt,
            descp: params.descp,
            url: params.type,
            scope_of_service: params.scope_of_service,
        };
    
        if (params.files && params.files.image) {
          var fileName = "services" +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/services/" + fileName;
    
          fs.writeFile(filePath, params.files.image.data, function (
            err,
            written
          ) {
            if (err) {
              console.log("Error in uploading icon." + err);
            }
          });
    
          createData["image"] = filePath;
        }

        if (params.files && params.files.simage) {
          var fileName = "services" +
            params.files.simage.md5 +
            path.extname(params.files.simage.name);
          var filePath = "public/uploads/services/" + fileName;
    
          fs.writeFile(filePath, params.files.simage.data, function (
            err,
            written
          ) {
            if (err) {
              console.log("Error in uploading icon." + err);
            }
          });
    
          createData["simage"] = filePath;
        }
        
        servicesModel.create(createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        return cb(err, result);
      });
    
      },

      fetchAll: function (cb) {
        servicesModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        servicesModel.fetchById(id, function(err, result) {
           if (err) {
                return cb(err);
            }
            return cb(err, result);
        });
    },

    update: function (params, cb) {
      var createData = {
            heading: params.heading,
            sub_heading:params.sub_heading,
            image_alt : params.image_alt,
            descp: params.descp,
            url: params.type,
            scope_of_service: params.scope_of_service
      };
  
      if (params.files && params.files.image) {
        var fileName = "services" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/services/" + fileName;
  
        fs.writeFile(filePath, params.files.image.data, function (
          err,
          written
        ) {
          if (err) {
            console.log("Error in uploading icon." + err);
          }
        });
  
        createData["image"] = filePath;
      }

      if (params.files && params.files.simage) {
        var fileName = "services" +
          params.files.simage.md5 +
          path.extname(params.files.simage.name);
        var filePath = "public/uploads/services/" + fileName;
  
        fs.writeFile(filePath, params.files.simage.data, function (
          err,
          written
        ) {
          if (err) {
            console.log("Error in uploading icon." + err);
          }
        });
  
        createData["simage"] = filePath;
      }
  
      servicesModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        servicesModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      servicesModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = services;