"use strict";

var path = require("path");
var fs = require("fs");

var artdetailsModel = require("../model/artdetails");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var artdetails = {
    add: function (params, cb) {
        var createData = {
          name:params.name,
          desc:params.desc,
          alt: params.alt,  
          url: params.url, 
          category:params.category,
          product:params.product,
          subheading: params.subheading,
        };
        console.log({params})
    
        if (params.files && params.files.image) {
          var fileName =
            params.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/artdetails/" + fileName;
    
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
       
             
  if(params.files && params.files.internalimage){
    var fileNames =
    "artdetails" +
    params.files.internalimage.md5 +
    path.extname(params.files.internalimage.name);
  var filePaths = "public/uploads/artdetails/" + fileNames;

  fs.writeFile(filePaths, params.files.internalimage.data, function (
    err,
    written
  ) {
    if (err) {
      console.log("Error in uploading icon." + err);
    }
  });

  createData["internalimage"] = filePaths;
  }
    
          artdetailsModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        artdetailsModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        artdetailsModel.fetchById(id, function(err, result) {
           if (err) {
                return cb(err);
            }
            return cb(err, result);
        });
    },


    fetchByUrl: function(url, cb) {
      artdetailsModel.fetchByUrl(url, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
  },

    update: function (params, cb) {
      var createData = {
        name:params.name,
        desc:params.desc,
        alt: params.alt,  
        url: params.url, 
        category:params.category,
        product:params.product,
        subheading: params.subheading,
      };
  console.log({params})
      if (params.files && params.files.image) {
        var fileName =
          "artdetails" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/artdetails/" + fileName;
  
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
     
  if(params.files && params.files.internalimage){
    var fileNames =
    "artdetails" +
    params.files.internalimage.md5 +
    path.extname(params.files.internalimage.name);
  var filePaths = "public/uploads/artdetails/" + fileNames;

  fs.writeFile(filePaths, params.files.internalimage.data, function (
    err,
    written
  ) {
    if (err) {
      console.log("Error in uploading icon." + err);
    }
  });

  createData["internalimage"] = filePaths;
  }
  
      console.log({createData})
      artdetailsModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        artdetailsModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      artdetailsModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = artdetails;