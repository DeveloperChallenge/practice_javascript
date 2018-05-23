// Here we are handling the error or success using call back method

//  STEP-1
function http(url, method, successCallback, errorHandler){

    setTimeout(function(){
        var data = "rakesh";
        if(data){
            successCallback(data);
        }else{
            errorHandler(data);
        }
    }, 2000);
}
// #STEP-1
http('http://www.facebook.com', 'GET', function(res){
    console.log(res);
}, function(error){
    console.log("error");
});