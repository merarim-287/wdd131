const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const deleteButton = document.createElement('button');
const li = document.createElement('li');


li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
li.appendChild(deleteButton);
list.append(li);

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});


button.addEventListener('click', function() {   
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
    
        li.appendChild(li);
        input.appendChild(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';
    }
});
