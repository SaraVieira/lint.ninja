import { h, Component } from 'preact';
import capitalize from 'capitalize-it';
import styled from 'styled-components';
import linters from '../../data/data';

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
		const linter = linters.filter(linter => linter.category === category);

		this.setState({ linters: linter });
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
					{linters && linters.map(linter =>
						(<li>
							<h2>
								<a href={linter.url}>
									{linter.name}
								</a>
							</h2>
							<p>
								{linter.description}
							</p>
							<a href={`https://github.com/${linter.creator}`}>
								{linter.creator}
							</a>
						</li>)
					)}
				</ul>
			</CategoryWrapper>
		);
	}
}
