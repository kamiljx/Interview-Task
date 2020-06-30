
var inputField = document.getElementById("input_field");
var button = document.getElementById("submit_button");
var list = document.getElementById("list");
var ul_li = document.getElementsByTagName('li')
var i;

button.onclick = function getTask() {
    var input = inputField.value;
    var liElem = document.createElement("li");
    var buttonDelete = document.createElement('button');
    var text = document.createTextNode('Remove')
    buttonDelete.appendChild(text)
    buttonDelete.setAttribute('class', "removeButton")
    liElem.appendChild(document.createTextNode(input));
    if (input === '' ) {
        alert("Please to fill task")
    }  else if(input === ' '){
        alert("You can't to add blank task")
    }
    else{
        list.insertBefore(liElem, list.childNodes[0])
    }
    liElem.appendChild(buttonDelete)
    
    removeTask()
}

function removeTask () {
    let getRemoveButton = document.getElementsByClassName('removeButton');
    for (i = 0; i < getRemoveButton.length; i++){
        getRemoveButton[i].onclick = function(){
            var li = this.parentElement;
            li.style.display = 'none'
        }
    }
}
