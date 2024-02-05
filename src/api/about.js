"use strict";

var path = require("path");
var fs = require("fs");

var aboutModel = require("../model/about");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var about = {
    add: function (params, cb) {
        var createData = {
          homepageheading:params.homepageheading,
          whymetaguisedesc:params.whymetaguisedesc,
          metaguise_exp_desc: params.metaguise_exp_desc,
          // alt: params.alt,
        };
        console.log({params})
    
        if (params.files && params.files.homepageimage) {
          var fileName =
            "about" +
            params.files.homepageimage.md5 +
            path.extname(params.files.homepageimage.name);
          var filePath = "public/uploads/about/" + fileName;
    
          fs.writeFile(filePath, params.files.homepageimage.data, function (
            err,
            written
          ) {
            if (err) {
              console.log("Error in uploading icon." + err);
            }
          });
    

        createData["homepageimage"] = filePath;
        }


        if (params.files && params.files.whymetaguiseimage) {
          var fileName =
            "about" +
            params.files.whymetaguiseimage.md5 +
            path.extname(params.files.whymetaguiseimage.name);
          var filePath = "public/uploads/about/" + fileName;
    
          fs.writeFile(filePath, params.files.whymetaguiseimage.data, function (
            err,
            written
          ) {
            if (err) {
              console.log("Error in uploading icon." + err);
            }
          });
    

        createData["whymetaguiseimage"] = filePath;
        }
        
        if (params.files && params.files.metaguise_exp_image1) {
          var fileName =
            "about" +
            params.files.metaguise_exp_image1.md5 +
            path.extname(params.files.metaguise_exp_image1.name);
          var filePath = "public/uploads/about/" + fileName;
    
          fs.writeFile(filePath, params.files.metaguise_exp_image1.data, function (
            err,
            written
          ) {
            if (err) {
              console.log("Error in uploading icon." + err);
            }
          });
    

        createData["metaguise_exp_image1"] = filePath;
        }
       

        if (params.files && params.files.metaguise_exp_image2) {
          var fileName =
            "about" +
            params.files.metaguise_exp_image2.md5 +
            path.extname(params.files.metaguise_exp_image2.name);
          var filePath = "public/uploads/about/" + fileName;
    
          fs.writeFile(filePath, params.files.metaguise_exp_image2.data, function (
            err,
            written
          ) {
            if (err) {
              console.log("Error in uploading icon." + err);
            }
          });
    

        createData["metaguise_exp_image2"] = filePath;
        }
       
    
          aboutModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        aboutModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        aboutModel.fetchById(id, function(err, result) {
           if (err) {
                return cb(err);
            }
            return cb(err, result);
        });
    },

    update: function (params, cb) {
      var createData = {
        homepageheading:params.homepageheading,
        whymetaguisedesc:params.whymetaguisedesc,
        metaguise_exp_desc: params.metaguise_exp_desc,
      };
  console.log({params})
      if (params.files && params.files.image) {
        var fileName =
          "about" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/about/" + fileName;
  
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
    
  
      console.log({createData})
      aboutModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        aboutModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      aboutModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = about;