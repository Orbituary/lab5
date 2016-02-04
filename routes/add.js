var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	res.render('add');
	name = req.query.name;
	des = req.query.description;
	img = 'http://lorempixel.com/400/400/people';
	obj = {'name': name,
			'description' : des,
			'imageURL': img
			};
	console.log(obj);
	data["friends"].push(obj);
 }