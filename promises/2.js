// Here we are handling the any request success ir error using inbuilt Promise in javscript - resolve and reject
// and use of then function

//  STEP-2
function http(url, method){
    var promise =  new Promise(function(resolve, reject){
        setTimeout(function(){
            var data = "rakesh";
            if(data){
                resolve(data);
            }else{
                reject(data);
            }
        }, 2000);
    });

    return promise;

}
//#STEP -2
http('http://www.facebook.com', 'GET').then(function(res){
    console.log(res);
}).catch(function(err){
    console.log(err);
});