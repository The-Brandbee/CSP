"use strict";

var mongoose = require("mongoose");
var ec = require("../lib/error_consts");
var needle = require("needle");


var enquirySchema = new mongoose.Schema({
  name: { type: String },
  phone: { type: String },
  email: {type: String},
  category: { type: String },
  message: {type: String},
  dnd: {type: String},
}, { timestamps: true });
var enquiryModel = mongoose.model("enquiry", enquirySchema);

var enquiry = {
  create: function (params, cb) {
    if (!params) {
      return cb(
        ec.appError({
          status: ec.INVALID_PARAM,
          message: "No data provided",
        })
      );
    }

    enquiryModel.create(params, function (err, result) {
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
    enquiryModel.find(function (err, result) {
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
    enquiryModel.find({ _id: id }, function (err, result) {
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

    enquiryModel.updateOne(
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
    enquiryModel.deleteOne({ _id: params.id }, function (err, result) {
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
module.exports = enquiry;
