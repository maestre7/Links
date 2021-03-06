'use strict';
// import './file/archivos.js'
//const archivos = require('./file/archivos.js')


const data = {
	html : [{ name: 'W3schools / HTML',
		href: 'https://www.w3schools.com/html/default.asp'}, 
		{ name:'MDN / HTML',
		href: 'https://developer.mozilla.org/es/docs/Web/HTML'},
		{ name:'HTML CHEATSHEET',
		href: 'https://devhints.io/html'},
		{ name: 'htmlcolorcodes / HTML',
		href: 'https://htmlcolorcodes.com/es/'},
		{ name: 'DOM Events / HTML',
		href: 'https://www.w3schools.com/jsref/dom_obj_event.asp'
	}],
	css : [{ name: 'W3schools / CSS',
		href: 'https://www.w3schools.com/css/default.asp'},
		{ name: 'MDN / CSS',
		href: 'https://developer.mozilla.org/es/docs/Web/CSS'},
		{ name: 'CSS CHEATSHEET / CSS',
		href: 'https://devhints.io/css'},
		{ name: 'CSS Border-style / CSS',
		href: 'https://developer.mozilla.org/es/docs/Web/CSS/border-style'},
		{ name: 'CSS Border-radius / CSS',
		href: 'https://www.w3schools.com/cssref/css3_pr_border-radius.asp'},
		{ name: 'CSS display / CSS',
		href: 'https://developer.mozilla.org/es/docs/Web/CSS/display'},
		{ name: 'CSS Propiedades / CSS',
		href: 'https://www.mclibre.org/consultar/amaya/css/css-propiedades.html'},
		{ name: 'CSS Transitions / CSS',
		href: 'https://www.w3schools.com/css/css3_transitions.asp'},
		{ name: 'CSS Transformaciones / CSS',
		href: 'https://www.antofernandez.com/transformaciones-css-guia-basica/'},
		{ name: 'CSS Animations / CSS',
		href: 'https://www.w3schools.com/css/css3_animations.asp'
	}],
	javascript: [{ name:'W3schools / JS',
		href: 'https://www.w3schools.com/js/default.asp'},
		{ name: 'MDN / JS',
		href: 'https://developer.mozilla.org/es/docs/Web/JavaScript'},
		{ name:'JavaScript CHEATSHEET / JS',
		href: 'https://devhints.io/es6'		
	}],
	reactjs: [{ name: 'React CHEATSHEET / JS',
		href:'https://devhints.io/react'},
		{ name: 'Cargar una imagen en React',
		href: 'https://www.youtube.com/watch?v=ZwSwp8iRk2E'},
		{ name: 'React Tutorial: An Overview and Walkthrough',
		href: 'https://www.taniarascia.com/getting-started-with-react/'},
		{ name: '¿Por qué escribimos super(props)?',
		href: 'https://overreacted.io/es/why-do-we-write-super-props/'},
		{ name: 'React Developer Tools - Chrome',
		href: 'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es'},
		{ name: 'React Developer Tools - FireFox',
		href: 'https://addons.mozilla.org/es/firefox/addon/react-devtools/'		
	}],
	ejercicios: [{ name:'Codewars',
		href:'https://www.codewars.com/'},
		{ name:'katacoda',
		href:'https://www.katacoda.com/courses/git'},
		{ name: 'learngitbranching',
		href: 'https://learngitbranching.js.org/?locale=es_ES'},
		{ name: 'codecombat',
		href: 'https://codecombat.com/'},
		{name: 'learngitbranching',
		href: 'https://learngitbranching.js.org/?locale=es_ES'
	}],
	otros: [{name: 'HolaMundo / Youtube - Recursividad, programación funcional en javascript',
		hreft:'https://www.youtube.com/watch?v=AZd_CzcRhXs' },
		{name: 'Freecodecamp',
		href: 'https://www.freecodecamp.org/espanol/news/'
	}]
}

//const file = './data.json';
//let json=true;
//console.log(archivos.WriteFile(file, data, json));

export default data;