import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@300;400;600;700&family=Poppins:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&family=Titillium+Web:wght@300;400;600;700&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        outline: none;
    }

    body {
        font-family: "Roboto", sans-serif;
        background-color: #000;
        color: white;
        overflow-x: hidden;
    }

    button {
        cursor: pointer;
    }
`;
