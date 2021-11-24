﻿
exports.WriteFile = function (path, content, flag='a+', json=false) {
	const fs = require('fs');
	
	if (json === true) {
		content = JSON.stringify(content)
	}
	
	try {
		fs.writeFileSync(path, content, { flag: flag })
		//file written successfully
		return true;
	} catch (err) {
	  console.error(err);
	  return false;
	}
}

function ReadFile(path, encoding="utf-8", json=false) {
	const fs = require('fs')

	try {
		const data = fs.readFileSync(path, encoding)
		console.log(data)
		if (json === true) {
			return JSON.parse(data);
		}
		return data;
	} catch (err) {
		console.error(err)
		return false;
	}
}

