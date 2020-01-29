module.exports = {
	dc: (authToken) => {
		if (typeof authToken !== 'string') {
			throw new TypeError('mailchimp-dc expected an auth token string.')
		}

		return authToken.split('-').pop()
	},
	url: (authToken) => {
		
		const dcUrlPart = this.dc(authToken)

		return `https://${dcUrlPart}.api.mailchimp.com/3.0/`
	},
}
