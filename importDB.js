
function transferObjects(name, data, fs){
    var count = 0;
    var destStr = '';
    for(const id of Object.keys(data[name]))
    {
        destStr += '{"type":"'+ name + '","id":"'+id.toString()+'"';
        for(const key of Object.keys(data[name][id]))
        {
            destStr += ',"'+key.toString()+'":'+JSON.stringify(data[name][id][key]);
        }
        destStr += "}\n";
        count++;
    }
    console.log(name + ": " + count.toString());   
    return destStr;
}
var fs = require('fs');
fs.readFile('data.json', function(err, dataStr){
    var destStr = '';
    if(err)
        console.log("log:"+err);
    data = JSON.parse(dataStr);
    destStr += transferObjects("merchants",data,fs);
    destStr += transferObjects("users",data,fs);
    fs.writeFile("dest.json", destStr, function(err){
        if(err)
            console.log("log:"+err);
        console.log("Finished successfully!");   
    }); 
});

