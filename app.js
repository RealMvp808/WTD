
var rname = ["Mavro"];
var weblink = ["http://www.chefmavro.com"];



function test (argument) {
	var a = document.createElement('a');
	var linkText = document.createTextNode(rname[0]);
	a.appendChild(linkText);
	a.href = weblink[0];
	a.target = "_blank">
	document.body.appendChild(a);
}

/*
var a = document.createElement('a');
var linkText = document.createTextNode("alanwongs.com");
a.appendChild(linkText);
a.title = "my title text";
a.href = "http://example.com";
document.body.appendChild(a);
*/