import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@300;400;600;700&family=Poppins:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&family=Titillium+Web:wght@300;400;600;700&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        outline: none;
        border: none;
    }

    html {
        width: 100%;
        overflow-x: hidden;
    }

    body {
        font-family: "Roboto", sans-serif;
        background-color: #000;
        color: white;
        overflow-x: hidden;
        -webkit-user-select: none;
        -moz-user-select: none; 
        -ms-user-select: none; 
        user-select: none; 
    }

    button {
        cursor: pointer;
    }
`;
