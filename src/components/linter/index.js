import { h } from 'preact';
import styled from 'styled-components';

const LintItem = styled.li`
	display: flex;
	margin: 24px 0;
	list-style: none;
	align-items: center;
`;

const CreatorPic = styled.img`
	width: 100px;
	height: 100px;
	margin-right: 16px;
`;

const Name = styled.h2`
	margin: 0;
	font-weight: light;
`;

const Description = styled.p`margin: 4px 0;`;

const Linter = ({ linter }) =>
	(<LintItem>
		<CreatorPic
			src={`https://github.com/${linter.creator}.png?size=200`}
			alt={linter.creator}
		/>
		<div>
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
		</div>
	</LintItem>);

export default Linter;
