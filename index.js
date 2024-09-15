function add(){
    var inputEle = document.getElementById('inp').value;

    var ele = document.createElement('li' );

     ele.innerText = inputEle;
    
    document.getElementById('display').appendChild(ele);

    document.getElementById('inp').value="";

    deleteEle(ele);

} 

function deleteEle(ele){
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.setAttribute("class", "btn btn-danger")
    ele.appendChild(deleteBtn);
    deleteBtn.onclick = function(){
        ele.remove();
    }

}