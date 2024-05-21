import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;
    --grey-100: #F8FAFC;
    --grey-200: #E2E8F0;
    --grey-500: #94A3B8;
    --grey-600: #64748B;
    --grey-700: #475569;
    --blue: #0075FF;
  }

  *, *::before, *::after { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0;   
    font-family: inherit;
  }

  body {
    background-color: var(--grey-200);
    color: var(--grey-700);
    min-height: 100vh;
    display: grid;
    place-content: center;
    font-family: "Rubik", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }

  button {
    cursor: pointer;
  }

  img{  
    display: block;  
    max-width: 100%;  
    object-fit: cover; 
  }
`;

export default GlobalStyle;
