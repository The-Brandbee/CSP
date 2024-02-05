"use strict";
var request = require("request");
var common = require("./common");
var moment = require("moment");

var blogs = {
  add: function (req, res, next) {
    common
      .apiRequest(
        req.protocol + "://" + req.get("host") + "/api/category",
        req.headers.cookie,
        "GET",
      )
      .then((result) => {
        res.render("cms/blogs-add.ejs", {
          category: result,
          response: "",
          msg: "",
        });
      })
      .catch((err) => {
        res.render("cms/blogs-add.ejs", {
          response: "error",
          msg: err,
        });
      });
  },

  addPost: function (req, res, next) {
    var requestData = [
      common.apiRequest(
        req.protocol + "://" + req.get("host") + "/api/blogs/add",
        req.headers.cookie,
        "POST",
        req.body,
        req.files
      ),
      // common.apiRequest(
      //   req.protocol + "://" + req.get("host") + "/api/category",
      //   req.headers.cookie,
      //   "GET",
      // ),
    ];
    Promise.all(requestData)
      .then((data) => {
        res.render("cms/blogs-add.ejs", {
          // category: data[1],
          response: "success",
          msg: "Added successfully.",
        });
      })
      .catch((err) => {
        res.render("cms/blogs-add.ejs", {
          response: "error",
          msg: err,
        });
      });
  },  

  manage: function (req, res, next) {
    common
      .apiRequest(
        req.protocol + "://" + req.get("host") + "/api/blogs",
        req.headers.cookie,
        "GET"
      )
      .then((result) => {
        console.log({result})
        res.render("cms/blogs-manage.ejs", {
          blogs: result,
          moment: moment,
        });
      })
      .catch((err) => {
        console.log(err);
        res.render("cms/blogs-manage.ejs");
      });
  },

  edit: function (req, res, next) {
    if (!req.params || !req.params.id) {
      return next(
        ec.appError({
          status: ec.INVALID_ID,
          message: "invalid id provided.",
        })
      );
    }

    var requestData = [
      common.apiRequest(
        req.protocol +
          "://" +
          req.get("host") +
          "/api/blogs/" +
          req.params.id,
        req.headers.cookie,
        "GET"
      ),
      // common.apiRequest(
      //   req.protocol + "://" + req.get("host") + "/api/category",
      //   req.headers.cookie,
      //   "GET",
      // ),
    ];

    Promise.all(requestData)
      .then((data) => {
        console.log(data);
        res.render("cms/blogs-edit.ejs", {
          // _csrf: req.csrfToken(),
          blogs: data[0],
          // category: data[1],
          response: "",
        });
      })
      .catch((err) => {
        res.render("cms/blogs-edit.ejs", {
          response: "error",
          msg: err,
        });
      });
  },

  editPost: function (req, res, next) {
    var requestData = [
      common.apiRequest(
        req.protocol + "://" + req.get("host") + "/api/blogs/update",
        req.headers.cookie,
        "POST",
        req.body,
        req.files
      ),
      // common.apiRequest(
      //   req.protocol + "://" + req.get("host") + "/api/category",
      //   req.headers.cookie,
      //   "GET",
      // ),
    ];
    Promise.all(requestData)
      .then((data) => {
        res.render("cms/blogs-edit.ejs", {
          blogs: data[0],
          // category: data[1],
          response: "success",
          msg: "Updated successfully.",
        });
      })
      .catch((err) => {
        // console.log(err);
        res.render("cms/blogs-edit.ejs", {
          response: "error",
          msg: err,
        });
      });
  },

  deletePost: function (req, res, next) {
    if (!req.body || !req.body.id) {
      return next(
        ec.appError({
          status: ec.INVALID_ID,
          message: "invalid id provided.",
        })
      );
    }

    var requestData = [
      common.apiRequest(
        req.protocol + "://" + req.get("host") + "/api/blogs/delete",
        req.headers.cookie,
        "POST",
        req.body
      ),
    ];

    let result = { success: false };

    Promise.all(requestData)
      .then((data) => {
        result = data;
      })
      .catch((err) => {
        console.log("e:", err);
      });

    res.json({ success: true });
  },
};
module.exports = blogs;
