const express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    http = require('http').Server(app);

app.use(bodyParser.json({
    type: 'application/json'
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

app.get('/api/test', (req, res) => {
	console.log("请求 ／test");

	res.json({
		data: "Hello webpack 2.0"
	});
});

http.listen(3001, function() {
    console.log('服务启动端口号: 3001');
});
