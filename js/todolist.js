let alertDOM = document.querySelector('#alert')
const alertFunction = (title, message, className="warning") =>`<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

function remove(event){
  debugger
  var secili_nesne_sil = document.querySelector("#element");
  event.remove(secili_nesne_sil)
}


let list = document.querySelector("ul") 
list.addEventListener("click",function(event){
    if ( event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        // console.log(event.target.tagName)
    }
},false );


function todolist(){
      let YAPILACAKLAR = document.getElementById("task")
      let userListDom= document.getElementById("userList")
    
      if(YAPILACAKLAR.value)
     { 
        var li=document.createElement("li");
      li.innerHTML=document.getElementById("element").innerHTML;
      li.querySelector("p").innerText = YAPILACAKLAR.value;
     // li.querySelector("span").setAttribute("onclick" ,"remove()");
      userListDom.appendChild(li);
      console.log(li)
         YAPILACAKLAR.value = ""
        alertDOM.innerHTML= alertFunction( 
            "","Listeye eklendi","success")
       
     }
     else
     {
        alertDOM.innerHTML= alertFunction( 
            "","Listeye boş ekleme yapamazsınız!","danger")
     }
}
