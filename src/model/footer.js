"use strict";

var mongoose = require("mongoose");
var ec = require("../lib/error_consts");

var footerSchema = new mongoose.Schema({
  menu: { type: String },
  ourrange: { type: String },
  collabration: { type: String },
  email: { type: String },
  callus: { type: String },
  facebook: { type: String },
  instagram: { type: String },
});
var footerModel = mongoose.model("footer", footerSchema);

var footer = {
  create: function (params, cb) {
    if (!params) {
      return cb(
        ec.appError({
          status: ec.INVALID_PARAM,
          message: "No data provided",
        })
      );
    }

    footerModel.create(params, function (err, result) {
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
    footerModel.find(function (err, result) {
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
    footerModel.find({ _id: id }, function (err, result) {
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

    footerModel.updateOne(
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
    footerModel.deleteOne({ _id: params.id }, function (err, result) {
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
module.exports = footer;
