const input = doscument.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('submit');

const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);
deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});



const click = document.querySelector('addChapter');
button.addEventListener('click', function() {   
    if (input.value.trim() !== '') {}
});
