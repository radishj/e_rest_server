var ottoman = require('ottoman');
var Item = require("./models").Item;
var bodyParser = require('body-parser');
var axios = require('axios');
ottoman.ensureIndices(function(err) {
   if (err) return console.error(err);
 });
var jsonParser = bodyParser.json();
const fs = require('fs');
let rawdata = fs.readFileSync('data/sysData.json');
let sys = JSON.parse(rawdata);
rawdata = fs.readFileSync('data/tasti-02-26-2020.json');
let tasti = JSON.parse(rawdata);
delete tasti.users;
Object.values(tasti.merchants).forEach(rest => {
  delete rest.orders;
});

var appRouter = function(app){
  app.get("/category", function(req, res){

  });

  app.get("/category/:cid", function(req, res){
      
  });

  app.get("/item/All", function(req, res){
      Item.find({}, function(error, result){
          if(error){
              console.log(error);
              return res.status(error.code).send(error.msg);
          }
          console.log(result);
          res.send(result);
      })
      
  });

  app.post("/item", jsonParser, function(req, res){
      Item.createAndSave(req.body, function(error, done){
          console.log(req.body);
          if(error){
              return res.status(400).send(error.toString());
          }
          console.log('Item created.');
          //res.send(result);
      })
      
  });

  app.get("/option", function(req, res){
      
  });

  app.post("/customer/login", function(req, res){
          var user = req.body;
          console.log(user);
          if(user.phone == "7783502200" && user.password == "asdfaf")
          {
              console.log('Item created.');
              res.send(sys);
          }
          else
          {
              res.send('{"msg":"login & password not matching."}');
          }
  });

  app.post("/tasti", async function(req, res){
    var user = req.body;
    console.log('Get /tasti,' + user);
    if(user.phone == "7783502200" && user.password == "asdfaf")
    {
      let tastiRest = tasti.merchants;
      //replace undefined and invalid location data, 
      let codeChanged = false;
      //console.log('start:'+codeChanged);
      var rests = Object.values(tastiRest);
      for(var i = 0; i < rests.length; i++)
      {
        var rest = rests[i];
        if(!rest.address.location || (rest.address.location.latitude==35.9241863 && rest.address.location.longitude==-78.845495))
        {
          address = addressStr(rest);
          code = await getGCode(address);
          rest.address.location = { "latitude": code.lat, "longitude": code.lng};
          codeChanged = true;
        }
      };
      //console.log('end:'+codeChanged);
      if(codeChanged)
      {
        fs.writeFileSync('data/tasti-02-26-2020.json', JSON.stringify(tasti,null,'  '));
        console.log('data/tasti-02-26-2020.json updated.');
      }
      Object.values(tastiRest).forEach(rest => {
        rest.orders = {};
      });
      res.send(tastiRest);
    }
    else
    {
        res.send('{"msg":"login & password not matching."}');
    }
  });
  app.post("/tasti-request", async function(req, res){
    var data = req.body;
    console.log('Get /tasti-request,' + JSON.stringify(data));
    users = Object.values(tasti.logins);
    var returnData={status:'success'};
    var findUser=false;
    for(var user of users){
      if(user.token == data.token){
        var allValid=true;
        for(var id of data.selectOrders){
          if(!tasti.merchants[id]){
            allValid=false;
            returnData.status='orderMissing';
            returnData.allOrderIDs = Object.keys(tasti.merchants);
            break;
          }
        };
        if(allValid){
          for(var id of data.selectOrders){
            delete tasti.merchants[id];
          }
        }
        findUser=true;
        break;
      }
    }
    if(!findUser){
      returnData.status='wrongToken';   
    }
    res.send(returnData);
  });
  
  app.post("/tasti-login", async function(req, res){
    var user = req.body;
    console.log('Get /tasti-login,' + JSON.stringify(user));
    users = Object.values(tasti.logins);
    var success = -1;
    var data='failed';
    for(var i=0; i<users.length; i++){
      if(users[i].phone == user.phone && users[i].password == user.password){
        if(users[i].token)
        {
          success = 1;//user relogin, regenerate token.
        }
        else
        {
          success = 0; //first time login
        }
        var d = new Date();
        var n = d.getTime();
        user.token = n.toString();
        user.name = users[i].name;
        users[i].token = user.token;
        break;
      }
    }
    if(success>=0){
      data = {"user":user, "merchants":tasti.merchants};    
    }
    console.log('login return,' + JSON.stringify(data.user));
    res.send(data);
      
      //replace undefined and invalid location data, 
      /*
      let codeChanged = false;
      //console.log('start:'+codeChanged);
      //35.9241863 & -78.845495 are fake values, get the real ones.
      for(var i = 0; i < rests.length; i++)
      {
        var rest = rests[i];
        if(!rest.address.location || (rest.address.location.latitude==35.9241863 && rest.address.location.longitude==-78.845495))
        {
          address = addressStr(rest);
          code = await getGCode(address);
          rest.address.location = { "latitude": code.lat, "longitude": code.lng};
          codeChanged = true;
        }
      };
      //console.log('end:'+codeChanged);
      if(codeChanged)
      {
        fs.writeFileSync('data/tasti-02-26-2020.json', JSON.stringify(tasti,null,'  '));
        console.log('data/tasti-02-26-2020.json updated.');
      }*/

  });
};
function addressStr(merchant){
  let addr = merchant.address;
  return addr.street1 + "," + addr.city + "," + addr.state+ "," + addr.country;
};
async function getGCode(address)
{
    var addr = encodeURI(address);
    var apiCode = "AIzaSyD771wv0bZmSuvvpH8dpBQq1C5kQIKWYag";
    var code="";
    try {
        res= await axios.get("https://maps.googleapis.com/maps/api/geocode/json?key="+apiCode+"&address="+addr);
        code = res.data.results[0].geometry.location;
        console.log("new GeoCode:" + JSON.stringify(code));
    } catch (error) {
      console.log("url1:"+"https://maps.googleapis.com/maps/api/geocode/json?key="+apiCode+"&address="+addr);
      console.error(error);
    }
    
    //console.log("code:"+JSON.stringify(code.results.geometry.location));
    return code;
}
module.exports = appRouter;