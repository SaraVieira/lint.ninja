const preactCliFlow = require('preact-cli-plugin-flow');
const preactCliLodash = require('preact-cli-lodash');

export default function (config) {
	preactCliFlow(config);
	preactCliLodash(config);
}
