import { h } from 'preact';

import styled from 'styled-components';


import logo from '../../assets/logo.svg';

const Nav = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 40px 0;
`;

const Logo = styled.img`
	width: 350px;
`;

const Header = () =>
	(<Nav>
		<a href="/">
			<Logo src={logo} alt="watthelint" />
		</a>
	</Nav>);


export default Header;
