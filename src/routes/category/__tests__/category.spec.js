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

	it('Goes to category page', () =>
		chrome
			.goto('http://0.0.0.0:8080')
			.then(() => chrome.wait('.card-wrapper'))
			.then(() => chrome.click('a[href="/category/random"]'))
			.then(() => chrome.wait('.linter'))
			.then(() => chrome.screenshot())
			.then(image => expect(image).toMatchImageSnapshot()));

	it('Category page', () =>
		chrome
			.goto('http://0.0.0.0:8080/category/css')
			.then(() => chrome.wait('.linter'))
			.then(() => chrome.screenshot())
			.then(image => expect(image).toMatchImageSnapshot()));
});
