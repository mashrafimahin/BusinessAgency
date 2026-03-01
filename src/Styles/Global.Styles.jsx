import { createGlobalStyle } from "styled-components";
// font
import brandFont from "../assets/fonts/brandText.ttf";

const GlobalStyles = createGlobalStyle`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scrollbar-color: var(--accentColor) var(--btnBG);
            scrollbar-width: auto;
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
            --defaultColor: #252525;
            --btnBG: #F7F7F7;
            --accentColor: #0075FF;
            --paraColor: #878b91;
            --extendPara: #364052;
            --iconColor: #7b8183;
            --hoverColor: #E1E8F0;
            --listColor: #364052;
        }

        body {
            background-color: var(--primaryColor);
            overflow-x: hidden;
        }
        ::-webkit-scrollbar-thumb {
          background-color: var(--accentColor);
        }
        ::-webkit-scrollbar-track {
          background-color: var(--btnBG);
        }
`;

export default GlobalStyles;
