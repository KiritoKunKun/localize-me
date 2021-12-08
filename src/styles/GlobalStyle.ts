import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;

		/* 1rem = 10px */
		font-size: 62.5%;
		font-family: Roboto, sans-serif;
	}

	@media (max-width: 1120px) {
		html {
			font-size: 58%;
		}
	}

	@media (max-width: 720px) {
		html {
			font-size: 54%;
		}
	}

	body {
		background: #f0f0f0;
		-webkit-font-smoothing: antialiased;
	}

	button {
		cursor: pointer;
	}
`;