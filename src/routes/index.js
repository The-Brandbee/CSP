'use strict';

module.exports = function(app) {
	require('./metaguise')(app);
	require('./user')(app);
	require('./views')(app);
};
