let chats = document.getElementById('chats');

chats.addEventListener('click', async () => {
	let response = await fetch("/chats", {method: 'GET', mode: 'cors'});
	let result = await response.json();

	console.log(result);

	Object.keys(result).forEach(r => {
		chats.innerHTML += r;
	});
});

