window.addEventListener("load",()=>{
document.querySelector("#basicsalary").addEventListener("change",computeIt);
    document.querySelector("#compute").addEventListener("click",computeIt)
}
)

function computeIt(){
    var basicSalary = document.querySelector("#basicsalary").value;
    salaryOperations.takeSalary(basicSalary);
    printResults();
    //console.log("Compute It called..");
}
function printResults(){
    /*document.querySelector("#hra").innerText = salaryOperations.hra();
    document.querySelector("#da").innerText = salaryOperations.da();
    document.querySelector("#ta").innerText = salaryOperations.ta();*/
    for(let key in salaryOperations){
        if(typeof salaryOperations[key]==="function"){
        if(key=='takeSalary'){
        continue;
        }
        document.querySelector("#"+key).innerText = salaryOperations[key]();
       // console.log("Key is ",key," Key Type ",typeof key, "  VALUE  ",salaryOperations[key]());
        }
        }
}