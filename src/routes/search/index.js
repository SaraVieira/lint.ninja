import { h, Component } from 'preact';
import capitalize from 'capitalize-it';
import styled from 'styled-components';
import { getLintersBySearch } from '../../lib/api';
import Linter from '../../components/linter/index';

const CategoryWrapper = styled.main`
	width: 80%;
	margin: auto;
	display: flex;
	align-items: center;
	flex-direction: column;
`;
export default class SearchRoute extends Component {
	state = {
		linters: null
	};

	getLinters(query) {
		getLintersBySearch(query).then(linters => this.setState({ linters }));
	}

	// gets called when this route is navigated to
	componentDidMount() {
		this.getLinters(this.props.query);
	}

	// gets when props change
	componentWillReceiveProps(nextProps) {
		this.getLinters(nextProps.query);
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ query }, { linters }) {
		return (
			<CategoryWrapper>
				<h1>
					Results for {capitalize(query)}:
				</h1>
				<ul>
					{linters && linters.map(linter => <Linter linter={linter} />)}
				</ul>
			</CategoryWrapper>
		);
	}
}
