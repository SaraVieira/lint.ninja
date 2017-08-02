export default (config, env, helpers) => {
	const plugin = helpers.getPluginsByName(config, 'SWPrecacheWebpackPlugin')[0];

	if ((plugin || {}).plugin) {
		const options = plugin.plugin.options;

		options.staticFileGlobsIgnorePatterns.push(/.DS_Store/);
	}
};
