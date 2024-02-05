"use strict";

var mongoose = require("mongoose");
var ec = require("../lib/error_consts");

var blogsSchema = new mongoose.Schema({
        
  title: { type: String },
  desc: { type: String },
  long_desc: {type: String},
  image1: {type: String},
  image2: {type: String},
  image1_alt: {type: String},
  image2_alt: {type: String},
  author: {type: String},
  file: {type: String},
  pageurl: {type: String},
  pagetitle: {type: String},
  descc: {type: String},
  keyword: {type: String},
  type: {type: String},
  date: {type: String},
  order:{type: String},
}, { timestamps: true });
var blogsModel = mongoose.model("blogs", blogsSchema);

var blogs = {
  create: function (params, cb) {
    if (!params) {
      return cb(
        ec.appError({
          status: ec.INVALID_PARAM,
          message: "No data provided",
        })
      );
    }

    blogsModel.create(params, function (err, result) {
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
    blogsModel.find(function (err, result) {
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

  fetchById: function (id, cb) {
    blogsModel.find({ _id: id }, function (err, result) {
      if (err) {
        console.log(err);
        return cb(
          ec.appError({
            status: ec.DB_ERROR,
            message: "DB Fetch Error",
          })
        );
      }
      return cb(err, result[0]);
    });
  },
  
  fetchByUrl: function (url, cb) {
    blogsModel.find({ pageurl: url }, function (err, result) {
      if (err) {
        console.log(err);
        return cb(
          ec.appError({
            status: ec.DB_ERROR,
            message: "DB Fetch Error",
          })
        );
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

    blogsModel.updateOne(
      { _id: id },
      { $set: updateData },
      function (err, result) {
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
      }
    );
  },

  deleteId: function (params, cb) {
    blogsModel.deleteOne({ _id: params.id }, function (err, result) {
      if (err) {
        return cb(
          ec.appError({
            status: ec.DB_ERROR,
            message: "DB Fetch Error",
          })
        );
      }
      //console.log(result);
      return cb(err, result);
    });
  },
};
module.exports = blogs;
