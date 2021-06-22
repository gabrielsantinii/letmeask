import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Popping', sans-serif;
}

body {
    background-color: #F9F9F9;
    color: #29292e;
}

:root {
        --background: #F9F9F9;
        --text: #11263C;
        --secondary-text: rgba(136, 136, 157, 1);
        --white: #FFF;
        --white-gray: #FAF9F9;
        --placeholder: #8e8e8e;

        --gray-50: #F3F3F3;
        --gray-75: #E9E9E9;
        --gray-100: #E0E0E0;
        --gray-150: #DADADA;
        --gray-200: #AFB2B1;
        --gray-500: #808080;
        --gray-800: #494D4B;
    
        --green-500: #04D361;
        
        --purple-200: rgba(116, 89, 217, 0.7);
        --purple-300: #9F75FF;
        --purple-400: #9164FA; 
        --purple-500: #835afd;
        --purple-800: #6F48C9;
        --purple-opacity: rgba(116, 89, 217, 0.2);

        --red-500: rgba(234, 67, 53, 1);
        --pink-500: rgba(229, 89, 249, 1);
        
    }

body, input, button, textarea, p, a {
    font: 400 16px 'Poppins', sans-serif;
}

h1, strong {
    font-family: 'Poppins', sans-serif;
}
`;
