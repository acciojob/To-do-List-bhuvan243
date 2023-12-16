//your code here
const input = document.getElementById('newTodoInput');
const btn = document.getElementById('addTodoBtn');
const listItems = document.getElementById('todoList');

btn.addEventListener('click', () => {
	if (input.value){
		const list = document.createElement('li');
		list.innerText = input.value;
		listItems.appendChild(list);
		input.value = '';
	}
});