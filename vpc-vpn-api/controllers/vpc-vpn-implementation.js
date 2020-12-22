const request = require('request')
const config = require('config')


//functtion to generate authorization token
function generateToken(cb){
    request.post(
        'https://anypoint.mulesoft.com/accounts/login',
        {
          json: {
          "username" : config.get('anypoint.username') ,
          "password" : config.get('anypoint.password')
          },
        },
        (error, res, body) => {
          if (error) {
            console.error(error)
            return
          }
        console.log(`statusCode: ${res.statusCode}`)
        console.log("********************")

        console.log("AUTH CODE GENERATED")
        console.log("********************")

        //console.log(body)
        cb(body)
        }
      )
}

//function to create VPC
function createVpc(generated){

    generateToken((body)=>{
    
        console.log("generated : ",generated)

        request.post(
          
            "https://anypoint.mulesoft.com/cloudhub/api/organizations/" + config.get('anypoint.orgid') + "/vpcs",
            {
            headers : { "content-type": "application/json","Authorization": `Bearer ${body.access_token}` },
            body : JSON.stringify(generated)
            },
          (error, res, body) => {
            if (error) {
              console.error(error)
              return
            }
            console.log(`statusCode: ${res.statusCode}`)
            console.log(body)
            console.log(JSON.parse(body))
        
        })
            
    })

}

//function to get all VPC
function getVpcs(){

    generateToken((body)=>{

        request.get(
          
            "https://anypoint.mulesoft.com/cloudhub/api/organizations/" + config.get('anypoint.orgid') + "/vpcs",
            {
            headers : { "content-type": "application/json","Authorization": `Bearer ${body.access_token}` }
            },
          (error, res, body) => {
            if (error) {
              console.error(error)
              return
            }
            console.log(`statusCode: ${res.statusCode}`)
            //console.log(body)
            console.log("********************")

            console.log("LIST OF VPCs:")
            console.log("********************")
            console.log(JSON.parse(body))
            

        
        })
            
    })

}

//function to get VPC by id
function getVpcById(vpcId){

  generateToken((body)=>{

      request.get(
        
          "https://anypoint.mulesoft.com/cloudhub/api/organizations/" + config.get('anypoint.orgid') + "/vpcs/" + vpcId,
          {
          headers : { "content-type": "application/json","Authorization": `Bearer ${body.access_token}` }
          },
        (error, res, body) => {
          if (error) {
            console.error(error)
            return
          }
          console.log(`statusCode: ${res.statusCode}`)
          console.log("********************")
          console.log("VPC BY VPC id")
          console.log(JSON.parse(body))
          console.log("********************")
         // console.log(JSON.parse(body))
      
      })
          
  })

}

//function to delete VPC by id
function deleteVpcById(vpcId){

  generateToken((body)=>{

      request.delete(
        
          "https://anypoint.mulesoft.com/cloudhub/api/organizations/" + config.get('anypoint.orgid') + "/vpcs/" + vpcId,
          {
          headers : { "content-type": "application/json","Authorization": `Bearer ${body.access_token}` }
          },
        (error, res, body) => {
          if (error) {
            console.error(error)
            return
          }
          console.log(`statusCode: ${res.statusCode}`)
          console.log("********************")

          console.log("VPC DELETED")
          console.log("********************")
                
      })
          
  })

}

//function to create new vpn
function createVpn(vpcId,generated){

    generateToken((body)=>{
    
        //console.log("VPCId : ",vpcId)

        request.post(
          
            "https://anypoint.mulesoft.com/cloudhub/api/organizations/" + config.get('anypoint.orgid') + "/vpcs/" + vpcId + "/ipsec",
            {
            headers : { "content-type": "application/json","Authorization": `Bearer ${body.access_token}` },
            body : JSON.stringify(generated)
            },
          (error, res, body) => {
            if (error) {
              console.error(error)
              return
            }
            console.log(`statusCode: ${res.statusCode}`)
            //console.log(body)
            console.log("********************")

            console.log(JSON.parse(body))
            console.log("********************")

        
        })
            
    })

}

//function to get all vpn
function getVpns(vpcId){

    generateToken((body)=>{
    
        //console.log("VPCId : ",vpcId)

        request.get(
          
            "https://anypoint.mulesoft.com/cloudhub/api/organizations/" + config.get('anypoint.orgid') + "/vpcs/" + vpcId + "/ipsec",
            {
            headers : { "content-type": "application/json","Authorization": `Bearer ${body.access_token}` }
            },
          (error, res, body) => {
            if (error) {
              console.error(error)
              return
            }
            console.log(`statusCode: ${res.statusCode}`)
            console.log("********************")

            
            //console.log(body)
            console.log(JSON.parse(body))
            console.log("********************")

        
        })
            
    })

}

//function to get vpn by Id
function getVpnById(vpcId,vpnId){

  generateToken((body)=>{
  
      //console.log("VPCId : ",vpcId)

      request.get(
        
          "https://anypoint.mulesoft.com/cloudhub/api/organizations/" + config.get('anypoint.orgid') + "/vpcs/" + vpcId + "/ipsec/" + vpnId,
          {
          headers : { "content-type": "application/json","Authorization": `Bearer ${body.access_token}` }
          },
        (error, res, body) => {
          if (error) {
            console.error(error)
            return
          }
          console.log(`statusCode: ${res.statusCode}`)
          console.log("********************")

          console.log(JSON.parse(body))
          console.log("********************")

      
      })
          
  })

}

//function to delete vpn by Id
function deleteVpnById(vpcId,vpnId){

  generateToken((body)=>{
  
      //console.log("VPCId : ",vpcId)

      request.delete(
        
          "https://anypoint.mulesoft.com/cloudhub/api/organizations/" + config.get('anypoint.orgid') + "/vpcs/" + vpcId + "/ipsec/" + vpnId,
          {
          headers : { "content-type": "application/json","Authorization": `Bearer ${body.access_token}` }
          },
        (error, res, body) => {
          if (error) {
            console.error(error)
            return
          }
          console.log(`statusCode: ${res.statusCode}`)
          console.log("********************")

          console.log("VPN DELETED")
         
      
      })
          
  })

}

module.exports={createVpc,getVpcs,getVpcById,deleteVpcById,createVpn,getVpns,getVpnById,deleteVpnById}