let codeBtn = document.getElementById('codeBtn');
let companyBtn = document.getElementById('companyBtn');
let cRepBtn = document.getElementById('cRepBtn');
let dRepBtn = document.getElementById('dRepBtn');
let hRepBtn = document.getElementById('hRepBtn');
let csRepBtn = document.getElementById('csRepBtn');
let tRepBtn = document.getElementById('tRepBtn');


// event listeners-- sort functionality will live here... eventually.
codeBtn.addEventListener('click', () => {
	console.log('code btn clicked')
});

companyBtn.addEventListener('click', () => {
	console.log('company btn clicked.')
});

cRepBtn.addEventListener('click', () => {
	console.log('c rep btn clicked.')
});

dRepBtn.addEventListener('click', () => {
	console.log('d rep btn clicked.')
});

hRepBtn.addEventListener('click', () => {
	console.log('h rep btn clicked.')
});

csRepBtn.addEventListener('click', () => {
	console.log('cs rep btn clicked.')
});

tRepBtn.addEventListener('click', () => {
	console.log('t rep btn clicked.')
});

//fetch to get json -- dummy data for now
fetch('https://jsonplaceholder.typicode.com/users')
	.then(function (res) {
		return res.json();
	})
	.then(function (json) {
		console.log(json)
		let text = [];

		text += `<th>Area 1</th><th>Area 2</th><th>Area 3</th>`

		for (i = 0; i < json.length; i++) {
			let obj = json[i]

			text += `	<tr>
							<td class="left">${obj.name}</td>
							<td class="right">${obj.company.name}</td>
							<td>${obj.website}</td>
						</tr>`;

		}

		document.getElementById('output').innerHTML += `<table>` + text + `</table>`;

	});