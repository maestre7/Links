
function WriteFile(path, content, flag='a+') {
	const fs = require('fs');
	
	try {
		fs.writeFileSync(path, content, { flag: flag })
		//file written successfully
		return true;
	} catch (err) {
	  console.error(err);
	  return false;
	}
}

function ReadFile(path, encoding="utf-8") {
	const fs = require('fs')

	try {
		const data = fs.readFileSync(path, encoding)
		console.log(data)
		return data;
	} catch (err) {
		console.error(err)
		return false;
	}
}


