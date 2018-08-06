window.addEventListener("load",init);
var seq;
function init(){
    seq= autoGenerator();
    bindEvents();
    updateCount();
    printSequence();
    // fetching from localStorage ,and print on screen
}
const printSequence=()=>document.querySelector("#itemid").innerText = seq.next().value;
function printTable(itemArray){
    document.querySelector("#itemlist").innerHTML = "";
    itemArray.forEach(printRecord);
    updateCount();
}
function bindEvents(){
    document.querySelector("#add").addEventListener("click",addItem);
    document.querySelector("#delete").addEventListener("click",deleteItems);
    document.querySelector("#sort").addEventListener("click",sort);
}
function sort(){
    printTable(itemOperations.sort("price"));
}
function deleteItems(){
    printTable(itemOperations.deleteMark());
}

function updateCount(){
    document.querySelector("#total").innerHTML = itemOperations.itemArray.length;
    document.querySelector("#mark").innerHTML =itemOperations.countMark();
    document.querySelector("#unmark").innerHTML =itemOperations.itemArray.length - itemOperations.countMark();
}
function* autoGenerator(){
    var counter = 1;
    while(true){
    yield counter;
    counter++;
    }
    }

function createIcon(path,fn, id){
    //"<img src='"+
    var img = document.createElement("img");
    img.src = path;
    img.className  = "size";
    img.addEventListener("click",fn);
    img.setAttribute("data-itemid",id);
    return img;
}

function edit(){
    console.log("Edit...");
}
function mark(){
    var id = this.getAttribute("data-itemid");
console.log("Mark ",id);
var tr = this.parentNode.parentNode;
tr.classList.toggle("mark");
itemOperations.mark(id);
updateCount();
}

function printRecord(currentObject){
    if(currentObject){
        var tbody = document.querySelector("#itemlist");
        var tr = tbody.insertRow();
        let index = 0;
       // tr.insertCell(0).innerText = currentObject.id;
       for(let key in currentObject){
           if(key=='markForDelete'){
               continue;
           }
        tr.insertCell(index).innerText = currentObject[key];
        index++;
       }
       var td = tr.insertCell(index);
       td.appendChild(createIcon(paths.deleteIcon,mark,currentObject.id));
       td.appendChild(createIcon(paths.editIcon,edit,currentObject.id));
    }
}
function addItem(){
    var id = document.querySelector("#itemid").innerText;
    var name = document.querySelector("#name").value;
    var price = document.querySelector("#price").value;
    var desc = document.querySelector("#desc").value;
    var color = document.querySelector("#color").value;
    var url = document.querySelector("#url").value;
    var date =document.querySelector("#date").value;
    itemOperations.addItem(id, name, desc, price, color, date, url);
    updateCount();
    printSequence();
    printRecord(itemOperations.getLast());

}