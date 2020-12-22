'use strict';
const {createVpc,getVpcs,getVpcById,deleteVpcById,createVpn,getVpns,getVpnById,deleteVpnById} = require('./vpc-vpn-implementation')

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.vpcGET = function vpcGET (req, res, next) {
  Default.vpcGET()
    .then(function (response) {
      getVpcs ()

      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.vpcPOST = function vpcPOST (req, res, next) {
  var generated = req.swagger.params['generated'].value;
  Default.vpcPOST(generated)
    .then(function (response) {
      createVpc (generated)

      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.vpcVpcidDELETE = function vpcVpcidDELETE (req, res, next) {
  var vpcid = req.swagger.params['vpcid'].value;
  Default.vpcVpcidDELETE(vpcid)
    .then(function (response) {
      deleteVpcById(vpcid)

      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.vpcVpcidGET = function vpcVpcidGET (req, res, next) {
  var vpcid = req.swagger.params['vpcid'].value;
  Default.vpcVpcidGET(vpcid)
    .then(function (response) {
      getVpcById(vpcid)

      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.vpnVpcidGET = function vpnVpcidGET (req, res, next) {
  var vpcid = req.swagger.params['vpcid'].value;
  Default.vpnVpcidGET(vpcid)
    .then(function (response) {
      getVpns(vpcid)

      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.vpnVpcidPOST = function vpnVpcidPOST (req, res, next) {
  var vpcid = req.swagger.params['vpcid'].value;
  var generated = req.swagger.params['generated'].value;
  Default.vpnVpcidPOST(vpcid,generated)
    .then(function (response) {
      createVpn(vpcid,generated)

      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.vpnVpcidVpnidDELETE = function vpnVpcidVpnidDELETE (req, res, next) {
  var vpcid = req.swagger.params['vpcid'].value;
  var vpnid = req.swagger.params['vpnid'].value;
  Default.vpnVpcidVpnidDELETE(vpcid,vpnid)
    .then(function (response) {
      deleteVpnById(vpcid,vpnid)


      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.vpnVpcidVpnidGET = function vpnVpcidVpnidGET (req, res, next) {
  var vpcid = req.swagger.params['vpcid'].value;
  var vpnid = req.swagger.params['vpnid'].value;
  Default.vpnVpcidVpnidGET(vpcid,vpnid)
    .then(function (response) {
      getVpnById(vpcid,vpnid)

      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
