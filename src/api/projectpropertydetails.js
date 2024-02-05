"use strict";

var path = require("path");
var fs = require("fs");

var projectpropertydetailsModel = require("../model/projectpropertydetails");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var projectpropertydetails = {
    add: function (params, cb) {
        var createData = {
          name:params.name,
          url:params.url,
          alt: params.alt,
          project_cat:params.project_cat,
          subheading: params.subheading,
          desc: params.desc,
        };
        console.log({params})
    
        if (params.files && params.files.image) {
          var fileName =
            params.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/projectpropertydetails/" + fileName;
    
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
    "projectpropertydetails" +
    params.files.mobileimage.md5 +
    path.extname(params.files.mobileimage.name);
  var filePaths = "public/uploads/projectpropertydetails/" + fileNames;

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
    
          projectpropertydetailsModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        projectpropertydetailsModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        projectpropertydetailsModel.fetchById(id, function(err, result) {
           if (err) {
                return cb(err);
            }
            return cb(err, result);
        });
    },

    fetchByUrl: function(url, cb) {
      projectpropertydetailsModel.fetchByUrl(url, function(err, result) {
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
        project_cat:params.project_cat,
        subheading: params.subheading,
      };
  console.log({params})
      if (params.files && params.files.image) {
        var fileName =
          "projectpropertydetails" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/projectpropertydetails/" + fileName;
  
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
    "projectpropertydetails" +
    params.files.mobileimage.md5 +
    path.extname(params.files.mobileimage.name);
  var filePaths = "public/uploads/projectpropertydetails/" + fileNames;

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
      projectpropertydetailsModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        projectpropertydetailsModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      projectpropertydetailsModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = projectpropertydetails;