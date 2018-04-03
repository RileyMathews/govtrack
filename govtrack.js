//variables to create and add a misson statement for representative
const articleRef = document.querySelector("#rep");
var node = document.createElement("P");
var textnode = document.createTextNode("To represent middle Tennessee to the national government.");

node.appendChild(textnode);
articleRef.appendChild(node);

//add congressional district attribute
const attribute = document.createAttribute("congressional-district");
attribute.value = "5";
articleRef.setAttributeNode(attribute);
