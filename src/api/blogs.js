"use strict";

var path = require("path");
var fs = require("fs");

var blogsModel = require("../model/blogs");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var blogs = {
  add: function (params, cb) {
        
    var createData = {
        title: params.title,
        desc: params.desc,
        long_desc: params.long_desc,
        author: params.author,
        image1_alt: params.image1_alt,
        image2_alt: params.image2_alt,
        type: params.type,
        pageurl: params.pageurl,
        pagetitle: params.pagetitle,
        descc: params.descc,
        keyword: params.keyword,
        date: params.date,
        order: params.order,
    };
    console.log(createData)

    if (params.files && params.files.image1) {
        var title="blogs";
        var fileName =title+ params.files.image1.md5 +
        path.extname(params.files.image1.name);
      var filePath = "public/uploads/blogs/" + fileName;

      fs.writeFile(filePath, params.files.image1.data, function (err, written) {
        if (err) {
          console.log("Error in uploading icon." + err);
        }
      });

      createData["image1"] = filePath;
    }

    if (params.files && params.files.image2) {
        var title="blogs";
        var fileName =title+ params.files.image2.md5 +
        path.extname(params.files.image2.name);
      var filePath = "public/uploads/blogs/" + fileName;

      fs.writeFile(filePath, params.files.image2.data, function (err, written) {
        if (err) {
          console.log("Error in uploading icon." + err);
        }
      });

      createData["image2"] = filePath;
    }

    if (params.files && params.files.file) {
        var title="blogs";
        var fileName =title+ params.files.file.md5 +
        path.extname(params.files.file.name);
      var filePath = "public/uploads/blogs/" + fileName;

      fs.writeFile(filePath, params.files.file.data, function (err, written) {
        if (err) {
          console.log("Error in uploading icon." + err);
        }
      });

      createData["file"] = filePath;
    }
    
    console.log(createData);

    blogsModel.create(createData, function (err, result) {
      if (err) {
        return cb(err);
      }

      return cb(err, result);
    });
  },

  fetchAll: function (cb) {
    blogsModel.fetchAll(function (err, result) {
      if (err) {
        return cb(err);
      }
      return cb(err, result);
    });
  },

  fetchById: function (id, cb) {
    blogsModel.fetchById(id, function (err, result) {
      if (err) {
        return cb(err);
      }
      return cb(err, result);
    });
  },
  
  fetchByUrl: function (url, cb) {
    blogsModel.fetchByUrl(url, function (err, result) {
      if (err) {
        return cb(err);
      }
      return cb(err, result);
    });
  },

  update: function (params, cb) {

    var createData = {
        title: params.title,
        desc: params.desc,
        long_desc: params.long_desc,
        author: params.author,
        image1_alt: params.image1_alt,
        image2_alt: params.image2_alt,
        type: params.type,
        pageurl: params.pageurl,
        pagetitle: params.pagetitle,
        descc: params.descc,
        keyword: params.keyword,
        date: params.date,
        order: params.order,
    };

    if (params.files && params.files.image1) {
        var title="blogs";
        var fileName =title+ params.files.image1.md5 +
        path.extname(params.files.image1.name);
      var filePath = "public/uploads/blogs/" + fileName;

      fs.writeFile(filePath, params.files.image1.data, function (err, written) {
        if (err) {
          console.log("Error in uploading icon." + err);
        }
      });

      createData["image1"] = filePath;
    }

    if (params.files && params.files.image2) {
        var title="blogs";
        var fileName =title+ params.files.image2.md5 +
        path.extname(params.files.image2.name);
      var filePath = "public/uploads/blogs/" + fileName;

      fs.writeFile(filePath, params.files.image2.data, function (err, written) {
        if (err) {
          console.log("Error in uploading icon." + err);
        }
      });

      createData["image2"] = filePath;
    }

    if (params.files && params.files.file) {
        var title="blogs";
        var fileName =title+ params.files.file.md5 +
        path.extname(params.files.file.name);
      var filePath = "public/uploads/blogs/" + fileName;

      fs.writeFile(filePath, params.files.file.data, function (err, written) {
        if (err) {
          console.log("Error in uploading icon." + err);
        }
      });

      createData["file"] = filePath;
    }

    console.log(createData);

    blogsModel.update(params._id, createData, function (err, result) {
      if (err) {
        return cb(err);
      }

      blogsModel.fetchById(params._id, function (err, updatedData) {
        if (err) {
          return cb(err);
        }
        return cb(err, updatedData);
      });
    });
  },

  deleteId: function (params, cb) {
    blogsModel.deleteId(params, function (err, result) {
      if (err) {
        return cb(err);
      }
      return cb(err, result);
    });
  },
};
module.exports = blogs;
