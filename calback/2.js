// Here is the proper way to handle the callback response using passing callback and executing those callback in our callback function
// Here we are executing the callback inside the filterImage function

// Now, it will print first "Please wait! image is uploading" and "success" after response from call back
// In this way, we can handle the callback response and show the message to user as per internal code executing.

// step-5 - here we have added the callback function so we ca get the data from callback

// Remember: Do not use more callback into callback. It will very hard to debug in future.

var uploadStatus;

function filterImage(imageData, callback) {
    var test = "test";
    setTimeout(function () {
        if (test === "test") {
            callback("success");
        } else {
            callback("fail");
        }
    }, 5000);
}


// OR

// function filterImage(imageData, resolve, reject) {
//     var test = "test";
//     setTimeout(function () {
//         if (test === "test") {
//             resolve("success");
//         } else {
//             reject("fail");
//         }
//     }, 5000);
// }

function uploadImage(imageData, callback) {
    uploadStatus = "Please wait! image is uploading ... ";
    console.log(uploadStatus);
    callback(imageData, function (res) {
        console.log(res);
    }, function (err) {
        console.log(err);
    });

}

// executing function
uploadImage("image", filterImage);


// In future, we will handle the response of callback by async and await