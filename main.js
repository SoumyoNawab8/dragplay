function dragging(e){
    e.dataTransfer.setData("text", e.target.id);
}
function letDrop(e) {
if(e){
    e.preventDefault();

}
}
function drop(e) {
   if(!e){
    var data = e.dataTransfer.getData("text");
    var node = document.getElementById(e.target.id);
    node.insertAdjacentHTML('afterend', document.getElementById(data));
    
    // return
   }
   else{
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
   }
}
