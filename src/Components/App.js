import React from 'react';
import Main from "./Main";
import Header from "./Header/Header";
import styled, {createGlobalStyle} from 'styled-components';
// import { css } from "@emotion/react";
// import ClipLoader from "react-spinners/ClipLoader";
// import {DotLoader} from "react-spinners";
const GlobalStyle = createGlobalStyle`
      html {
        box-sizing: border-box;
        flex-wrap: wrap;
      }

      body {
        background-color: #f8f8f8;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
`;


const AppWrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');

.react-multiple-carousel__arrow {
    top: 6.5vw;
}

.react-multi-carousel-list {
    height: 40vh;
}

.react-multiple-carousel__arrow--right {
    right: calc(0% + 1px) !important;

}

.react-multiple-carousel__arrow--left {
    left: calc(0% + 1px) !important;
}

.react-multi-carousel-item {
    padding: 0 5vw;
}

@media(max-width: 900px) {
    .react-multi-carousel-item {
        bottom: 3vw;
    }
    .react-multiple-carousel__arrow {
        top: 20vw;
    }
}



//.sweet_loading {
//display: flex;
//align-items: center;
//justify-content: center;
//height: 100vh;
//width: 100vw;
//}
//
//.loaded_hiding  {
//  transition: 0.3s opacity;
//  opacity: 0;
//}
//
//.loaded {
//  display: none;
//}

`;
//
// const override = css`
//   display: flex;
//   margin: 0 auto;
//   border-color: #33beb3;
//   height: 7vh;
// `;

function App() {
    // let [loading, setLoading] = useState(true);
    // let [color, setColor] = useState("#33beb3");
    return (
        <>
            <GlobalStyle/>
            <AppWrapper>
                {/*<div className="sweet_loading">*/}
                {/*    <DotLoader color={color} loading={loading} css={override} size={60} />*/}
                {/*</div>*/}
                <Header/>
                <Main/>
            </AppWrapper>
        </>
    );
}

export default App;
