var couchbase = require('./node_modules/ottoman/node_modules/couchbase');
var ottoman = require('ottoman');

var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
cluster.authenticate('admin', 'asdfaf');
ottoman.bucket = cluster.openBucket('rest');

var ItemMdl = ottoman.model('Item', { 
    name: {type:'string', readonly: true },
    description: 'string',
    options: ['string']
},{
    id: 'name',
    index: {
        findByName:{
            by: 'name',
            bype: 'n1ql'
        }
    }
})

ItemMdl.createAndSave = function (item, done) {
    this.create(item, done);
}
/*
function ItemModel(){};
ItemModel.getAll = async function(callback){
    var statement = "SELECT * FROM " + bucket._name + " WHERE type='item'";
    cluster.query(statement, function(error, result){
        if(error){
            console.log(error);
            return callback(error, null);
        }
        return callback(null,result.rows);
    })
    
    /*var statement = "SELECT" + 
        "META(item).id, item.name, item.description," +
        "(SELECT option FROM `" + bucket._name + "` USE KEYS item.options) AS options" +
        "FROM `" + bucket._name + "` AS item " +
        "WHERE item.type = 'item'";
    //var result = await cluster.query(statement);
    //var query = N1qlQuery.fromString(statement);
    coll.query(statement, function(error, result){
        if(error){
            console.log(error);
            return callback(error, null);
        }
        return callback(null,result);
    })
}

ItemModel.save = function(data, callback){
    console.log(data);
    var itemDoc = {
        
        name: data.name,
        description: data.description,
        type: "item",
        options: ["tomato","onion"]
    }
    var id = data.id? data.id: uuid.v4();
    var itemDocKey = 'item::' + id;
    console.log(itemDoc);
    coll.insert(itemDocKey, itemDoc, function(err, doc){
        if (err) {
            if (err === couchbase.errors.KEY_EEXISTS) {
                var error = {"code":409, "msg":"item already exists."};
                return callback(error, null);
            }
            var error = {"code":460, "msg":err};
            return callback(error, null);
        }
        return callback(null,doc);
    })
}

module.exports.CategoryModel = CategoryModel;
module.exports.ItemModel = ItemModel;
*/
module.exports.Item = ItemMdl;