import styled, { createGlobalStyle } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        text-decoration: none;
        margin: 0;
    }
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        align-items: center;
        background: #fff;
        font-family: "Poppins", sans-serif;
    }
    html {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        word-wrap: break-word;
        font-kerning: normal;
    }
`;

export const Wrapper = styled('div')`
    min-height: 100vh;
    max-width: 1366px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 0 16px;
        main {
            min-height: calc(100vh - 124px);
        }
`;