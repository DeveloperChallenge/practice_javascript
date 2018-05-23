// Here we have throwing error before run the other script and
// And using then then and catch method (chaining function)


//  STEP-3 throw and catch
function http(url, method){
    var promise =  new Promise(function(resolve, reject){
        throw new Error("i am from throw");
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


// #STEP-3  throw and catch
http('http://www.facebook.com', 'GET').then(function(res){
    return res.toUpperCase();
}).then(function(res){
    console.log(res);
    throw new Error("i am from throw.then");
    return res;
}).then(function(res){
    console.log(res);
    // this line throw error. It is because from above we have't return the data
    //this pitfall mistakes
})
    .catch(function(err){
        console.log("Catch",err);
    });

// remember : a promise can return data but not from callback
// See example below step-4 (in this script console will be undefine)
