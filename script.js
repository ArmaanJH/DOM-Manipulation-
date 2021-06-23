var button = document.getElementById("enter");
var delButton = document.getElementsByClassName("delButton");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

console.log(delButton);

function createListElement(){
    var li = document.createElement("li");
    var div = document.createElement("div");
    var delButton = document.createElement("button");
    div.classList.add("wrap");
    ul.appendChild(div)
    div.append(li, delButton);
    li.appendChild(document.createTextNode(input.value));
    li.classList.add("space");
    delButton.classList.add("delButton")
    input.value = "";
    delButton.innerHTML = "Delete"
}

function inputLength() {
    return input.value.length
}

function addListAfterClick(){
    if (inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(event){
    if (inputLength() > 0 && event.keyCode === 13){
        createListElement();
    }
}

function crossOut(element) {
    if(element.target.tagName === "LI"){
        element.target.classList.toggle("done");
        console.log("click");
    }
}

function removeItem(element){
    if(element.target.className === "delButton"){
        element.target.parentElement.remove()
    }
}

function handleCrossAndRemove(element){
    crossOut(element);
    removeItem(element);
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", handleCrossAndRemove);


