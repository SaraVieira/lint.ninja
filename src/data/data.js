const linters = [
	{
		name: 'Awesome Lint',
		link: 'https://github.com/marionebl/commitlint',
		description:
			'Linter for Awesome lists. Intended to make it easier to create and maintain Awesome lists.',
		creator: 'marionebl',
		category: 'random'
	},
	{
		name: 'commitlint',
		link: 'https://github.com/sindresorhus/awesome-lint',
		description: '📓 Lint commit messages',
		creator: 'sindresorhus',
		category: 'random'
	},
	{
		name: 'csslint',
		link: 'https://github.com/CSSLint/csslint',
		description:
			'CSS static analysis written in Javascript. Uses pluggable rules.',
		creator: 'CSSLint',
		category: 'css'
	},
	{
		name: 'csscomb',
		link: 'https://github.com/csscomb/csscomb.js',
		description:
			'CSS tool that beautifies CSS based on a configuration. Helps with keeping CSS consistent. Written in Javascript.',
		creator: 'csscomb',
		category: 'css'
	},
	{
		name: 'ie8linter',
		link: 'https://github.com/israelidanny/ie8linter',
		description:
			'Static analysis for Internet Explorer 8 compatibility. Written in Javascript.',
		creator: 'israelidanny',
		category: 'css'
	},
	{
		name: 'clinton',
		link: 'https://github.com/SamVerschueren/clinton',
		description: 'JavaScript project style linter.',
		creator: 'SamVerschueren',
		category: 'javascript'
	},
	{
		name: 'eslint',
		link: 'https://github.com/eslint/eslint',
		description:
			' Fully pluggable tool for identifying and reporting on patterns in JavaScript.',
		creator: 'eslint',
		category: 'javascript'
	},
	{
		name: 'jshint',
		link: 'https://github.com/jshint/jshint',
		description:
			' Community-driven tool that detects errors and potential problems in JavaScript code.',
		creator: 'jshint',
		category: 'javascript'
	},
	{
		name: 'prettier',
		link: 'https://github.com/jlongster/prettier',
		description:
			'Opinionated JavaScript formatter inspired by refmt with advanced support for language features from ES2017, JSX, and Flow.',
		creator: 'jlongster',
		category: 'javascript'
	},
	{
		name: 'standard',
		link: 'https://github.com/feross/standard',
		description: 'Javascript style linter that allows no configuration.',
		creator: 'feross',
		category: 'javascript'
	},
	{
		name: 'xo',
		link: 'https://github.com/sindresorhus/xo',
		description:
			'Opinionated but configurable ESLint wrapper with lots of goodies included. Enforces strict and readable code.',
		creator: 'sindresorhus',
		category: 'javascript'
	},
	{
		name: 'npm-package-lint',
		link: 'https://github.com/tclindner/npm-package-json-lint',
		description:
			'Configurable linter to enforce standards in npm package.json files.',
		creator: 'tclindner',
		category: 'random'
	},
	{
		name: 'markdownlint',
		link: 'https://github.com/DavidAnson/markdownlint',
		description:
			'Node.js style checker and lint tool for Markdown/CommonMark files.',
		creator: 'DavidAnson',
		category: 'markdown'
	},
	{
		name: 'mdl',
		link: 'https://github.com/mivok/markdownlint',
		description:
			'Check markdown files and flag style issues. Written in ruby and is distributed as a rubygem.',
		creator: 'mivok',
		category: 'markdown'
	},
	{
		name: 'Remark Lint',
		link: 'https://github.com/wooorm/remark-lint',
		description:
			'Written in Javascript. remark-lint provides configurable Markdown style linting.',
		creator: 'wooorm',
		category: 'markdown'
	},
	{
		name: 'Polylint',
		link: 'https://github.com/PolymerLabs/polylint',
		description:
			'Catch errors in your polymer project before even running your code. Written in TypeScript.',
		creator: 'PolymerLabs',
		category: 'javascript'
	},
	{
		name: 'sass-lint',
		link: 'https://github.com/sasstools/sass-lint',
		description: 'Node-only Sass linter for both sass and scss syntax.',
		creator: 'sasstools',
		category: 'sass'
	},
	{
		name: 'scss-lint',
		link: 'https://github.com/causes/scss-lint',
		description:
			'Tool to help keep your SCSS files clean and readable by running it against a collection of configurable linter rules.',
		creator: 'causes',
		category: 'sass'
	},
	{
		name: 'tslint',
		link: 'https://github.com/palantir/tslint',
		description:
			'Customizable TypeScript linter with automatic fixing of formating and style violations.',
		creator: 'palantir',
		category: 'typescript'
	},
	{
		name: 'eslint-config-airbnb',
		link:
			'https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb',
		description: "Shareable config for Airbnb's style guide",
		creator: 'airbnb',
		category: 'eslint-config'
	},
	{
		name: 'eslint-config-canonical',
		link: 'https://github.com/gajus/eslint-config-canonical',
		description: 'Shareable config for Canonical style guide',
		creator: 'gajus',
		category: 'eslint-config'
	},
	{
		name: 'ES',
		link: 'https://github.com/thenativeweb/eslint-config-es',
		description: 'Shareable config for very strict code',
		creator: 'thenativeweb',
		category: 'eslint-config'
	},
	{
		name: 'Facebook',
		link: 'https://github.com/facebook/fbjs',
		description: "Sharable config for Facebook's style guide",
		creator: 'facebook',
		category: 'eslint-config'
	},
	{
		name: 'Google',
		link: 'https://github.com/google/eslint-config-google',
		description: 'Shareable config for the Google style',
		creator: 'google',
		category: 'eslint-config'
	},
	{
		name: 'Shopify',
		link: 'https://github.com/Shopify/eslint-plugin-shopify',
		description: "Shareable config for Shopify's style guide",
		creator: 'Shopify',
		category: 'eslint-config'
	},
	{
		name: 'Supermind',
		link: 'https://github.com/supermind/eslint-config-supermind',
		description: 'Shareable config for Supermind style',
		creator: 'Supermind',
		category: 'eslint-config'
	},
	{
		name: 'Standard',
		link: 'https://github.com/feross/eslint-config-standard',
		description: 'Shareable config for JavaScript Standard Style',
		creator: 'feross',
		category: 'eslint-config'
	},
	{
		name: 'xo',
		link: 'https://github.com/sindresorhus/eslint-config-xo',
		description: 'Shareable config for XO',
		creator: 'sindresorhus',
		category: 'eslint-config'
	},
	{
		name: 'Angular',
		link: 'https://github.com/Gillespie59/eslint-plugin-angular',
		description:
			"Linting rules to adhere to the John Papa's Angular Styleguide",
		creator: 'Gillespie59',
		category: 'eslint-plugin'
	},
	{
		name: 'AVA',
		link: 'https://github.com/sindresorhus/eslint-plugin-ava',
		description: 'Linting rules for AVA',
		creator: 'sindresorhus',
		category: 'eslint-plugin'
	},
	{
		name: 'Backbone',
		link: 'https://github.com/ilyavolodin/eslint-plugin-backbone',
		description: 'Linting rules for Backbone.',
		creator: 'ilyavolodin',
		category: 'eslint-plugin'
	},
	{
		name: 'Chai',
		link: 'https://github.com/turbo87/eslint-plugin-chai-expect',
		description: 'Linting rules for Chai',
		creator: 'turbo87',
		category: 'eslint-plugin'
	},
	{
		name: 'Ember',
		link: 'https://github.com/netguru/eslint-plugin-ember',
		description: 'Linting rules for Ember',
		creator: 'netguru',
		category: 'eslint-plugin'
	},
	{
		name: 'hapi',
		link: 'https://github.com/continuationlabs/eslint-plugin-hapi',
		description: 'Linting rules for hapi',
		creator: 'continuationlabs',
		category: 'eslint-plugin'
	},
	{
		name: 'jasmine',
		link: 'https://github.com/tlvince/eslint-plugin-jasmine',
		description: 'Linting rules for jasmine',
		creator: 'tlvince',
		category: 'eslint-plugin'
	},
	{
		name: 'JSDoc',
		link: 'https://github.com/gajus/eslint-plugin-jsdoc',
		description: 'Linting rules for JSDoc',
		creator: 'gajus',
		category: 'eslint-plugin'
	},
	{
		name: 'Lodash',
		link: 'https://github.com/wix/eslint-plugin-lodash',
		description: 'Linting rules for Lodash',
		creator: 'wix',
		category: 'eslint-plugin'
	},
	{
		name: 'Lodash/fp',
		link: 'https://github.com/jfmengels/eslint-plugin-lodash-fp',
		description: 'Lodash/fp specific linting rules',
		creator: 'jfmengels',
		category: 'eslint-plugin'
	},
	{
		name: 'Meteor',
		link: 'https://github.com/dferber90/eslint-plugin-meteor',
		description: 'Linting rules for Meteor',
		creator: 'dferber90',
		category: 'eslint-plugin'
	},
	{
		name: 'Mocha',
		link: 'https://github.com/lo1tuma/eslint-plugin-mocha',
		description: 'Linting rules for Mocha',
		creator: 'lo1tuma',
		category: 'eslint-plugin'
	},
	{
		name: 'Mongodb',
		link: 'https://github.com/nfroidure/eslint-plugin-mongodb',
		description: 'Linting rules for Mongodb',
		creator: 'nfroidure',
		category: 'eslint-plugin'
	},
	{
		name: 'React',
		link: 'https://github.com/yannickcr/eslint-plugin-react',
		description: 'Linting rules for React',
		creator: 'yannickcr',
		category: 'eslint-plugin'
	},
	{
		name: 'React Native',
		link: 'https://github.com/Intellicode/eslint-plugin-react-native',
		description: 'Linting rules for React Native',
		creator: 'Intellicode',
		category: 'eslint-plugin'
	},
	{
		name: 'RequireJS',
		link: 'https://github.com/cvisco/eslint-plugin-requirejs',
		description: 'Linting rules for RequireJS',
		creator: 'cvisco',
		category: 'eslint-plugin'
	},
	{
		name: 'VueJS',
		link: 'https://github.com/vuejs/eslint-plugin-vue',
		description: 'Linting rules for VueJS',
		creator: 'vuejs',
		category: 'eslint-plugin'
	},
	{
		name: 'Babel',
		link: 'https://github.com/babel/eslint-plugin-babel',
		description:
			'Adds replacements for built-in rules to include Babel features',
		creator: 'babel',
		category: 'eslint-plugin'
	},
	{
		name: 'Compat',
		link: 'https://github.com/amilajack/eslint-plugin-compat',
		description:
			'Lint browser compatability of APIs used (caniuse as an ESLint plugin)',
		creator: 'amilajack',
		category: 'eslint-plugin'
	},
	{
		name: 'Deprecate',
		link: 'https://github.com/AlexMost/eslint-plugin-deprecate',
		description:
			'Mark functions or modules as deprecated and get lint messages when they are used',
		creator: 'AlexMost',
		category: 'eslint-plugin'
	},
	{
		name: 'Disable',
		link: 'https://github.com/mradionov/eslint-plugin-disable',
		description:
			'Disable specified plugins using file path patterns and inline comments',
		creator: 'mradionov',
		category: 'eslint-plugin'
	},
	{
		name: 'Flow',
		link: 'https://github.com/gajus/eslint-plugin-flowtype',
		description: 'Flow type linting rules',
		creator: 'gajus',
		category: 'eslint-plugin'
	},
	{
		name: 'Flow Errors',
		link: 'https://github.com/amilajack/eslint-plugin-flowtype-errors',
		description: 'Run Flow as an ESLint plugin',
		creator: 'amilajack',
		category: 'eslint-plugin'
	},
	{
		name: 'GraphQL',
		link: 'https://github.com/apollostack/eslint-plugin-graphql',
		description: 'Check your GraphQL query strings against a schema',
		creator: 'apollostack',
		category: 'eslint-plugin'
	},
	{
		name: 'HTML',
		link: 'https://github.com/BenoitZugmeyer/eslint-plugin-html',
		description: 'Linting for JavaScript inside of HTML <script> tags',
		creator: 'BenoitZugmeyer',
		category: 'eslint-plugin'
	},
	{
		name: 'Import',
		link: 'https://github.com/benmosher/eslint-plugin-import',
		description:
			'Linting of ES2015+ import/export syntax, and prevent issues with misspelling of file paths and import names',
		creator: 'benmosher',
		category: 'eslint-plugin'
	},
	{
		name: 'JSON',
		link: 'https://github.com/azeemba/eslint-plugin-json',
		description: 'Lint your JSON files',
		creator: 'azeemba',
		category: 'eslint-plugin'
	},
	{
		name: 'Markdown',
		link: 'https://github.com/eslint/eslint-plugin-markdown',
		description: 'Linting JavaScript in Markdown',
		creator: 'eslint',
		category: 'eslint-plugin'
	},
	{
		name: 'Node',
		link: 'https://github.com/mysticatea/eslint-plugin-node',
		description:
			'Linting rules for Node.js (checking importing paths, ES syntax, ...)',
		creator: 'mysticatea',
		category: 'eslint-plugin'
	},
	{
		name: 'Notice',
		link: 'https://github.com/nickdeis/eslint-plugin-notice',
		description:
			'An eslint rule that checks the top of files and fixes them too!',
		creator: 'nickdeis',
		category: 'eslint-plugin'
	},
	{
		name: 'Regex',
		link: 'https://github.com/BrainMaestro/eslint-plugin-optimize-regex',
		description: 'Optimize regex literals.',
		creator: 'BrainMaestro',
		category: 'eslint-plugin'
	},
	{
		name: 'SQL',
		link: 'https://github.com/gajus/eslint-plugin-sql',
		description: 'SQL linting rules for ESLint',
		creator: 'gajus',
		category: 'eslint-plugin'
	},
	{
		name: 'Typelint',
		link: 'https://github.com/yarax/typelint',
		description:
			'Introduces types, based on existing schemas (Swagger, Redux) and linting access to object properties, preventing undefined errors',
		creator: 'yarax',
		category: 'eslint-plugin'
	},
	{
		name: 'Unicorn',
		link: 'https://github.com/sindresorhus/eslint-plugin-unicorn',
		description: 'Various awesome ESLint rules',
		creator: 'sindresorhus',
		category: 'eslint-plugin'
	},
	{
		name: 'ESLint Comments',
		link: 'https://github.com/mysticatea/eslint-plugin-eslint-comments',
		description:
			'Best practices about ESLint directive comments (/*eslint-disable*/, etc...)',
		creator: 'mysticatea',
		category: 'eslint-plugin'
	},
	{
		name: 'fp',
		link: 'https://github.com/jfmengels/eslint-plugin-fp',
		description: 'ESLint rules for functional programming',
		creator: 'jfmengels',
		category: 'eslint-plugin'
	},
	{
		name: 'Immutable',
		link: 'https://github.com/jhusain/eslint-plugin-immutable',
		description: 'Disable all mutation in JavaScript',
		creator: 'jhusain',
		category: 'eslint-plugin'
	},
	{
		name: 'JSX a11y',
		link: 'https://github.com/evcohen/eslint-plugin-jsx-a11y',
		description: 'Accessibility rules on JSX elements.',
		creator: 'evcohen',
		category: 'eslint-plugin'
	},
	{
		name: 'new-with-error',
		link: 'https://github.com/Trott/eslint-plugin-new-with-error',
		description: 'Require errors to be thrown using new',
		creator: 'Trott',
		category: 'eslint-plugin'
	},
	{
		name: 'HTMLHint',
		link: 'https://github.com/yaniswang/HTMLHint',
		description:
			'HTMLHint is a Static Code Analysis Tool for HTML, you can use it with IDE or in build system.',
		creator: 'yaniswang',
		category: 'HTML'
	},
	{
		name: 'Bootlint',
		link: 'https://github.com/twbs/bootlint',
		description:
			'Bootlint is a tool that checks for several common HTML mistakes in webpages that are using Bootstrap.',
		creator: 'twbs',
		category: 'HTML'
	},
	{
		name: 'jsonlint',
		link: 'https://github.com/zaach/jsonlint',
		description:
			'A pure JavaScript version of the service provided at jsonlint.com.',
		creator: 'zaach',
		category: 'JSON'
	},
	{
		name: 'no-inferred-method-name ',
		link: 'https://github.com/johnstonbl01/eslint-no-inferred-method-name',
		description:
			'Custom rule for ESLint that checks for inferred method names within object literals.',
		creator: 'johnstonbl01',
		category: 'eslint-plugin'
	},
	{
		name: 'no-loops',
		link: 'https://github.com/buildo/eslint-plugin-no-loops',
		description: "It's 2017 and you still use loops?",
		creator: 'buildo',
		category: 'eslint-plugin'
	},
	{
		name: 'no-use-extend-native',
		link: 'https://github.com/dustinspecker/eslint-plugin-no-use-extend-native',
		description: 'Prevent using extended native objects',
		creator: 'dustinspecker',
		category: 'eslint-plugin'
	},
	{
		name: 'Promises',
		link: 'https://github.com/xjamundx/eslint-plugin-promise',
		description: 'Best practices when working with promises.',
		creator: 'xjamundx',
		category: 'eslint-plugin'
	},
	{
		name: 'Security',
		link: 'https://github.com/nodesecurity/eslint-plugin-security',
		description: 'ESLint rules for Node Security',
		creator: 'nodesecurity',
		category: 'eslint-plugin'
	},
	{
		name: 'this',
		link: 'https://github.com/matijs/eslint-plugin-this',
		description: "Write pure functions, don't allow this",
		creator: 'matijs',
		category: 'eslint-plugin'
	},
	{
		name: 'XSS',
		link: 'https://github.com/Rantanen/eslint-plugin-xss',
		description:
			'Tries to detect XSS issues in codebase before they end up in production',
		creator: 'Rantanen',
		category: 'eslint-plugin'
	},
	{
		name: 'Filenames',
		link: 'https://github.com/selaux/eslint-plugin-filenames',
		description: 'Ensure consistent filenames for your javascript files',
		creator: 'selaux',
		category: 'eslint-plugin'
	},
	{
		name: 'GitHub',
		link: 'https://github.com/primer/stylelint-config-primer',
		description: "Sharable stylelint config used by GitHub's CSS",
		creator: 'primer',
		category: 'stylelint-config'
	},
	{
		name: 'Standard',
		link: 'https://github.com/stylelint/stylelint-config-standard',
		description: 'The standard shareable config for stylelint',
		creator: 'stylelint',
		category: 'stylelint-config'
	},
	{
		name: 'Wikimedia',
		link: 'https://github.com/wikimedia/stylelint-config-wikimedia',
		description:
			'Wikimedia CSS Coding Standards shareable config for stylelint',
		creator: 'wikimedia',
		category: 'stylelint-config'
	},
	{
		name: 'Wordpress',
		link: 'https://github.com/ntwb/stylelint-config-wordpress/',
		description:
			'WordPress CSS Coding Standards shareable config for stylelint',
		creator: 'ntwb',
		category: 'stylelint-config'
	},
	{
		name: 'stylelint-checkstyle-formatter',
		link: 'https://github.com/davidtheclark/stylelint-checkstyle-formatter',
		description: 'Output Checkstyle XML reports of stylelint results',
		creator: 'davidtheclark',
		category: 'stylelint-plugin'
	},
	{
		name: 'stylelint-order',
		link: 'https://github.com/hudochenkov/stylelint-declaration-block-order',
		description: 'A collection of order related linting rules for stylelint.',
		creator: 'hudochenkov',
		category: 'stylelint-plugin'
	},
	{
		name: 'stylelint-property-groups-structure ',
		link: 'https://github.com/hudochenkov/stylelint-property-groups-structure',
		description:
			'stylelint plugin which requires or disallow an empty line before property groups.e',
		creator: 'hudochenkov',
		category: 'stylelint-plugin'
	},
	{
		name: 'stylelint-scss',
		link: 'https://github.com/kristerkari/stylelint-scss',
		description: 'A collection of SCSS specific linting rules for stylelint.',
		creator: 'kristerkari',
		category: 'stylelint-plugin'
	},
	{
		name: 'stylelint-selector-bem-pattern',
		link: 'https://github.com/davidtheclark/stylelint-selector-bem-pattern',
		description: 'A stylelint plugin that incorporates postcss-bem-linter.',
		creator: 'davidtheclark',
		category: 'stylelint-plugin'
	},
	{
		name: 'stylelint-declaration-use-variable',
		link: 'https://github.com/sh-waqar/stylelint-declaration-use-variable',
		description:
			'A stylelint plugin to check the use of variables on declaration in (less/scss/css).',
		creator: 'sh-waqar',
		category: 'stylelint-plugin'
	},
	{
		name: 'stylelint-no-unsupported-browser-features',
		link: 'https://github.com/ismay/stylelint-no-unsupported-browser-features',
		description:
			'🤵 Disallow features that are unsupported by the browsers that you are targeting',
		creator: 'ismay',
		category: 'stylelint-plugin'
	},
	{
		name: 'stylelint-declaration-strict-value',
		link: 'https://github.com/AndyOGo/stylelint-declaration-strict-value',
		description:
			"A stylelint plugin that enforces either variables ($sass, @less, var(--cssnext)), functions or custom CSS keywords (inherit, none, etc.) for property's values.",
		creator: 'AndyOGo',
		category: 'stylelint-plugin'
	},
	{
		name: 'Naive linter for English prose',
		link: 'https://github.com/btford/write-good',
		description:
			"Naive linter for English prose for developers who can't write good and wanna learn to do other stuff good too.",
		creator: 'btford',
		category: 'random'
	},
	{
		name: 'Alex',
		link: 'https: //github.com/wooorm/alex',
		description:
			'Catch insensitive, inconsiderate writing',
		creator: 'wooorm',
		category: 'random'
	},
	{
		name: 'Dockerfilelint',
		link: 'https://github.com/replicatedhq/dockerfilelint',
		description: 'An opinionated Dockerfile linter.',
		creator: 'replicatedhq',
		category: 'other'
	},
	{
		name: 'ember-template-lint',
		link: 'https://github.com/rwjblue/ember-template-lint',
		description: 'Linter for Ember or Handlebars templates.',
		creator: 'rwjblue',
		category: 'javascript'
	},
	{
		name: 'JSONLint',
		link: 'https://github.com/codenothing/jsonlint',
		description:
			'JSONLint is a JSON Linter that allows for comments in your JSON Files.',
		creator: 'rwjblue',
		category: 'json'
	},
	{
		name: 'forkability',
		link: 'https://github.com/basicallydan/forkability',
		description:
			'Forkability helps you to make your project more open-source-friendly by pointing out missing features and useful tips.',
		creator: 'basicallydan',
		category: 'random'
	},
	{
		name: 'tldr-lint',
		link: 'https://github.com/tldr-pages/tldr-lint',
		description:
			'tldr-lint is a linting tool for validating tldr pages. It can also format your pages for you!',
		creator: 'tldr-pages',
		category: 'random'
	},
	{
		name: 'yaml-lint',
		link: 'https://github.com/rasshofer/yaml-lint',
		description: 'A simple (CLI) tool to lint YAML files',
		creator: 'rasshofer',
		category: 'other'
	},
	{
		name: 'RespImageLint - Linter for Responsive Images',
		link: 'https://github.com/ausi/respimagelint',
		description:
			'RespImageLint is a bookmarklet that checks images of a webpage against a list of common mistakes and best practises.',
		creator: 'ausi',
		category: 'random'
	}
];

export default linters;
