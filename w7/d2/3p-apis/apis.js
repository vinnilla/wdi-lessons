var rp = require("request-promise");

// rp.get("http://paulgraham.com/swan.html")
//     .then(response => console.log(response))
//     .catch(err => console.log(err))

// function weather(query) {
// 	var apiKey = "77bf608801dea2d306f6004579d2247a"

// 	var req = rp.get({
// 	    uri: `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`,
// 	    json: true
// 	})
// 	req.then(response => {
// 	  console.log(response.main.temp)
// 	})
// }

// weather('Chicago');
// weather('New York');
// weather('Los Angeles');

// for (var i=2; i<process.argv.length; i++) {
// 	weather(process.argv[i]);
// }

 var apiKey = "EHjPdPxsdnS0dqEkPPUTugHow"

 var req = rp.get({
 		uri: "https://api.twitter.com/1.1/statuses/user_timeline.json?count=2&screen_name=daniwao",
 		headers: {

 			Authorization: 'OAuth oauth_consumer_key="EHjPdPxsdnS0dqEkPPUTugHow", oauth_nonce="aecfdeec1105fdf58595253cd6535373", oauth_signature="k1pHdNaHlnXW%2FEg%2F2T8U3YJiDKo%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1470268358", oauth_token="1955287938-iQ9nDrhcMZLZEBaEhZ21hA1qS1Z3PG4xYCABdgV", oauth_version="1.0"'
 		},
 		json:true

 })

 req.then(response => {
 	response.forEach(tweet => {
 		console.log(tweet.text)
 	})
 })
 .catch(console.log)