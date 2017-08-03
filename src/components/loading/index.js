import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 100% { 
    transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
  }
`;

const Spinner = styled.div`
	width: 40px;
	height: 40px;

	position: relative;
	margin: 100px auto;
`;

const Bounce1 = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	background-color: #19f6e8;
	opacity: 0.6;
	position: absolute;
	top: 0;
	left: 0;
	animation: ${bounce} 2.0s infinite ease-in-out;
`;

const Bounce2 = Bounce1.extend`animation-delay: -1.0s;`;

const Loading = () =>
	(<Spinner class="spinner">
		<Bounce1 />
		<Bounce2 />
	</Spinner>);

export default Loading;
