let input = document.getElementById("input");
const list = document.getElementById("task");

function addtask(){
    const task = input.value.trim();
    if (task === ""){
        alert("Enter your input..")
        return;
    }
    const add = document.createElement("li");
    add.textContent = task;
    list.appendChild(add);

    input.value = "";

}
// deleted butten 
function deletetask(){

    if(list.lastChild){
        list.removeChild(list.lastChild);
    }
}