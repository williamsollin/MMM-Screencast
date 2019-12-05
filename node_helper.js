const NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
	dialServer: require("./DialServer.js"),
	config: {},
	start: function() {
		this.dialServer.mmmSendSocket = this.sendSocketNotification;
	},
	socketNotificationReceived: function(notification, payload) {
		switch (notification) {
			case 'SET_CONFIG':
				this.config = payload;
				this.dialServer.start(payload);
				break;
			default:
				break;
		}
	}
});
