import { h, Component } from 'preact';
import capitalize from 'capitalize-it';
import styled from 'styled-components';
import { getLintersByCategory } from '../../lib//api';
import Linter from '../../components/linter/index';

const CategoryWrapper = styled.main`
	width: 80%;
	margin: auto;
	display: flex;
	align-items: center;
	flex-direction: column;
`;
export default class Category extends Component {
	state = {
		linters: null
	};

	getLinters(category) {
		getLintersByCategory(category).then(linters => this.setState({ linters }));
	}

	// gets called when this route is navigated to
	componentDidMount() {
		const category = this.props.category;
		this.getLinters(category);
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ category }, { linters }) {
		return (
			<CategoryWrapper>
				<h1>
					{capitalize(category)} Linters:
				</h1>
				<ul>
					{linters && linters.map(linter => <Linter linter={linter} />)}
				</ul>
			</CategoryWrapper>
		);
	}
}
