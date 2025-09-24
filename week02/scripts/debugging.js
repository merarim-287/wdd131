const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    const chapter = input.value.trim(); // Corrected from ariaValueMax

    if (chapter !== '') {
        const li = document.createElement('li'); // Fixed typo: documentElement → createElement
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        li.textContent = chapter;
        li.appendChild(deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });

        input.value = '';
        input.focus();
    }
});
