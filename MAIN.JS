let output = 0
function goal(){
    let goal = document.getElementById("goal").value;
}
function add(){
    output = output + 1;
    localStorage.setItem("output",output);
    console.log(output);
    document.getElementById("output").value = localStorage.getItem("output");
    if(localStorage.getItem("output").value = 'goal' ){
document.getElementById("win").innerHTML = "yay You Did It!!!!!!!"
    }
}
