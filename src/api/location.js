"use strict";

var path = require("path");
var fs = require("fs");

var locationModel = require("../model/location");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var location = {
    add: function (params, cb) {
        var createData = {
          location:params.location,
          checkbox:params.checkbox,
          alt: params.alt,
          // priority:params.priority,
          subheading: params.subheading,
        };
        console.log({params})
    
        if (params.files && params.files.image) {
          var fileName =
            params.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/location/" + fileName;
    
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
       
             
  if(params.files && params.files.mobileimage){
    var fileNames =
    "location" +
    params.files.mobileimage.md5 +
    path.extname(params.files.mobileimage.name);
  var filePaths = "public/uploads/location/" + fileNames;

  fs.writeFile(filePaths, params.files.mobileimage.data, function (
    err,
    written
  ) {
    if (err) {
      console.log("Error in uploading icon." + err);
    }
  });

  createData["mobileimage"] = filePaths;
  }
    
          locationModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        locationModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        locationModel.fetchById(id, function(err, result) {
           if (err) {
                return cb(err);
            }
            return cb(err, result);
        });
    },

    update: function (params, cb) {
      var createData = {
        location:params.location,
        checkbox:params.checkbox,
        alt: params.alt,
        // priority:params.priority,
        subheading: params.subheading,
      };
  console.log({params})
      if (params.files && params.files.image) {
        var fileName =
          "location" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/location/" + fileName;
  
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
     
  if(params.files && params.files.mobileimage){
    var fileNames =
    "location" +
    params.files.mobileimage.md5 +
    path.extname(params.files.mobileimage.name);
  var filePaths = "public/uploads/location/" + fileNames;

  fs.writeFile(filePaths, params.files.mobileimage.data, function (
    err,
    written
  ) {
    if (err) {
      console.log("Error in uploading icon." + err);
    }
  });

  createData["mobileimage"] = filePaths;
  }
  
      console.log({createData})
      locationModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        locationModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      locationModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = location;