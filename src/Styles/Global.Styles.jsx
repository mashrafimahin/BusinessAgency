import { createGlobalStyle } from "styled-components";
// font
import brandFont from "../assets/fonts/brandText.ttf";

const GlobalStyles = createGlobalStyle`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
            scroll-snap-type: mandatory;
        }

        @font-face {
            font-family: brand;
            src: url(${brandFont});
        }

        :root {
            --primaryColor: #051229;;
            --textColor: #fff;
            --defaultColor: #111;
            --btnBG: #F7F7F7;
            --accentColor: #0075FF;
            --paraColor: #a9b0b8;
        }

        body {
            background-color: var(--primaryColor);
            overflow-x: hidden;
        }
`;

export default GlobalStyles;
