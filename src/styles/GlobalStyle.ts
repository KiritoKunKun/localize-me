import { linearGradient } from 'polished';
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
		* {
			font-size: 58%;
		}
	}

	@media (max-width: 720px) {
		* {
			font-size: 54%;
		}
	}

	body {
		background: ${linearGradient({
      colorStops: ['#87ceeb', '#FFCC66'],
    })};
		-webkit-font-smoothing: antialiased;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button {
		cursor: pointer;
		font-size: 2.4rem;
		padding: 1.2rem;
		user-select: none;
	}

	h1 {
		font-size: 3.2rem;
		color: #ffffff;
	}

	h2 {
		font-size: 2.4rem;
		color: #ffffff;
	}

	h3 {
		font-size: 1.6rem;
		color: #ffffff;
	}

	h4 {
		font-size: 1.4rem;
		color: #ffffff;
	}

	h5 {
		font-size: 1.2rem;
		color: #ffffff;
	}

	strong {
		color: #ffffff;
	}

	span {
		color: #ffffff;
	}

	svg {
		color: #ffffff;
	}
`;
