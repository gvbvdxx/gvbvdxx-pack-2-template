var log = require("log");
var elements = require("elements");
var fileLoader = require("file-loader");

var elementJSON = [{
        element: "style",
        innerHTML: fileLoader.read("src/stylesheet.css") //file loader can read other files in this gvbvdxx-pack program.
    }, {
        element: "div",
        children: [{
                element: "h1",
				//innerHTML can be used, but this is better.
                textContent: "Hello, Gvbvdxx Pack 2!"
            }, {
                element: "p",
                textContent: "This is a program, simular to react and webpack, all of this is coded inside your index.js file."
            },
			{
				element:"p",
				textContent:"Click the button below to see what happens!"
			},
			{
				gid:"myButton", //gid is only readable using elements.getGPId, that only makes it visible via the current gvbvdxx pack program.
				element:"button",
				textContent:"Click me!"
			}
        ]
    }
];

elements.appendElements(elements.body, elements.createElementsFromJSON(elementJSON));

var myButton = elements.getGPId("myButton");

myButton.onclick = function () {
	window.alert("Coded with gvbvdxx pack.");
};

log.log("This is your very first, gvbvdxx pack program, feel free to modify it and do stuff!");