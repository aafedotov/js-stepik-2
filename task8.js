function urlParser(url) {

	let restOfUrl = url;
	let protocol = url.slice(0, url.indexOf(':'));
	restOfUrl = url.slice(url.indexOf(':') + 3);
	let domain = restOfUrl.slice(0, restOfUrl.indexOf('/'));
	restOfUrl = restOfUrl.slice(restOfUrl.indexOf('/'));
	return [protocol, domain, restOfUrl];
}

let result = urlParser('https://purpleschool.ru/course/javascript');

console.log(
`Protocol: ${result[0]} \n
Domain: ${result[1]} \n
Inner url: ${result[2]}`
);
