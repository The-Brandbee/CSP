"use strict";

const { Validator } = require("node-input-validator");
var _ = require("underscore");

var enquiryApi = require("../../api/enquiry");
// const { sendMail } = require("../../api/send_mail");
var ec = require("../../lib/error_consts");
var enquiry = {
  add: async function (req, res, next) {
    if (!req.body) {
      return next(
        ec.appError({
          status: ec.UNDEFINED_DATA,
          message: "no data provided.",
        })
      );
    }
    // var params = req.body;

    // params["user"] = req.user.id;

    enquiryApi.add(req.body, function (err, data) {
      
      var data = {}
      data = req.body
      data.type = "enquiry"
      data.service_type = req.body.category?req.body.category.toLowerCase():""

      // sendMail(data);
      if (err) {
        return next(err);
      }
      res.json(data);
    });
  },

  fetchAll: function (req, res, next) {
    enquiryApi.fetchAll(function (err, data) {
      if (err) {
        return next(err);
      }

      res.json(data);
    });
  },

  fetchById: function (req, res, next) {
    if (!req.params || !req.params.id) {
      return next(
        ec.appError({
          status: ec.INVALID_ID,
          message: "invalid id provided.",
        })
      );
    }

    enquiryApi.fetchById(req.params.id, function (err, data) {
      if (err) {
        return next(err);
      }
      res.json(data);
    });
  },

  update: async function (req, res, next) {
    if (!req.user) {
      return next(
        ec.appError({
          status: ec.UNAUTHORIZED_ACCESS,
          message: "user not logged in.",
        })
      );
    }

    if (!req.user.role === "ADMINISTRATOR") {
      return next(
        ec.appError({
          status: ec.UNAUTHORIZED_ACCESS,
          message: "user is not admin.",
        })
      );
    }

    if (!req.body) {
      return next(
        ec.appError({
          status: ec.UNDEFINED_DATA,
          message: "no data provided.",
        })
      );
    }

    var params = req.body;
    params["user"] = req.user.id;

    enquiryApi.update(params, function (err, data) {
      if (err) {
        return next(err);
      }
      res.json(data);
    });
  },

  delete: function (req, res, next) {
    if (!req.body || !req.body.id) {
      return next(
        ec.appError({
          status: ec.INVALID_ID,
          message: "invalid id provided.",
        })
      );
    }
    enquiryApi.deleteId({ id: req.body.id }, function (err, data) {
      if (err) {
        return next(err);
      }
      res.json(data);
    });
  },
};
module.exports = enquiry;
