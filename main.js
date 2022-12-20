let len=parseInt(prompt("enter the array length"));
let arrayval=[];
for(i=0;i<len;i++){
    arrayval[i]=prompt("enter the value");
}
document.write(arrayval.join(" "));
function myFunc(){
    let ci=parseInt(prompt("change value index"));
    arrayval[ci]=prompt("enter the update value");
    document.write(arrayval.join(" "));
}
function del(){
    let d=parseInt(prompt("delete value index"));
    arrayval[d]=null;
    document.write(arrayval.join(" "));
}
