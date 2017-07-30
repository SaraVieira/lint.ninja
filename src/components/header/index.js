import { h } from 'preact';

import styled from 'styled-components';

import logo from '../../assets/logo.svg';
import git from '../../assets/git.svg';

const Nav = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 40px 0;
`;

const Logo = styled.img`
	width: 350px;
	max-width: 90%;
	display: block;
	margin: auto;
`;

const Link = styled.a`
	&:after {
		display: none;
	}
`;

const Tag = styled.h2`
	font-family: 'Raleway', sans-serif;
	font-weight: 200;
	text-align: center;
	margin-top: -8px;
	margin-bottom: 24px;
	font-size: 30px;
`;

const Github = styled.a`
	position: absolute;
	right: 48px;
	top: 20px;

	&:after {
		display: none;
	}

	@media (max-width: 480px) {
		right: 20px;
	}
`;

const Header = () =>
	(<header>
		<Github href="https://github.com/SaraVieira/wutthelint" target="_blank">
			<img src={git} alt="Github" />
		</Github>
		<Nav>
			<Link href="/">
				<Logo src={logo} alt="watthelint" />
			</Link>
		</Nav>
		<Tag>There's a linter for that!</Tag>
	</header>);

export default Header;
