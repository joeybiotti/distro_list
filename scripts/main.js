let codeBtn = document.getElementById('codeBtn');
let companyBtn = document.getElementById('companyBtn');
let cRepBtn = document.getElementById('cRepBtn');
let dRepBtn = document.getElementById('dRepBtn');
let hRepBtn = document.getElementById('hRepBtn');
let csRepBtn = document.getElementById('csRepBtn');
let tRepBtn = document.getElementById('tRepBtn');


// event listeners-- sort functionality will live here... eventually.
codeBtn.addEventListener('click', function(){
	console.log('code btn clicked')
});

companyBtn.addEventListener('click', function(){
	console.log('company btn clicked.')
});

cRepBtn.addEventListener('click', function(){
	console.log('c rep btn clicked.')
});

dRepBtn.addEventListener('click', function(){
	console.log('d rep btn clicked.')
});

hRepBtn.addEventListener('click', function(){
	console.log('h rep btn clicked.')
});

csRepBtn.addEventListener('click', function(){
	console.log('cs rep btn clicked.')
});

tRepBtn.addEventListener('click', function(){
	console.log('t rep btn clicked.')
});

//fetch to get json -- dummy data for now
fetch('https://jsonplaceholder.typicode.com/posts')
	.then(response => response.json())
	.then(json => console.log(json))