// Array Visuallizer


let containerEl = document.getElementById("container")

//Global Variable
let myData = [];
for (let n = 1; n <= 600; n += 10){
    myData.push(n);
}
console.log(myData);



//Display Date
drawArray();


function drawArray() {
    let outputStr = ""
    for (let i = 0; i < myData.length; i++){
        outputStr += `<div style="height:${myData[i]}px"></div>`;
    }
    containerEl.innerHTML = outputStr
}



//Key Event Stuff
document.addEventListener("keyDown", keydownHandler);

function keydownHandler(event) {
    console.log(event.keyCode);
}

