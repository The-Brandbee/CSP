"use strict";

var path = require("path");
var fs = require("fs");

var projectpropertyModel = require("../model/projectproperty");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var projectproperty = {
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
          var filePath = "public/uploads/projectproperty/" + fileName;
    
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
    "projectproperty" +
    params.files.mobileimage.md5 +
    path.extname(params.files.mobileimage.name);
  var filePaths = "public/uploads/projectproperty/" + fileNames;

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
    
          projectpropertyModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        projectpropertyModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        projectpropertyModel.fetchById(id, function(err, result) {
           if (err) {
                return cb(err);
            }
            return cb(err, result);
        });
    },

    fetchByUrl: function(url, cb) {
      projectpropertyModel.fetchByUrl(url, function(err, result) {
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
          "projectproperty" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/projectproperty/" + fileName;
  
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
    "projectproperty" +
    params.files.mobileimage.md5 +
    path.extname(params.files.mobileimage.name);
  var filePaths = "public/uploads/projectproperty/" + fileNames;

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
      projectpropertyModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        projectpropertyModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      projectpropertyModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = projectproperty;