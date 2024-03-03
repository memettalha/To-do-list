count=0;
let inpt = document.getElementById("input1");
let isClick=false ;
function add() {
    if (inpt.value !=""){
        count++;
        let paragraph = document.createElement("p");
        paragraph.innerHTML =count +`) ${inpt.value} <i class="fa-solid fa-trash"></i>`;
        paragraph.classList.add("paragraph-styling");
        demo.appendChild(paragraph);
        //Tamamlandı Butonu
        let finishButton = document.createElement("button");
        finishButton.classList.add("finishButton");
        finishButton.innerText = "BİTTİ";
        paragraph.appendChild(finishButton);
        //Tamamlandı İşlemi
        finishButton.addEventListener('click',function(){
            paragraph.style.textDecoration = "line-through";
            paragraph.style.opacity="0.2";
        })
        //Silme butonu
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButton");
        deleteButton.innerText = "SİL";
        paragraph.appendChild(deleteButton);
        //Silme İşlemi
        deleteButton.addEventListener('click',function(){
          demo.removeChild(paragraph)
          count--;
        })
        paragraph.addEventListener("click", function () {
          if(!isClick){
            paragraph.style.textDecoration = "line-through";
            paragraph.style.opacity="0.2";
          }
          else{
            paragraph.style.textDecoration = "none";
            paragraph.style.opacity="1";
          }
          isClick=!isClick;
        });
        paragraph.addEventListener("dblclick", function () {
          demo.removeChild(paragraph);
          count--;
        });
    }
 
}