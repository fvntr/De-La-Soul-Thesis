//middleware

"use strict";

module.exports = function(app, express){

	app.use(express.static(__dirname + '../public'));

	//each api gets its own router
	var eventRouter = express.Router();

	//router assigned to route otherwise go to root 
	app.use('/api/events', eventRouter);

	app.get('/*', function(req, res) {
	    res.redirect('/');
	});

	//pass the instantiation 
	require('../events/eventRoutes.js')(eventRouter);

}
