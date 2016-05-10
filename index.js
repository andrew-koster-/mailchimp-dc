'use strict';
module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('mailchimp-dc expected a string');
	}

	return str.split('-').pop();
};
