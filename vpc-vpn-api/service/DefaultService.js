'use strict';


/**
 * get the list and details of all VPCs
 *
 * returns get-vpcs-DT
 **/
exports.vpcGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "12345",
    "name" : "myProductionVpc",
    "region" : "us-east-1",
    "cidrBlock" : "192.168.1.0/24",
    "internalDns" : {
      "dnsServers" : [ "8.8.8.8", "8.8.8.4" ],
      "specialDomains" : [ "mydomain.local", "mydomain.localdomain" ]
    },
    "isDefault" : false,
    "associatedEnvironments" : [ "eeeeb145-6f79-402d-85fc-8c90905d2490" ],
    "ownerId" : "5555555-6666-7777-8888-99999999999",
    "sharedWith" : [ "0000000-1111-2222-3333-44444444444" ],
    "firewallRules" : [ {
      "cidrBlock" : "0.0.0.0/0",
      "protocol" : "tcp",
      "fromPort" : 8081,
      "toPort" : 8082
    }, {
      "cidrBlock" : "192.168.1.0/24",
      "protocol" : "tcp",
      "fromPort" : 8091,
      "toPort" : 8092
    } ]
  } ],
  "total" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * create a VPC
 *
 * generated Post-vpc-DT  (optional)
 * returns post-vpc-response-DT
 **/
exports.vpcPOST = function(generated) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "12345",
  "name" : "myProductionVpc",
  "region" : "us-east-1",
  "cidrBlock" : "192.168.1.0/24",
  "internalDns" : {
    "dnsServers" : [ "8.8.8.8", "8.8.8.4" ],
    "specialDomains" : [ "mydomain.local", "mydomain.localdomain" ]
  },
  "isDefault" : false,
  "associatedEnvironments" : [ "eeeeb145-6f79-402d-85fc-8c90905d2490" ],
  "ownerId" : [ "5555555-6666-7777-8888-99999999999" ],
  "sharedWith" : [ "0000000-1111-2222-3333-44444444444" ],
  "firewallRules" : [ {
    "cidrBlock" : "0.0.0.0/0",
    "protocol" : "tcp",
    "fromPort" : 8081,
    "toPort" : 8082
  }, {
    "cidrBlock" : "192.168.1.0/24",
    "protocol" : "tcp",
    "fromPort" : 8091,
    "toPort" : 8092
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a vpc by vpc Id
 *
 * vpcid String 
 * returns Object
 **/
exports.vpcVpcidDELETE = function(vpcid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "vpc deleted successfully"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the details of a specific VPC by vpc Id
 *
 * vpcid String 
 * returns get-vpc-DT
 **/
exports.vpcVpcidGET = function(vpcid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "vpc-0ccfba9423074b6f8",
  "name" : "myProductionVpc",
  "region" : "us-east-1",
  "cidrBlock" : "192.168.1.0/24",
  "internalDns" : {
    "dnsServers" : [ ],
    "specialDomains" : [ ]
  },
  "isDefault" : false,
  "associatedEnvironments" : [ "3b4a2576-4091-4950-bb73-21ca40537b7d" ],
  "ownerId" : "7339eb19-624f-4496-a889-beb2ec98ee66",
  "sharedWith" : [ ],
  "firewallRules" : [ {
    "cidrBlock" : "192.168.1.0/24",
    "protocol" : "tcp",
    "fromPort" : 8091,
    "toPort" : 8092
  }, {
    "cidrBlock" : "0.0.0.0/0",
    "protocol" : "tcp",
    "fromPort" : 8081,
    "toPort" : 8082
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get the list and of all VPNs
 *
 * vpcid String 
 * returns get-vpns-DT
 **/
exports.vpnVpcidGET = function(vpcid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "4a6e3da830767b280a80ce33",
    "spec" : {
      "name" : "myDatacenterVpn",
      "remoteIpAddress" : "100.100.100.100",
      "routingType" : "STATIC",
      "remoteNetworks" : [ "10.5.0.0/16" ],
      "tunnelConfigs" : [ {
        "psk" : "LKvQAyV7DyR1Q7kZoIAymsqFOh3SWb2S",
        "ptpCidr" : "169.254.12.0/30"
      }, {
        "psk" : "q.NFQABcVnKLp2.zjR7Pw7YtH9gICJlt",
        "ptpCidr" : "169.254.12.4/30"
      } ]
    },
    "state" : {
      "vpnConnectionStatus" : "AVAILABLE",
      "createdAt" : "2017-01-01T00:00:01-0800",
      "bgpRoutes" : [ ],
      "staticRoutes" : [ {
        "remoteNetwork" : "10.5.0.0/16",
        "state" : "AVAILABLE"
      } ],
      "vpnTunnels" : [ {
        "acceptedRouteCount" : 1,
        "lastStatusChange" : "2018-01-13T16:30:07-0800",
        "localExternalIpAddress" : "50.112.49.102",
        "localPtpIpAddress" : "169.254.13.241",
        "remotePtpIpAddress" : "169.254.13.242",
        "psk" : "LKvQAyV7DyR1Q7kZoIAymsqFOh3SWb2S",
        "status" : "UP",
        "statusMessage" : ""
      }, {
        "acceptedRouteCount" : 1,
        "lastStatusChange" : "2018-01-13T16:30:07-0800",
        "localExternalIpAddress" : "34.216.124.13",
        "localPtpIpAddress" : "169.254.15.17",
        "remotePtpIpAddress" : "169.254.15.18",
        "psk" : "q.NFQABcVnKLp2.zjR7Pw7YtH9gICJlt",
        "status" : "DOWN",
        "statusMessage" : ""
      } ]
    }
  } ],
  "total" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create and set-up a vpn
 *
 * vpcid String 
 * generated Post-vpn-DT  (optional)
 * returns Object
 **/
exports.vpnVpcidPOST = function(vpcid,generated) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "myDatacenterVpn",
  "localAsn" : 64512,
  "remoteIpAddress" : "52.152.216.66",
  "remoteNetworks" : [ "10.0.0.0/24" ],
  "tunnelConfigs" : [ ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a specific vpn by vpnId
 *
 * vpcid String 
 * vpnid String 
 * returns Object
 **/
exports.vpnVpcidVpnidDELETE = function(vpcid,vpnid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "vpn deleted"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the details of a specific vpn by vpn Id
 *
 * vpcid String 
 * vpnid String 
 * returns get-vpn-DT
 **/
exports.vpnVpcidVpnidGET = function(vpcid,vpnid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "4a6e3da830767b280a80ce33",
  "spec" : {
    "name" : "myDatacenterVpn",
    "remoteAsn" : 65000,
    "localAsn" : 7224,
    "remoteIpAddress" : "100.100.100.100",
    "routingType" : "BGP"
  },
  "state" : {
    "vpnConnectionStatus" : "AVAILABLE",
    "createdAt" : "2017-01-01T00:00:01-0800",
    "bgpRoutes" : [ {
      "remoteNetwork" : "10.5.0.0/16",
      "state" : "ACTIVE"
    } ],
    "staticRoutes" : [ ],
    "vpnTunnels" : [ {
      "acceptedRouteCount" : 2,
      "lastStatusChange" : "2018-01-13T16:30:07-0800",
      "localExternalIpAddress" : "50.112.49.102",
      "localPtpIpAddress" : "169.254.13.241",
      "remotePtpIpAddress" : "169.254.13.242",
      "psk" : "LKvQAyV7DyR1Q7kZoIAymsqFOh3SWb2S",
      "status" : "UP",
      "statusMessage" : ""
    }, {
      "acceptedRouteCount" : 2,
      "lastStatusChange" : "2018-01-13T16:30:07-0800",
      "localExternalIpAddress" : "34.216.124.13",
      "localPtpIpAddress" : "169.254.15.17",
      "remotePtpIpAddress" : "169.254.15.18",
      "psk" : "q.NFQABcVnKLp2.zjR7Pw7YtH9gICJlt",
      "status" : "DOWN",
      "statusMessage" : ""
    } ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

