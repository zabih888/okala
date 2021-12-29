import { createGlobalStyle } from "styled-components";
import { setColor } from "../../styles";

const Globals = createGlobalStyle`

*, ::before, ::after{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}
body{
    font-size: 100%;
    color: ${setColor.Black};
}
h1{
    font-size: 3em;line-height:1.2;margin-bottom: .5em; 
}
h2{
    font-size: 2em;margin-bottom: .75em;
}
h3{
    font-size: 1.5em;line-height:1;margin-bottom: 1em;
}
h4{
    font-size: 1.5em;line-height:1;margin-bottom: 1.25em;font-weight: bold;
}
h5{
    font-size: 1em;margin-bottom: 1.5em;font-weight: bold;
}
h6{
    font-size: 1em;font-weight: bold;
}
p{
    line-height: 1.5; margin: 0 0 1.5rem 0;
}

li{
    list-style: none;
}
a{
    text-decoration: none; 
    color: ${setColor.Black};
}
button{
    cursor: pointer;
}
`;
export default Globals;
