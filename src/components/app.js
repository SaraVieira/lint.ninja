import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import SearchRoute from '../routes/search';
import Category from '../routes/category';
// import Home from 'async!./home';
// import Category from 'async!./profile';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Category path="/category/:category" />
					<SearchRoute path="/search/:query" />
				</Router>
			</div>
		);
	}
}
