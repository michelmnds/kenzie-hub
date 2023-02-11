import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    font-family: 'Inter', sans-serif;

    //Colors
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343B41;
    --color-grey-1: #868E96;
    --color-grey-0: #F8F9FA;

    --color-success: #3FE864;
    --color-negative: #E83F5B;


    //Typography 
    --title-1: 16px;
    --title-2: 14px;
    --title-3: 12px;
    --title-headline: 10px;

    --title-bold: bold;
    --tile-regular: normal;


    //Inputs 
    --margin-default: 4px;
`;

export default GlobalStyles;
