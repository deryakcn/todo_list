var todo={

Elements:{
    task:document.getElementById("task"),
    userList:document.getElementById("userList")
},

Actions:{

addList:()=> {
    debugger
    var el=todo.Elements;
if (el.task.value.length<=0) {
    alert("Boş ekeleme yapamassınız");
}

var li =document.createElement("li");
li.innerHTML=el.task.value;
el.userList.appendChild(li);
}


}





}