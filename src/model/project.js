"use strict";

var mongoose = require("mongoose");
var ec = require("../lib/error_consts");
//console.log(cons.year);
var Schema = mongoose.Schema;

var projectSchema = new mongoose.Schema({
    name:{ type: String },
    url:{ type: String },
    subheading:{ type: String },
    pdf:{ type: String },
    location:{ type: String },
    project_property:{ type: Array },
    project_use: { type: Array },
    project_list: { type: Array },
    alt: { type: String },
          description: { type: String },
          shortdescription: { type: String },
    checkbox:{ type: String },
    image:{ type: String },
    mobileimage:{ type: String },
    featuredesc:{ type: String },
    featuredmainimg:{ type: String },
    threesixtycheckbox:{ type: String },
    threesixtyimage:{ type: String },
    featuredsecondimg:{ type: String },
    threesixtyurl:{ type: String },
    threedimage:{ type: String }
});
var projectModel = mongoose.model("project", projectSchema);

var project = {
    create: function (params, cb) {
        if (!params) {
          return cb(
            ec.appError({
              status: ec.INVALID_PARAM,
              message: "No data provided",
            })
          );
        }
  
        console.log({paramssss:params})
    
        projectModel.create(params, function (err, result) {
          if (err) {
            console.log(err);
            return cb(
              ec.appError({
                status: ec.DB_ERROR,
                message: "DB Fetch Error",
              })
            );
          }
    
          return cb(err, result);
        });
      },

      fetchAll: function (cb) {
        projectModel.find(function(err, result) {
          if (err) {
              console.log(err);
              return cb(ec.appError({
                  status: ec.DB_ERROR,
                  message: "DB Fetch Error"
              }));
          }
          return cb(err, result);
  
      });
      },    

      fetchById: function(id, cb) {
        projectModel.find({_id: id}, function(err, result) {
            if (err) {
                console.log(err);
                return cb(ec.appError({
                    status: ec.DB_ERROR,
                    message: "DB Fetch Error"
                }));
            }
            return cb(err, result[0]);
    
        });
    },

    fetchByUrl: function(url, cb) {
      projectModel.find({url: url}, function(err, result) {
          if (err) {
              console.log(err);
              return cb(ec.appError({
                  status: ec.DB_ERROR,
                  message: "DB Fetch Error"
              }));
          }
          return cb(err, result[0]);
  
      });
  },

    update: function (id, updateData, cb) {
      if (!updateData || !id) {
        return cb(
          ec.appError({
            status: ec.INVALID_PARAM,
            message: "No data provided",
          })
        );
      }
  
      projectModel.updateOne({ _id: id }, { $set: updateData }, function (
        err,
        result
      ) {
        if (err) {
          console.log(err);
          return cb(
            ec.appError({
              status: ec.DB_ERROR,
              message: "DB update Error",
            })
          );
        }
        return cb(err, result);
      });
    },

    deleteId: function(params, cb) {
      projectModel.deleteOne({_id: params.id}
        , function(err, result) {
          if (err) {
              return cb(ec.appError({
                  status: ec.DB_ERROR,
                  message: "DB Fetch Error"
              }));
          }
          //console.log(result);
          return cb(err, result);
    
      });
    },
      
};
module.exports = project;