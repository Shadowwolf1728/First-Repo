const myHeader = document.querySelector("h1");
myHeader.textContent = "Hello!"

myHeader.onclick = () => {
    if(myHeader === "Hello!") {
        myHeader.textContent = "How are you?"
    } else {
        myHeader.textContent = "Hello!"
    }
}