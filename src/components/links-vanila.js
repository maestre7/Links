'use strict';
import './components/file/archivos.js'

function Theme(newTheme) {
	let newDivTheme = document.createElement("div");
	let newClassTheme = document.createAttribute("class");
	newDivTheme.innerHTML = newTheme;
	newClassTheme.value = newTheme;
	newDivTheme.setAttributeNode(newClassTheme);
	
	return newDivTheme;
}

function ElementLink(data) {
	// let newList = document.createElement("ol");
	let newListElement = document.createElement("li");
	let newListElementA = document.createElement("a");
	let newHref = document.createAttribute("href");
	let newTarget = document.createAttribute("target");
	newListElementA.innerHTML = data.name;
	newHref.value = data.href;
	newTarget.value = '_blank';
	newListElement.appendChild(newListElementA);
	
	return newListElement;
}

class Links {
	constructor(file){
		const data = ReadFile(file);
		if (file !== false) {
			this.data = JSON.parse(data);
		}
		console.log(this.data);
	}
}