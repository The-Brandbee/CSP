"use strict";

var path = require("path");
var fs = require("fs");

var enquiryModel = require("../model/enquiry");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");
var needle = require("needle");

var enquiry = {
  add: function (params, cb) {
    var createData = {
        name: params.name,
        phone: params.phone,
        email: params.email,
        category: params.category,
        message: params.message,
        dnd: params.dnd,
        location:params.location,
        type: params.type,
        service_type:params.service_type
    };
console.log({params})
console.log(createData.location)


    enquiryModel.create(createData, function (err, result) {
      if (err) {
        return cb(err);
      }

      if(createData.location && createData.location.split("/")[1] == "senior-living-residence" || createData.location == "dehradun"){
     

      let enqdata = {
        firstName: params.name.split(" ")[0],
        lastName: params.name.split(" ")[1]?params.name.split(" ")[1]:"",
        email: params.email,
        mobilePhone: params.phone,
        comments: params.message,
        originFrom: "Auto Lead from Any Source",
        product: params.location.split("/")[1],
        campaign: "",
        isUpdatefromUIDate: false,
        isImported: true,
        DumpdataObjectId: "010520211445",
        tenantId: "88"
      }
      
      
console.log({enqdata})
      
         let enq = needle("POST","https://farvisioncloud.com/sfasync/api/syncleads/website",enqdata, {json: true})
      
         enq.then((res)=>{
console.log({enq:res.body.status})

      if(res.body.status){
          return cb(err, result);
      } else{
        return cb(
          ec.appError({
            status: ec.API_ERROR,
            message: "API Error",
          })
        )
      }
        })
      }else{
        let enqdatas = {
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          grant_type: process.env.GRANT_TYPE,
          scope: process.env.SCOPE,
          username: process.env.USERNAME,
          api_key: process.env.API_KEY
        }
    
        let enqs = needle("POST","https://apps.docengage.in/oauth/token",enqdatas, {json: true})

        enqs.then((res)=>{

     if(res.body.access_token){
let city = ""
      if(createData.location == "dehradun"){
        city = params.category
      }

      let enqdatass = {
        leadName: params.name,
        leadMobile: params.phone,
        leadCareCenter: params.category,
        leadEmail: params.email,
        leadNote: "",
        leadCity: city,
        leadLocality: "",
        leadRequestedService: params.category,
        serviceType:params.category,
        caseCategory: "",
        enquiryType: "Online",
        // enquirySource: "",
        // enquiryKeyWords: "",
        // campaignName: "",
        serviceDate: "",
        "enquirySubType": params.utm_medium,
        "campaignName": params.utm_campaign,
        // "enquiryKeyWords": "",
        "enquirySource": params.utm_source,
        // "customFieldsData": {"field_1_62":params.customFieldsData},
        "customFieldsData": {},
        enquiryKeyWords:params.utm_term,
      }

      enqdatass["customFieldsData"]["field_1_62"] = params.customFieldsData;

      console.log({"enqdatas-enq":enqdatass})

      const options = { headers: { Authorization: `${res.body.token_type} ${res.body.access_token}` }, json: true };
      
      let enqss = needle("POST","https://apps.docengage.in/api/v2/push_lead",enqdatass,options)

      
      enqss.then((ress)=>{
        console.log(ress.statusCode);
   if(ress.statusCode == 201 || ress.statusCode == 200){
    return cb(err, {success: true});
  } else{
    return cb(
      ec.appError({
        status: ec.API_ERROR,
        message: "API Error",
      })
    )
  }
    })

     } else{
       return cb(
         ec.appError({
           status: ec.API_ERROR,
           message: "API Error",
         })
       )
     }
       })

      }
    });
  },

  fetchAll: function (cb) {
    enquiryModel.fetchAll(function (err, result) {
      if (err) {
        return cb(err);
      }
      return cb(err, result);
    });
  },

  fetchById: function (id, cb) {
    enquiryModel.fetchById(id, function (err, result) {
      if (err) {
        return cb(err);
      }
      return cb(err, result);
    });
  },

  update: function (params, cb) {
    var createData = {
        name: params.name,
        phone: params.phone,
        email: params.email,
        category: params.category,
        message: params.message,
        dnd: params.dnd,
    };


    enquiryModel.update(params._id, createData, function (err, result) {
      if (err) {
        return cb(err);
      }

      enquiryModel.fetchById(params._id, function (err, updatedData) {
        if (err) {
          return cb(err);
        }
        return cb(err, updatedData);
      });
    });
  },

  deleteId: function (params, cb) {
    enquiryModel.deleteId(params, function (err, result) {
      if (err) {
        return cb(err);
      }
      return cb(err, result);
    });
  },
};
module.exports = enquiry;
