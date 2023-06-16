const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/Size 256x256 Testimage.png") {
        myImage.setAttribute("src", "images/256x256 image of me.jpg");
    } else {
        myImage.setAttribute("src", "images/Size 256x256 Testimage.png")
    }
};