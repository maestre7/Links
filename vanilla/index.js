'use strict';
//import './components/file/archivos.js'
//export const data = './data';
import { data } from './data.js'

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
	constructor(data){
		//const data = ReadFile(file);
		//if (file !== false) {
		//	this.data = JSON.parse(data);
		//}
		this.data = data;
		console.log(this.data);
	}

	loadingData() {
        let elementMain = document.querySelector("main");
		for (let [key, value] of Object.entries(this.data)) {
			newDivTheme = Theme(key);
			divTheme = value.array.forEach(element => {
				newListElement = ElementLink(element);
				newDivTheme.appendChild(newListElement);

				return newDivTheme;
			});
			elementMain.appendChild(divTheme)
		};
	}
}




Links(data);