import { h, Component } from 'preact';
import styled from 'styled-components';
import Card from '../../components//card/index';
import Search from '../../components/search/index';

const HomeWrapper = styled.main`
	width: 80%;
	margin: auto;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export default class Home extends Component {
	render() {
		return (
			<HomeWrapper>
				<Search />
				<Card />
			</HomeWrapper>
		);
	}
}
