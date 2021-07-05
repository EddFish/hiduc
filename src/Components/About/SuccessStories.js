import React from 'react';
import styled from 'styled-components';

const SuccessStoriesSlide = styled.div`
    background-color: rgba(0,0,0, 0.1);
    width: 20vw;
    height: 30vh;
    border-radius: 5%;
    padding: 30px;
    box-shadow: 20px 20px 20px grey;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: justify;
    color: #354358;
    margin-bottom: 2vw;
    
    &:hover {
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
    }

    
    img {
        margin: 0.5vw;
        border-radius: 50%;
        height: 7vw;
        width: 7vw;
    }

    h1 {
        font-size: 2vh;
        font-weight: bold;
        text-align: center;
    }

    p {
        text-align: justify-all;
        font-size: 2vh;
    };

    @media(max-width: 1200px) {
         width: 18rem;
    }

    @media(max-width: 450px) {
        width: 20rem;
    }

    @media(max-width: 320px) {
        width: 17rem;
    }

    @media(max-width: 290px) {
        width: 15rem;
    }
`;

const SuccessStories = (props) => {
    return (
        <SuccessStoriesSlide>
            <div>
                <div>
                <div><img src={props.storyPic} alt='story'/></div>
                <div><h1>{props.storyTellerName}</h1></div>
                </div>
                <div>
                <p>{props.storyText}</p>
                </div>
            </div>
        </SuccessStoriesSlide>
    );
};

export default SuccessStories;