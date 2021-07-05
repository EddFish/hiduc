import React from 'react';
import styled from 'styled-components';
import v from '../../Images/AdobeStock_330257586_Video_HD_Preview.mov';
import {pathOfPromoVideo} from "../../Utils/Constants";
import FactsStatistics from "./FactsStatistics";
import About from "../About/About";
import Team from "../Team/Team";

const HomeAll= styled.div`
    margin: 0;
    hyphens: manual;
`;


const HomeWrapper = styled.div`
    height: 100vh;
    hyphens: manual;
`;

const Video = styled.div`
    object-fit: cover;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    position: absolute;
    overflow: hidden;
    direction: ltr;
`;

const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width:100vw;
    height:100vh;
    justify-content: center;
    background-color: rgba(0,0,0,0.2);
    align-items:center;  
    color: white;         
    font-family: Oswald, sans-serif;
        letter-spacing: 3px;
        font-weight: bold;
`;

const LogoText = styled.h1`
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 1vw;
    font-size: 4vw;
    color: white;
    font-family: 'Cabin', arial, sans-serif;    
    font-weight: bold;
      
    @media (max-width: 1200px) {
        font-size: 2em;
    }
`;

const Slogan = styled.p`
    margin-top: 0;
    font-size: 2vw; 
     
    @media (max-width: 1200px) {
        font-size: 1em;
    }
`;

const IconVideo = styled.i`
    margin-top: 2vw;
    font-size: 4vw;
    color: white;
    
    @media (max-width: 1200px) {
        margin-top: 10vw;
        font-size: 4em;
    }
    
    @media (max-width: 600px) {
        font-size: 3em;
        margin-top: 30vw;
    }
`;

const TextVideo = styled.p`
    font-size: 1vw;
    text-align: center;
    
    @media (max-width: 1200px) {
        font-size: 0.8em;
        white-space: nowrap;
    }
`;

const VideoArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2vw;
    height: 10vw;
    width: 15vw;
    border-top: 2px solid white;
`;

const VideoLink = styled.a`
    padding: 2vw;
    text-decoration: none;
`;

const Home = () => {
    return (
        <HomeAll>
            <HomeWrapper>
                <Video>
                    <video autoPlay muted playsInline loop>
                        <source src={v} type="video/mp4"/>
                    </video>
                </Video>
                <Content>
                    <LogoText>hiDucation</LogoText>
                    <Slogan>Revolutionize eLearning</Slogan>
                    <VideoArea>
                        <VideoLink href={pathOfPromoVideo} target="_blank"><IconVideo
                            className="far fa-play-circle"/></VideoLink>
                        <TextVideo>(Promotional video here)</TextVideo>
                    </VideoArea>
                </Content>
            </HomeWrapper>
            <FactsStatistics/>
            <About/>
            <Team/>
        </HomeAll>
    );
};

export default Home;