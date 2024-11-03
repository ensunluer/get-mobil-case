import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

    html {
        height: 100%;
        -webkit-overflow-scrolling: touch;
    }

    body,
    #root,
    #root__layout {
        font-family: "DM Sans", sans-serif;
        display: flex;
        margin: 0;
        flex: 1 1 auto;
        min-height: 100%;
        flex-direction: column;
    }

    img {
        max-width: 100%;
        vertical-align: middle;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    input[type='number'] {
        -moz-appearance: textfield;
        appearance: none;
    }

    input[type='number']::-webkit-outer-spin-button {
        margin: 0;
        -webkit-appearance: none;
    }

    input[type='number']::-webkit-inner-spin-button {
        margin: 0;
        -webkit-appearance: none;
    }

`;

export default GlobalStyle;
