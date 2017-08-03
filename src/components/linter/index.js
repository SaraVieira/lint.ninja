import { h } from 'preact';
import styled from 'styled-components';
import { FadeIn } from 'animate-css-styled-components';

const LintItem = styled.li`
	display: flex;
	margin: 24px 0;
	list-style: none;
	align-items: center;
`;

const Creator = styled.div`margin-left: 16px;`;

const Pic = styled.img`
	min-width: 100px;
	height: 100px
`;

const Name = styled.h2`
	margin: 0;
	font-weight: light;
`;

const Description = styled.p`margin: 4px 0;`;

const Linter = ({ linter }) =>
	(<LintItem class="linter">
		<FadeIn duration="0.8s" delay="0.3s">
			<Pic
				src={`https://github.com/${linter.creator}.png?size=100`}
				alt={linter.creator}
			/></FadeIn>
		<Creator>
			<Name>
				<a href={linter.link}>
					{linter.name}
				</a>
			</Name>
			<Description>
				{linter.description}
			</Description>
			<a href={`https://github.com/${linter.creator}`}>
				Github: {linter.creator}
			</a>
		</Creator>
	</LintItem>);

export default Linter;
