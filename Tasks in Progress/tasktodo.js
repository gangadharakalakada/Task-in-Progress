function addTask(){
    var task=document.getElementById("add").value
    var taskList=document.getElementById("tasklist")
    if(task==""){
        alert("Enter a Task")
        return
    }
    var ListItem=document.createElement('li');
    ListItem.innerHTML=task
    taskList.appendChild(ListItem)

    var ButtonContainer = document.createElement('div')
    ListItem.appendChild(ButtonContainer)
    ButtonContainer.className="Task-Button"

    var DeleteButton= document.createElement('button')
    ButtonContainer.appendChild(DeleteButton)
    DeleteButton.innerText="Delete"
    DeleteButton.onclick=function(){
        taskList.remove(ListItem)
    }

    var CompleteButton = document.createElement('button')
    ButtonContainer.appendChild(CompleteButton)
    CompleteButton.innerText="Complete"
    CompleteButton.onclick=function(){
        ListItem.classList.toggle('Complete')
    }
    task.value=""
}