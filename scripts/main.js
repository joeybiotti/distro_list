let btn = document.getElementById('btn');
const output = document.getElementById('output');

document.write('The output will be supplied via JSON. Everything will be JavaScipt in this bitch.');

function seeStonerMetal() {

	moreText = `<div>
					<h2>This click shit works.</h2>
				</div>`

	output.innerHTML += moreText
};


const bands = [{
        name: "Bongripper",
        description: "Satanic Doom Metal",
    },
    {
        name: "Weedeater",
        description: "North Carolina Stoner Metal",
    },
    {
        name: "Bongzilla",
        description: "666lb. Bong Session"
    },
    {
        name: "Sleep",
        description: "The OGs."
    },
];

btn.addEventListener("click", seeStonerMetal);

