/*
 * Url-Handling-Http-Server
 * https://github.com/owzzz/Node-Url-Handling-Http-Server
 *
 * Copyright (c) 2013 Owzzz
 * Licensed under the MIT license.
 */
var http = require('http'),
		url  = require('url');

exports.CreateServer = function() {

	'use strict';

	http.createServer(function (request, response) {
   // Attach listener on end event.
	   request.on('end', function () {

	   		//Running on localhost does not return the full list of url values
	   		console.log('original request url', request.url);

	   		//Fake it to demonstrate an actual response from a live url
	   		request.url = "http://user:pass@host.com:8080/p/a/t/h?query=string#hash"

	      // This function parses the url from request and returns object representation.
	      var urlMethods = {
	      	"search"   : url.parse(request.url, true).search,
	      	"href"	   : url.parse(request.url, true).href,
	      	"protocol" : url.parse(request.url, true).protocol,
	      	"host"		 : url.parse(request.url, true).host,
	      	"auth"		 : url.parse(request.url, true).auth,
	      	"hostname" : url.parse(request.url, true).hostname,
	      	"port"		 : url.parse(request.url, true).port,
	      	"path"		 : url.parse(request.url, true).path,
	      	"query"		 : url.parse(request.url, true).query,
	     		"hash"		 : url.parse(request.url, true).hash
	   	  }
	      // Write headers to the respons
	      response.writeHead(200, {'Content-Type': 'application/json'} );

	      // Send data and end response.
	      response.write(JSON.stringify(urlMethods));

	      response.end();
	   });
	// Listen on the 8080 port.
	}).listen(1337);


	console.log('Server Started')

  return 'Server Started';
};

exports.CreateServer();