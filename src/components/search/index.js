import { h, Component } from 'preact';
import styled from 'styled-components';
import { route } from 'preact-router';

class Search extends Component {
	changeRoute(e) {
		const value = e.target.value;

		if (value.length > 1) {
			route(`/search/${value}`);
		}
	}
	componentDidMount() {
		if (this.props.value) {
			this.input.focus();
		}
	}

	render({ value }) {
		return (
			<input
				ref={c => (this.input = c)}
				onInput={this.changeRoute}
				type="text"
				value={value}
			/>
		);
	}
}

export default Search;
