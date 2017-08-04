/**
 * Created by NCS-KSW on 2017-08-04.
 */
var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('request for ' + pathname + ' received.');

        route(handle, pathname, response); // injected function call
    }

    http.createServer(onRequest).listen(443);

    console.log('server has started.');
}

exports.start = start;