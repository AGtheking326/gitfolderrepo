<script>
    
    


let todolist=[
   {
    item:'buy milk',
    duedate:'2023-12-3',
   },
   {
    item:'go to collegepur',
    duedate:'2023-12-3',
   }

];
displayitems();

function todo(){
    let inputelement=document.querySelector('.todo-input');
    let dateelement=document.querySelector('.todo-date');
    let todoitem=inputelement.value;
    let todoDate=dateelement.value;
    todolist.push({item:todoitem,duedate:todoDate});
    inputelement.value='';
    dateelement.value='';
    displayitems();
}

function displayitems()

let containerElement=document.querySelector('.todo-container');
let newhtml='';
for(let i=0;i<todolist.length;i++)
{  let item=todolist[i].item;
    let duedate=todolist[i].duedate;
    newhtml+=`
    
    <span>${item}</span>
    <span>${duedate}</span>
    <button class="btn-delete" onclick="todolist.splice(${i},1);
    displayitems();">DELETE</button>
    `;

}


containerElement.innerHTML=newhtml;



</script>