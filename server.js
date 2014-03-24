// modules =================================================
var app = require('express')();

// configuration ===========================================
var port = process.env.PORT || 8080; // set our port

app.configure(function() {
	app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
	app.use(express.logger('dev')); 					// log every request to the console
});

// routes ==================================================
app.get('*', function(req, res) {
	res.sendfile('./app/views/index.html');
});

// start app ===============================================
app.listen(port);