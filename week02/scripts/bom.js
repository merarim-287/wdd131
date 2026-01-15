const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function () {
    
    const li = document.createElement('li');

    li.textContent = input.value;

    const deleteButton = document.createElement('button');
    
    deleteButton.textContent = "❌";

    li.append(deleteButton);

    list.append(li);

    input.value = "";
    input.focus();
});




