const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapter');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    const chapter = input.value;
    const li = document.createElement('li');
    li.textContent = chapter;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
    });

    li.appendChild(li);
    input.value = '';
    input.focus();
});