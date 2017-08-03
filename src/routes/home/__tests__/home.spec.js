const { Chrome } = require('navalia');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

describe('Visual Regressions', () => {
	let chrome = null;

	beforeEach(() => {
		chrome = new Chrome();
	});

	afterEach(() => {
		chrome.done();
	});

	it('Main Page', () =>
		chrome
			.goto('http://0.0.0.0:8080')
			.then(() => chrome.wait('.card-wrapper'))
			.then(() => chrome.screenshot())
			.then(image => expect(image).toMatchImageSnapshot()));

	it('Main Page With Scroll', () =>
		chrome
			.goto('http://0.0.0.0:8080')
			.then(() => chrome.wait('.card-wrapper'))
			.then(() => chrome.scroll(0, 500))
			.then(() => chrome.screenshot())
			.then(image => expect(image).toMatchImageSnapshot()));
});
