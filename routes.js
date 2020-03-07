var ottoman = require('ottoman');
var Item = require("./models").Item;
var bodyParser = require('body-parser');
ottoman.ensureIndices(function(err) {
   if (err) return console.error(err);
 });
var jsonParser = bodyParser.json();
var sys = {
    phone : '7783502200',
    name : 'steven',
    merchants: {
        "8K4TVlYVjKqlRdMWEwi2": {
            "distance": "6.6 miles",
            "rate": "4.6 ****",
            "discount": "10% Loyalty",
            "name": "Cafe Meridian & Catering Company",
            "prepayment": { "credit": 490.2, "saving": 400 },
            "createdAt": { "_seconds": 1557551045, "_nanoseconds": 17000000 },
            "discountInfo": {
              "firstOrderReduction": -5,
              "groupID": "Tasti",
              "rewardMinCredit": -10,
              "eachDiscount": 0.1,
              "firstDiscount": 0.1,
              "rewardMaxCredit": -20,
              "taxRate": 0.075
            },
            "priceLevel": "$$",
            "salesVolume30Days": 3035,
            "cuisinesDes": [ "American(New)", "American(Traditional)", "Bars" ],
            "coverPhotoUrl": "https://firebasestorage.googleapis.com/v0/b/easyeat-ef6db.appspot.com/o/restaurants%2Fcafe_meridian%2Fcafe%20meridian.png?alt=media&token=4bcf1c24-5f9a-4578-8071-bc0fec57e870",
            "starRating": 4.615053272399396,
            "officialUrl": "http://www.cafemeridian.com",
            "businessHours": [ { "openAt": "11:00", "closedAt": "14:00", "dayOfWeek": "Monday - Friday" } ],
            "description": "Gourmet sandwiches, customizable salads & daily hot entrees served in a contemporary space.",
            "address": {
              "city": "Durham",
              "state": "NC",
              "country": "US",
              "street1": "2500 Meridian Parkway Suite 130",
              "location": { "longitude": -78.8958947, "latitude": 35.9113547 },
              "phone": "919-361-9333",
              "zip": "27713"
            },
            "sort": 1000,
            "starRatingCount": 291,
            "status": "HIDDEN",
            "googleUrl": "https://g.co/kgs/QfPioK",
            "commonPrices": [ "13.85", "15.70", "10.85", "14.50", "18.95", "7.99", "12.99" ],
            "menus": {
              "PJNIylwmepSj9IfkoQ9d": {
                "name": "Name",
                "description": "Description",
                "categories": {
                  "avZEKgJGJXTGFydabaGf": {
                    "visiable": true,
                    "name": "Today's Specials for lunch",
                    "description": "",
                    "products": {
                      "4v3FcZl9PXMO36d6JGUg": {
                        "photoUrl": "https://firebasestorage.googleapis.com/v0/b/easyeat-ef6db.appspot.com/o/menu%2Fcafe%20meridian%2FDSCN0888e.jpg?alt=media&token=24848d4f-49d7-4ab9-afab-d52e37b7370c",
                        "name": "Mango Chicken",
                        "visible": true,
                        "defaultAttribute": 0,
                        "attributes": [
                          { "name": "Grilled", "description": "Choose a Size", "price": 7.99 },
                          { "price": 7.99, "name": "Crispy", "description": "Choose a Size" }
                        ],
                        "price": 7.99,
                        "description": "Marinated grilled or crispy chicken breast topped with our fresh mango fruit salsa and served with two sides. PLEASE SPECIFY GRILLED OR CRISPY CHICKEN.",
                        "salesVolume30Days": 30,
                        "options": [
                          {
                            "sides": [
                              { "maxCount": 1, "minCount": 0, "price": 0, "name": "Caesar Salad" },
                              { "name": "Rice Pilaf", "maxCount": 1, "minCount": 0, "price": 0 },
                              { "price": 0, "name": "Kale Salad", "maxCount": 1, "minCount": 0 },
                              { "price": 0, "name": "Seasoned Veggies", "maxCount": 1, "minCount": 0 },
                              { "name": "Quinoa & Cranberry", "maxCount": 1, "minCount": 0, "price": 0 },
                              { "maxCount": 1, "minCount": 0, "price": 0, "name": "Beets & Onion" },
                              { "maxCount": 1, "minCount": 0, "price": 0, "name": "Cucumber & Tomato" },
                              { "price": 0, "name": "Garbanzo & Tomato", "maxCount": 1, "minCount": 0 },
                              { "price": 0, "name": "Bowtie Pesto", "maxCount": 1, "minCount": 0 },
                              { "price": 0, "name": "Black Bean & Corn", "maxCount": 1, "minCount": 0 },
                              { "name": "Macaroni Cavatappi", "maxCount": 1, "minCount": 0, "price": 0 },
                              { "name": "Red Skin Potato", "maxCount": 1, "minCount": 0, "price": 0 },
                              { "name": "Spinach & Orzo", "maxCount": 1, "minCount": 0, "price": 0 },
                              {
                                "name": "Fresh Fruit (Seasonal)",
                                "maxCount": 1,
                                "minCount": 0,
                                "price": 0
                              },
                              { "name": "Greek Salad", "maxCount": 1, "minCount": 0, "price": 0 }
                            ],
                            "name": "Choose Two Sides (1 - 2) Required",
                            "maxCount": 2,
                            "minCount": 1
                          },
                          {
                            "sides": [
                              { "name": "8 oz Soup", "maxCount": 1, "minCount": 0, "price": 2.69 },
                              { "name": "12 oz Soup", "maxCount": 1, "minCount": 0, "price": 3.49 },
                              {
                                "name": "Turkey Chili Cup",
                                "maxCount": 1,
                                "minCount": 0,
                                "price": 3.49
                              },
                              {
                                "name": "Turkey Chili Bowl",
                                "maxCount": 1,
                                "minCount": 0,
                                "price": 4.49
                              }
                            ],
                            "name": "Add A Soup or Turkey Chili",
                            "maxCount": 2
                          }
                        ]
                      },
                      "wQiV6RGrhzurOYFYxcQM": {
                        "options": [
                          {
                            "maxCount": 1,
                            "sides": [
                              {
                                "name": "Add Additional Tzatziki",
                                "maxCount": 1,
                                "minCount": 0,
                                "price": 0.59
                              }
                            ],
                            "name": "Extra Tzatziki"
                          },
                          {
                            "sides": [
                              { "name": "Caesar Salad", "maxCount": 1, "minCount": 0, "price": 0 },
                              { "name": "Rice Pilaf", "maxCount": 1, "minCount": 0, "price": 0 },
                              { "name": "Kale Salad", "maxCount": 1, "minCount": 0, "price": 0 },
                              { "maxCount": 1, "minCount": 0, "price": 0, "name": "Seasoned Veggies" },
                              { "price": 0, "name": "Quinoa & Cranberry", "maxCount": 1, "minCount": 0 },
                              { "maxCount": 1, "minCount": 0, "price": 0, "name": "Beets & Onion" },
                              { "price": 0, "name": "Cucumber & Tomato", "maxCount": 1, "minCount": 0 },
                              { "name": "Garbanzo & Tomato", "maxCount": 1, "minCount": 0, "price": 0 },
                              { "price": 0, "name": "Bowtie Pesto", "maxCount": 1, "minCount": 0 },
                              { "name": "Black Bean & Corn", "maxCount": 1, "minCount": 0, "price": 0 },
                              { "name": "Macaroni Cavatappi", "maxCount": 1, "minCount": 0, "price": 0 },
                              { "name": "Red Skin Potato", "maxCount": 1, "minCount": 0, "price": 0 },
                              { "name": "Spinach & Orzo", "maxCount": 1, "minCount": 0, "price": 0 },
                              {
                                "maxCount": 1,
                                "minCount": 0,
                                "price": 0,
                                "name": "Fresh Fruit (Seasonal)"
                              },
                              { "price": 0, "name": "Greek Salad", "maxCount": 1, "minCount": 0 }
                            ],
                            "name": "Choose Two Sides (1 - 2) Required",
                            "maxCount": 2,
                            "minCount": 1
                          },
                          {
                            "sides": [
                              { "name": "8 oz Soup", "maxCount": 1, "minCount": 0, "price": 2.69 },
                              { "name": "12 oz Soup", "maxCount": 1, "minCount": 0, "price": 3.49 },
                              {
                                "price": 3.49,
                                "name": "Turkey Chili Cup",
                                "maxCount": 1,
                                "minCount": 0
                              },
                              {
                                "maxCount": 1,
                                "minCount": 0,
                                "price": 4.49,
                                "name": "Turkey Chili Bowl"
                              }
                            ],
                            "name": "Add A Soup or Turkey Chili",
                            "maxCount": 2
                          }
                        ],
                        "photoUrl": "https://firebasestorage.googleapis.com/v0/b/easyeat-ef6db.appspot.com/o/menu%2Fcafe%20meridian%2FP1010250.jpg?alt=media&token=39d92e44-dea0-4b3d-8a37-a9c093b709d1",
                        "name": "Wild Fresh Salmon",
                        "visible": true,
                        "defaultAttribute": 0,
                        "price": 10.99,
                        "salesVolume30Days": 33,
                        "description": "Fresh wild salmon with our mild blackening rub, baked and served with two sides & tzatiki sauce."
                      }
                    }
                  }
                }
              }
            }
        },
        "3eRdOFW61umnHOzTcnDt": {
          "distance": "6.6 miles",
          "rate": "4.6 ****",
          "discount": "10% Loyalty",
          "sort": 1000,
          "starRatingCount": 44,
          "status": "HIDDEN",
          "googleUrl": "https://g.co/kgs/TY7x6L",
          "commonPrices": [ "33.85", "85.65", "10.85", "14.50", "18.95", "7.99", "12.99" ],
          "name": "Fusion Fish",
          "prepayment": { "credit": -1403.4599999999998, "saving": 400 },
          "discountInfo": {
            "rewardMinCredit": -10,
            "firstDiscount": 0.1,
            "eachDiscount": 0.1,
            "rewardMaxCredit": -30,
            "taxRate": 0.075,
            "firstOrderReduction": -10,
            "groupID": "Tasti"
          },
          "createdAt": { "_seconds": 1557551045, "_nanoseconds": 4000000 },
          "priceLevel": "$$$",
          "salesVolume30Days": 1227,
          "cuisinesDes": [ "Sushi & Asian Fusion" ],
          "coverPhotoUrl": "https://firebasestorage.googleapis.com/v0/b/easyeat-ef6db.appspot.com/o/restaurants%2Ffusion_fish%2Ffusion_fish_app_logo_145.png?alt=media&token=c4fcfee5-4c9d-49d7-b62f-8b91873ba88a",
          "starRating": 4.809622950744702,
          "officialUrl": "https://fusionfishcuisine.com",
          "businessHours": [
            { "openAt": "11:00", "closedAt": "15:00", "dayOfWeek": "Monday - Saturday" },
            { "dayOfWeek": "Monday - Saturday", "openAt": "18:00", "closedAt": "22:00" }
          ],
          "description": "Discovering the taste of refined exotic cuisine.",
          "address": {
            "city": "Chapel Hill",
            "state": "NC",
            "country": "US",
            "street1": "100 Meadowmont Village Cir #101",
            "location": { "latitude": 35.9241863, "longitude": -78.845495 },
            "zip": "27517"
          }
        },
        "6bOm3ERsx9ihmuBJ7T9m": {
            "distance": "6.6 miles",
            "rate": "4.6 ****",
            "discount": "10% Loyalty",
            "sort": 1000,
            "starRatingCount": 636,
            "status": "HIDDEN",
            "googleUrl": "https://g.co/kgs/3UtPzR",
            "commonPrices": [ "11.99", "15.70", "10.85", "14.50", "18.95", "7.99", "12.99" ],
            "name": "Basera Indian Cuisine",
            "prepayment": { "saving": 400, "credit": -732.4200000000004 },
            "createdAt": { "_seconds": 1557551045, "_nanoseconds": 4000000 },
            "discountInfo": {
              "rewardMinCredit": -10,
              "eachDiscount": 0.1,
              "firstDiscount": 0.1,
              "rewardMaxCredit": -30,
              "taxRate": 0.075,
              "firstOrderReduction": -5,
              "groupID": "Tasti"
            },
            "priceLevel": "$$",
            "salesVolume30Days": 1299,
            "cuisinesDes": [ "Indian Restaurant" ],
            "coverPhotoUrl": "https://firebasestorage.googleapis.com/v0/b/easyeat-ef6db.appspot.com/o/restaurants%2Fbasera_indian%2Fbasera_indian_app_logo_145.png?alt=media&token=94834a95-7235-4061-ad66-39940b1fea5c",
            "starRating": 3.8037756534525267,
            "officialUrl": "https://www.baseraindiancuisine.com",
            "businessHours": [
              { "openAt": "11:00", "closedAt": "15:00", "dayOfWeek": "Monday - Saturday" },
              { "openAt": "18:00", "closedAt": "22:00", "dayOfWeek": "Monday - Saturday" }
            ],
            "description": "Description: Basera Indian Cuisine is known for its modern interpretation of classic dishes and its insistence on only using high quality fresh ingredients.",
            "address": {
              "city": "Durham",
              "state": "NC",
              "country": "US",
              "street1": "4818 NC-55",
              "location": { "latitude": 35.9241863, "longitude": -78.845495 },
              "zip": "27703"
            }
        }
    }
}
var appRouter = function(app){
    console.log("111111111111");
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
}

module.exports = appRouter;