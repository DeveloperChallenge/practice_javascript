
// Here we can see after run the file, first it prints "Please wait! image is uploading
// But after success orr error callback, it will print undefined. It is because data can not return from callback
// so, the 'setTimeout is the another callback' inside our callback.
// If we return the data directly then it works. because it is not async
// here the setTimeout is the callback and it is async because of its time 5s
// so, if we want to handle those response, we should take it in different way

//SEE 2.js


// remember : a promise can return data but not from callback
// See example below step-4 (in this script console will be undefine)

//  STEP-4 - in this example console first print the uploadStatus as uploading
//  but after executing the callback function it will print the 'undefined'
//  this is because callback function never returns the data. where settimeout is a callback function
//  but if you retun data from normal function it will return data
//  see STEP-5
//
var uploadStatus ="";
function filterImage(imageData){
    var test = "test";
    setTimeout(function(){
        if(test==="test"){
            return "success";
        }else{
            return "fail"
        }
    },5000);
}


function uploadImage(imageData, callback){
    uploadStatus = "Please wait! image is uploading ... ";
    console.log(uploadStatus);
    uploadStatus= callback(imageData);
    // console.log(uploadStatus);

}
var uploadedDdata = uploadImage("image", filterImage);