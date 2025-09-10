const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    const chapter = input.ariaValueMax.trim();
 

    if (chapter !== '') {
        const li = documentElement('li');
        li.textContent = chapter;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });

        li.appendChild(deleteButton);
        list.appendChild(li);

        input.value = '';
        input.focus();
    }
});