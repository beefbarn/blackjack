const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/freaky-guy.jpg") {
    myImage.setAttribute("src", "images/dealer-1.png");
  } else {
    myImage.setAttribute("src", "images/freaky-guy.jpg");
  }
};

let myButton = document.querySelector("#changeuser");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `You're fucked, ${myName}`;
    }
}

//Initialization code block below:
if (!localStorage.getItem("name")) {
    setUserName();
    } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `You're fucked, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
