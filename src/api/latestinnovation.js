"use strict";

var path = require("path");
var fs = require("fs");

var latestinnovationModel = require("../model/latestinnovation");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var latestinnovation = {
    add: function (params, cb) {
        var createData = {
          name:params.name,
          url:params.url,
          alt: params.alt,
          // priority:params.priority,
          subheading: params.subheading,
        };
        console.log({params})
    
        if (params.files && params.files.video) {
          var fileName =
            params.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() +
            params.files.video.md5 +
            path.extname(params.files.video.name);
          var filePath = "public/uploads/latestinnovation/" + fileName;
    
          fs.writeFile(filePath, params.files.video.data, function (
            err,
            written
          ) {
            if (err) {
              console.log("Error in uploading icon." + err);
            }
          });


        createData["video"] = filePath;
        }
       
             
  if(params.files && params.files.mobilevideo){
    var fileNames =
    "latestinnovation" +
    params.files.mobilevideo.md5 +
    path.extname(params.files.mobilevideo.name);
  var filePaths = "public/uploads/latestinnovation/" + fileNames;

  fs.writeFile(filePaths, params.files.mobilevideo.data, function (
    err,
    written
  ) {
    if (err) {
      console.log("Error in uploading icon." + err);
    }
  });

  createData["mobilevideo"] = filePaths;
  }

  if(params.files && params.files.thumbnail){
    var fileNames =
    "latestinnovation" +
    params.files.thumbnail.md5 +
    path.extname(params.files.thumbnail.name);
  var filePaths = "public/uploads/latestinnovation/" + fileNames;

  fs.writeFile(filePaths, params.files.thumbnail.data, function (
    err,
    written
  ) {
    if (err) {
      console.log("Error in uploading icon." + err);
    }
  });

  createData["thumbnail"] = filePaths;
  }
    
          latestinnovationModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        latestinnovationModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        latestinnovationModel.fetchById(id, function(err, result) {
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
      if (params.files && params.files.video) {
        var fileName =
          "latestinnovation" +
          params.files.video.md5 +
          path.extname(params.files.video.name);
        var filePath = "public/uploads/latestinnovation/" + fileName;
  
        fs.writeFile(filePath, params.files.video.data, function (
          err,
          written
        ) {
          if (err) {
            console.log("Error in uploading icon." + err);
          }
        });

        createData["video"] = filePath;
      }
     
  if(params.files && params.files.mobilevideo){
    var fileNames =
    "latestinnovation" +
    params.files.mobilevideo.md5 +
    path.extname(params.files.mobilevideo.name);
  var filePaths = "public/uploads/latestinnovation/" + fileNames;

  fs.writeFile(filePaths, params.files.mobilevideo.data, function (
    err,
    written
  ) {
    if (err) {
      console.log("Error in uploading icon." + err);
    }
  });

  createData["mobilevideo"] = filePaths;
  }
  
      console.log({createData})
      latestinnovationModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        latestinnovationModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      latestinnovationModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = latestinnovation;