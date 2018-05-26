document.getElementById('output').innerHTML = new Date();

document.write('The output will be supplied via JSON. Everything will be JavaScipt in this bitch.');

const bands = [
	{
		name:"Bongripper",
		description:"Satanic Doom Metal",
	},
	{
		name:"Weedeater",
		description:"North Carolina Stoner Metal",
	},
	{
		name:"Bongzilla",
		description:"666lb. Bong Session"
	},
	{
		name:"Sleep",
		description:"The OGs."
	},
];

const output = document.getElementById('output');

for(band in bands){
	let cards = `<section>
					<div>
						<h1>${bands[band].name}<h1>
						<p>${bands[band].description}</p>
						<hr>
					</div>
				</section>`

output.innerHTML += cards;

};