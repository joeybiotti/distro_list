let codeBtn = document.getElementById('codeBtn');
let companyBtn = document.getElementsByName('companyBtn');
let cRepBtn = document.getElementById('cRepBtn');
let dRepBtn = document.getElementsByName('dRepBtn');
let hRepBtn = document.getElementsByName('hRepBtn');
let csRepBtn = document.getElementsByName('csRepBtn');
let tRepBtn = document.getElementsByName('tRepBtn');


// event listeners-- sort functionality will live here... eventually. 
codeBtn.addEventListener('click', function(){
	console.log('codeBtn clicked')
});

companyBtn.addEventListener('click', function(){
	console.log('companyBtn clicked');
});

cRepBtn.addEventListener('click', function(){
	console.log('clms rep btn clicked');
});

dRepBtn.addEventListener('click', function(){
	console.log('deter rep btn clicked');
});

hRepBtn.addEventListener('click', function(){
	console.log('hear rep btn clicked');
});

csRepBtn.addEventListener('click', function(){
	console.log('cs rep btn clicked');
});

tRepBtn.addEventListener('click', function(){
	console.log('tax rep btn clicked');
});