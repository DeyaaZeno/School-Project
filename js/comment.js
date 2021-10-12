// New Comment
var inputTask = document.querySelector('.input-task');
var inputAddTask = document.querySelector('.input-add');
var taskList = document.querySelector('.task-list');

inputAddTask.onclick = function(){
    if(inputTask.value == ''){
        console.log("no comment entered");
    }
    else{
        var taskBox = document.createElement('div');
        taskBox.className='task-box';
        taskList.appendChild(taskBox);
        var taskNameSpan = document.createElement('span');
        var taskValue = document.createTextNode(inputTask.value);
        taskNameSpan.appendChild(taskValue);
        taskNameSpan.className='task-name';
        taskBox.appendChild(taskNameSpan);

        var btn1 = document.createElement('Button');
        var btn1Txt = document.createTextNode('delete');
        btn1.appendChild(btn1Txt);
        taskBox.appendChild(btn1);
        btn1.className='btn1';
    }
};
document.addEventListener("click", function(d){
    if(d.target.className=='btn1'){
        d.target.parentNode.remove();
        inputTask.value='';
    }
});