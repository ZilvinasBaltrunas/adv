'use strict'

let myObject = {
	"name": "LT",
	"size": 10,
	"nodes": [
		{
			"name": "Kaunas",
			"size": 2,
			"nodes": [
				{
				"name": "Centras",
				"size": 1,
				"nodes": [
						{
						"name": "Laisves al.",
						"size": 0.5,
						"nodes": []
						}
					]
				},
				{
				"name": "Žaliakalnis",
				"size": 1,
				"nodes": []
				}
			]
		},
		{
			"name": "Vilnius",
			"size": 4,
			"nodes": []
		}
	]
};

function printAll() {
    console.log(myObject.name + " " + myObject.size);
    console.log(myObject.name + " - " + myObject.nodes[0].name + " " + myObject.nodes[0].size);
    console.log(myObject.name + " - " + myObject.nodes[0].name + " - " + myObject.nodes[0].nodes[0].name + " " + myObject.nodes[0].nodes[0].size);
    console.log(myObject.name + " - " + myObject.nodes[0].name + " - " + myObject.nodes[0].nodes[0].name + " - " + myObject.nodes[0].nodes[0].nodes[0].name + " " + myObject.nodes[0].nodes[0].nodes[0].size);
    console.log(myObject.name + " - " + myObject.nodes[0].name + " - " + myObject.nodes[0].nodes[1].name + " " + myObject.nodes[0].nodes[1].size);
    console.log(myObject.name + " - " + myObject.nodes[1].name + " " + myObject.nodes[1].size);
}
printAll();
