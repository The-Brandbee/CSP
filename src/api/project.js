"use strict";

var path = require("path");
var fs = require("fs");

var projectModel = require("../model/project");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var project = {
    add: function (params, cb) {
        var createData = {
          name:params.name,
          url:params.url,
          location:params.location,
          checkbox:params.checkbox,
          alt: params.alt,
          description: params.description,
          featuredesc: params.featuredesc,
          project_use: params.project_use,
        project_list:params.projects,
          project_property:params.project_property,
          subheading: params.subheading,
          threesixtycheckbox:params.threesixtycheckbox,
          threesixtyurl: params.threesixtyurl,
          threedimage: params.threedimage,
        };
        console.log({params})
    
        if (params.files && params.files.image) {
          var fileName =
            params.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/project/" + fileName;
    
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

        if (params.files && params.files.threesixtyimage) {
          var fileName =
            params.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() +
            params.files.threesixtyimage.md5 +
            path.extname(params.files.threesixtyimage.name);
          var filePath = "public/uploads/project/" + fileName;
    
          fs.writeFile(filePath, params.files.threesixtyimage.data, function (
            err,
            written
          ) {
            if (err) {
              console.log("Error in uploading icon." + err);
            }
          });


        createData["threesixtyimage"] = filePath;
        }

        
       
       
             
  if(params.files && params.files.mobileimage){
    var fileNames =
    "project" +
    params.files.mobileimage.md5 +
    path.extname(params.files.mobileimage.name);
  var filePaths = "public/uploads/project/" + fileNames;

  fs.writeFile(filePaths, params.files.mobileimage.data, function (
    err,
    written
  ) {
    if (err) {
      console.log("Error in uploading icon." + err);
    }
  });

  createData["mobileimage"] = filePaths;
  }

  if (params.files && params.files.featuredmainimg) {
    var fileName =
      params.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() +
      params.files.featuredmainimg.md5 +
      path.extname(params.files.featuredmainimg.name);
    var filePath = "public/uploads/project/" + fileName;

    fs.writeFile(filePath, params.files.featuredmainimg.data, function (
      err,
      written
    ) {
      if (err) {
        console.log("Error in uploading icon." + err);
      }
    });


  createData["featuredmainimg"] = filePath;
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
       
if(params.files && params.files.featuredsecondimg){
var fileNames =
"project" +
params.files.featuredsecondimg.md5 +
path.extname(params.files.featuredsecondimg.name);
var filePaths = "public/uploads/project/" + fileNames;

fs.writeFile(filePaths, params.files.featuredsecondimg.data, function (
err,
written
) {
if (err) {
console.log("Error in uploading icon." + err);
}
});

createData["featuredsecondimg"] = filePaths;
}

  
  console.log({params})
  console.log({createData})
  
          projectModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        projectModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        projectModel.fetchById(id, function(err, result) {
           if (err) {
                return cb(err);
            }
            return cb(err, result);
        });
    },

    fetchByUrl: function(url, cb) {
      projectModel.fetchByUrl(url, function(err, result) {
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
          location:params.location,
          alt: params.alt,
          description: params.description,
          shortdescription: params.shortdescription,
        project_use: params.project_use,
        project_property:params.project_property,
        project_list:params.projects,
        checkbox:params.checkbox,
        threesixtycheckbox:params.threesixtycheckbox,
        subheading: params.subheading,
        featuredesc: params.featuredesc, 
        threesixtyurl: params.threesixtyurl,
        threedimage: params.threedimage,
      };
  console.log({params})
      if (params.files && params.files.image) {
        var fileName =
          "project" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/project/" + fileName;
  
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
     
  if(params.files && params.files.mobileimage){
    var fileNames =
    "project" +
    params.files.mobileimage.md5 +
    path.extname(params.files.mobileimage.name);
  var filePaths = "public/uploads/project/" + fileNames;

  fs.writeFile(filePaths, params.files.mobileimage.data, function (
    err,
    written
  ) {
    if (err) {
      console.log("Error in uploading icon." + err);
    }
  });

  createData["mobileimage"] = filePaths;
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

  if(params.files && params.files.threesixtyimage){
    var fileNames =
    "project" +
    params.files.threesixtyimage.md5 +
    path.extname(params.files.threesixtyimage.name);
  var filePaths = "public/uploads/project/" + fileNames;

  fs.writeFile(filePaths, params.files.threesixtyimage.data, function (
    err,
    written
  ) {
    if (err) {
      console.log("Error in uploading icon." + err);
    }
  });

  createData["threesixtyimage"] = filePaths;
  }
 
  if (params.files && params.files.featuredmainimg) {
    var fileName =
      "project" +
      params.files.featuredmainimg.md5 +
      path.extname(params.files.featuredmainimg.name);
    var filePath = "public/uploads/project/" + fileName;

    fs.writeFile(filePath, params.files.featuredmainimg.data, function (
      err,
      written
    ) {
      if (err) {
        console.log("Error in uploading icon." + err);
      }
    });

    createData["featuredmainimg"] = filePath;
  }
 
if(params.files && params.files.featuredsecondimg){
var fileNames =
"project" +
params.files.featuredsecondimg.md5 +
path.extname(params.files.featuredsecondimg.name);
var filePaths = "public/uploads/project/" + fileNames;

fs.writeFile(filePaths, params.files.featuredsecondimg.data, function (
err,
written
) {
if (err) {
  console.log("Error in uploading icon." + err);
}
});

createData["featuredsecondimg"] = filePaths;
}

  
      console.log({createData})
      projectModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        projectModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      projectModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = project;