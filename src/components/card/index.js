import { h, Component } from 'preact';
import styled from 'styled-components';
import { Link } from 'preact-router/match';
import { getCategories } from '../../lib/api';
import Loading from '../../components/loading/index';
import { SlideInUp } from 'animate-css-styled-components';

const CardWrapper = styled.section`
	align-items: center;
	justify-content: center;
	background: #404040;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	display: flex;
	width: 100%;
	height: 100%;
`;

const Wrapper = styled.div`
	width: 30%;
	height: 300px;
	display: flex;
	margin-bottom: 40px;

	& > div {
		width: 100%;
	}

	@media (max-width: 950px) {
		width: 48%;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const Logo = styled.h1`
	outline: 1px solid #19f6e8;
	display: inline-block;
	padding: 15px 40px;
	color: #fff;
	text-transform: uppercase;
	font-size: 1.4vw;
	font-weight: normal;
	letter-spacing: 8px;
	transition: all 300ms ease;
	position: relative;
	cursor: pointer;
	text-align: center;

	@media (max-width: 768px) {
		font-size: 3.5vw;
	}

	a {
		color: #fff;
		text-decoration: none;

		&:after {
			display: none;
		}
	}

	&:before {
		width: 0px;
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		background: #19f6e8;
		transition: all 300ms ease;
	}

	&:hover:before {
		width: 100%;
	}

	&:hover a {
		color: #404040;
	}
`;

const Name = styled.span`
	z-index: 2;
	position: relative;
`;

const Section = styled.section`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: space-between;
`;

class Card extends Component {
	state = { categories: null };

	getCategories() {
		getCategories().then(categories => this.setState({ categories }));
	}

	componentDidMount() {
		this.getCategories();
	}

	render({}, { categories }) {
		return (
			<Section>
				{categories
					? categories.map(category =>
						(<Wrapper>
							<SlideInUp duration="0.8s">
								<CardWrapper>
									<Logo>
										<Name>
											<Link href={`/category/${category}`}>
												{category.replace(/-/g, ' ')}
											</Link>
										</Name>
									</Logo>
								</CardWrapper>
							</SlideInUp>
						</Wrapper>)
					)
					: <Loading />}
			</Section>
		);
	}
}

export default Card;
