"use strict";

var path = require("path");
var fs = require("fs");

var ourbusinessesModel = require("../model/ourbusinesses");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var ourbusinesses = {
    add: function (params, cb) {
        var createData = {
          name:params.name,
          url:params.url,
          desc: params.desc,
          // priority:params.priority,
          subheading: params.subheading,
        };
        console.log({params})
    
        if (params.files && params.files.image) {
          var fileName =
            params.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/ourbusinesses/" + fileName;
    
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
    "ourbusinesses" +
    params.files.mobileimage.md5 +
    path.extname(params.files.mobileimage.name);
  var filePaths = "public/uploads/ourbusinesses/" + fileNames;

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

  if(params.files && params.files.logo){
    var fileNames =
    "ourbusinesses" +
    params.files.logo.md5 +
    path.extname(params.files.logo.name);
  var filePaths = "public/uploads/ourbusinesses/" + fileNames;

  fs.writeFile(filePaths, params.files.logo.data, function (
    err,
    written
  ) {
    if (err) {
      console.log("Error in uploading icon." + err);
    }
  });

  createData["logo"] = filePaths;
  }
    
          ourbusinessesModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        ourbusinessesModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        ourbusinessesModel.fetchById(id, function(err, result) {
           if (err) {
                return cb(err);
            }
            return cb(err, result);
        });
    },

    update: function (params, cb) {
      var createData = {
        name:params.name,
        url:params.url,
        alt: params.alt,
        // priority:params.priority,
        subheading: params.subheading,
      };
  console.log({params})
      if (params.files && params.files.image) {
        var fileName =
          "ourbusinesses" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/ourbusinesses/" + fileName;
  
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
    "ourbusinesses" +
    params.files.mobileimage.md5 +
    path.extname(params.files.mobileimage.name);
  var filePaths = "public/uploads/ourbusinesses/" + fileNames;

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
      ourbusinessesModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        ourbusinessesModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      ourbusinessesModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = ourbusinesses;