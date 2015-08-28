var key = require('/lib/config.json')["EVENTBRITE_APP_KEY"];
var Eventbrite = require('eventbrite')({app_key: key});

module.exports = {
	fetchEvents: function(req,res,next){
		var params = {
			within: 10,
			category: req.query.category,
			postal_code: req.query.zipcode,
			max: 10
		}
	}

	Eventbrite.event_search(params, function(error, data){
		if(error){
			next('error processing request')
		} else {
			res.json({results: data.events});
		} 
	})

}

