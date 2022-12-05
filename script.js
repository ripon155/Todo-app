let newTask = document.getElementById("new-task");
let incompleteTasks = document.getElementById("incomplete-tasks");

function createEle(text) {
  let newLi = document.createElement("li");
  let chekBox = document.createElement("input"); //checkbox
  let label = document.createElement("label");
  let inputText = document.createElement("input");
  let editButton = document.createElement("button");
  let deleteButton = document.createElement("button");

  chekBox.type = "checkbox";
  label.textContent = text;
  inputText.type = "text";
  editButton.className = "edit";
  editButton.innerHTML = "Edit";
  deleteButton.className = "delete";
  deleteButton.innerHTML = "Delete";

  newTask.value = "";

  newLi.appendChild(chekBox);
  newLi.appendChild(label);
  newLi.appendChild(inputText);
  newLi.appendChild(editButton);
  newLi.appendChild(deleteButton);
  return newLi;

  ///
}

function addtask() {
  //create new li
  let listItem = createEle(newTask.value);
  //append new li
  incompleteTasks.appendChild(listItem);
  //bind edit delete event to the newly created element
  bindTaskEvent(listItem);
}

//editMode
function funEdit() {
  let listitem = this.parentNode;

  let inputtext = listitem.querySelector("input[type=text]");
  console.log(inputtext);
  let label = listitem.querySelector("label");
  let containEditmode = listitem.classList.contains("editMode");

  if (containEditmode) {
    // listitem.classList.remove("editMode");
    label.textContent = inputtext.value;
  } else {
    // listitem.classList.add("editMode");
    console.log(inputtext);
    console.log(label.textContent);
    inputtext.value = label.textContent;
  }
  listitem.classList.toggle("editMode");
}
function funDelete() {
  this.parentNode.parentNode.removeChild(this.parentNode);
}
function bindTaskEvent(listItems) {
  let inputCheckBox = listItems.querySelector("input[type=checkbox]");
  let editButton = listItems.querySelector("button.edit");
  let deleteButton = listItems.querySelector("button.delete");

  //add event
  editButton.onclick = funEdit;
  deleteButton.onclick = funDelete;
}

for (i = 0; i < incompleteTasks.children.length; i++) {
  bindTaskEvent(incompleteTasks.children[i]);
}
