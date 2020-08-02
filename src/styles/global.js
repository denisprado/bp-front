import { createGlobalStyle } from "styled-components";
import { secondary } from '../constants/theme'
import { lighten } from 'polished'
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing:border-box;
    }

    body{
        background: ${ lighten(0.02, secondary)};
        -webkit-font-smoothing: antialiased;
    }

    html{
        font: 62.5% sans-serif;
        font-family: ff-meta-web-pro, sans-serif;
    }

    #root{
        margin:0 auto;
    }
`;
