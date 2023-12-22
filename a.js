var imgLib = [
    "https://i.imgur.com/9uXv6li.jpg",
    "https://i.imgur.com/N0oMyrU.png",
    "https://i.imgur.com/qLE7JAn.jpg",
    "https://i.imgur.com/7jTzFHI.jpg",
    "https://i.imgur.com/XaY97wP.jpg",
    "https://i.imgur.com/xr2utlZ.jpg",
    "https://i.imgur.com/FEIzEZg.png",
    "https://i.imgur.com/30rlY9H.jpg",
    "https://i.imgur.com/bzEZobw.png",
    "https://i.imgur.com/lrtPZiM.png",
    "https://i.imgur.com/9hhIATP.jpg",
    "https://i.imgur.com/7FRrfqd.png",
    "https://i.imgur.com/AAXeJYQ.png",
    "https://i.imgur.com/yDLQXzL.png",
    "https://i.imgur.com/zu4qJkV.jpg",
    "https://i.imgur.com/MOQZVzd.jpg",
    "https://i.imgur.com/BiaW8e4.jpg",
    "https://i.imgur.com/Zl77xwA.png",
    "https://i.imgur.com/W7Uv2aX.png",
    "https://i.imgur.com/paaa4pf.jpg",
    "https://i.imgur.com/FokfpbG.jpg",
    "https://i.imgur.com/LTKvT5w.png",
    "https://i.imgur.com/Mqm8bXr.png",
    "https://i.imgur.com/0UTPjUP.jpg",
    "https://i.imgur.com/cN4iWnd.jpg",
    "https://i.imgur.com/LjhGLeH.jpg",
    "https://i.imgur.com/EVxrSUk.jpg",
    "https://i.imgur.com/yB74BmO.jpg",
    "https://i.imgur.com/NxNpD6s.jpg",
    "https://i.imgur.com/xKbUVEp.jpg",
    "https://i.imgur.com/E5bJW46.jpg",
    "https://i.imgur.com/2q2znyG.jpg",
    "https://i.imgur.com/xdTyOe3.png",
    "https://i.imgur.com/RL47Y4i.jpg",
    "https://i.imgur.com/DIjjS0L.jpg",
    "https://i.imgur.com/lAdstAQ.jpg",
    "https://i.imgur.com/HTljWKs.jpg",
    "https://i.imgur.com/uHHtzuz.jpg",
    "https://i.imgur.com/QmsaANf.jpg",
    "https://i.imgur.com/ISOhnRT.jpg",
    "https://i.imgur.com/a29WFQz.jpg",
    "https://i.imgur.com/J3l800U.jpg",
    "https://i.imgur.com/ixCmrS9.jpg",
    "https://i.imgur.com/fkcITz0.jpg",
    "https://i.imgur.com/Kz5yQhK.jpg"
];


numImages = 0;


// main drives all the replacement logic
function main() {
    // get an array of all the image elements
    // var allImages = document.getElementsByTagName("img");
    var allImages = document.images;
    // loop though that array of image elements, skipping images that have already been considered
    for(var i = numImages; i < allImages.length; i++) {
        replaceImage(allImages[i]);
    }
    numImages = allImages.length;
}

main();
setInterval(main, 3000);

function replaceImage(image){
        newSrc = getRandomImage();
        // this line uses CSS to keep the old size of the image (this is important if the original image doesn't have existing height and width attributes)
        // it scales and crops the replacement image to fit, and also sets the image content to be the replacement image
        image.setAttribute("style", `height:${image.height}px; width:${image.width}px; object-fit:cover; content:url(${newSrc});`);
        // also set the image src attribute for good measure (though it doesn't appear to be strictly necessary)
        image.src = newSrc;
}


function getRandomImage(){
    // pick a random image url from the list
    randIndex = Math.floor(Math.random() * imgLib.length);
    return imgLib[randIndex];
}
