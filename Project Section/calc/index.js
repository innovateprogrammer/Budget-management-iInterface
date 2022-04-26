let outputscreen = document.getElementById("output-screen");
function display(num){
    outputscreen.value += num;
}

function CopyResult(){
    var copyText = document.getElementById("output-screen");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}

function Delete(){
    outputscreen.value = outputscreen.value.slice(0,-1);
}
function Calculate(){
    try{
        outputscreen.value = eval(outputscreen.value);
    }
    catch(err){
        alert("Invalid Input");
    }
}
function Clear(){
    outputscreen.value = "";
}

function percent(){
    if(outputscreen.value.includes("%")) {         
        
    }
}

function root(){
    outputscreen.value = Math.sqrt(outputscreen.value);
    
}

function Square(){
    var num1= outputscreen.value;
    outputscreen.value= Math.pow(num1,2);
}

function Log(){
    outputscreen.value= Math.log(outputscreen.value);
}