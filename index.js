const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-Container');

function addTask(){

    if(inputBox.value === ""){
        alert('You must write something!')
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }

    inputBox.value = " ";
    saveData ()

}

listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData ()
    }
    else{
        if (e.target.tagName === "SPAN"){
            e.target.parentElement.remove()
            saveData ()
        }
    }
}, false)

//here we save our ToDo project in the localStorage for accessibility 

function saveData (){
    localStorage.setItem('data', listContainer.innerHTML);
}

//here we display our data after the browser is being restored or opened again
function showTasks(){
    listContainer.innerHTML = localStorage.getItem('data');
}

showTasks();