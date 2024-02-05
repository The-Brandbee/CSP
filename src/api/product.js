"use strict";

var path = require("path");
var fs = require("fs");

var productModel = require("../model/product");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var product = {
    add: function (params, cb) {
        var createData = {
          heading:params.heading,
          category:params.category,
          description: params.description,
          home_description: params.home_description,
          location: params.location,
        url:params.url,
          checkbox:params.checkbox,
          alt: params.alt,
          threedimage: params.threedimage,
        };
        console.log({params})
    
        if (params.files && params.files.image) {
          var fileName =
            "product" +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/product/" + fileName;
    
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

        if (params.files && params.files.pdf) {
          var fileName =
            "product" +
            params.files.pdf.md5 +
            path.extname(params.files.pdf.name);
          var filePath = "public/uploads/product/" + fileName;
    
          fs.writeFile(filePath, params.files.pdf.data, function (
            err,
            written
          ) {
            if (err) {
              console.log("Error in uploading icon." + err);
            }
          });
    

        createData["pdf"] = filePath;
        }
       
    
          productModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        productModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        productModel.fetchById(id, function(err, result) {
           if (err) {
                return cb(err);
            }
            return cb(err, result);
        });
    },

    fetchByUrl: function(url, cb) {
      productModel.fetchByUrl(url, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
  },

    update: function (params, cb) {
      var createData = {
        heading:params.heading,
        category:params.category,
        description: params.description,
        home_description: params.home_description,
        location:params.location,
        url:params.url,
        checkbox:params.checkbox,
        alt: params.alt,
        threedimage: params.threedimage,
      };
  console.log({params})
      if (params.files && params.files.image) {
        var fileName =
          "product" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/product/" + fileName;
  
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
    
      if (params.files && params.files.pdf) {
        var fileName =
          "product" +
          params.files.pdf.md5 +
          path.extname(params.files.pdf.name);
        var filePath = "public/uploads/product/" + fileName;
  
        fs.writeFile(filePath, params.files.pdf.data, function (
          err,
          written
        ) {
          if (err) {
            console.log("Error in uploading icon." + err);
          }
        });
  

      createData["pdf"] = filePath;
      }
  
      console.log({createData})
      productModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        productModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      productModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = product;