import React from 'react';
import styled from 'styled-components';
import albert from "../../Images/einstein11.jpg";
import Slider from "./Slider";
import ContentOfTheProgram from "./ContentOfTheProgram";


const AboutWrapper = styled.div` 
    width: 100vw; 
    @media(max-width: 1200px) {
    margin-top: 25vw;
    }
`;

const ImagEinshtein = styled.div`
    @media(max-width: 1100px){
    display: flex;
    align-items: center;
    justify-content: center;
    }
`;

const AboutMission =styled.div`
    h1 {
        color: #354358;
    }

    h2 {
        padding: 1vw;
        color: #33beb3;
    }

    h3 { 
        font-weight: bold;
        color: #354358;
    }

    h1,h2,h3 {
        letter-spacing: 1px;
        text-align: center;
        font-family: Oswald, sans-serif;
    }

    p {
        padding: 0 3vw;
        text-align: justify;
    
            @media(max-width: 1100px) {
            padding: 1vw 6vw;
        }
    }

    img {
        margin-top: 2vw;;
        width: 17rem;
        height: 18rem;
        };

    @media(max-width: 1000px) {
      h3 {
            margin: 10vw 0 5vw 0;
            }
    }

    @media(min-width: 800px){
        margin: 10vw;
        }
`;

const Slide = styled.div`
margin: -7vw 1vw 5vw 2vw;


@media(max-width: 900px) {
margin-top: 7vw;
}
`;
const About = () => {
    return (
        <AboutWrapper>
            <AboutMission className='row no-gutters'>
                <div className='col-sm-12 col-md-12 col-lg-9'>
                    <h1>About hiDucation Mission</h1>
                    <h2>Your best teacher is YOU!</h2>
                    <p> hiDucation is a new project aimed to improve the higher education system,
                        both online and offline by offering a full coverage of the most popular subjects
                        in a form of mobile and web applications that allow students to learn serious materials
                        in an offline guided way with gaming elements. The student can choose what to learn, when
                        and at the best possible pace for him/her at any place using only hiMath platform, no papers
                        or videos required, just a smart phone</p>
                </div>
                <ImagEinshtein className='col-sm-12 col-md-12 col-lg-3'>
                    <img src={albert} alt='albert'/>
                </ImagEinshtein>
                <h3>Success Stories</h3>
            </AboutMission>
            <Slide>
                <Slider/>
            </Slide>
            <ContentOfTheProgram/>
        </AboutWrapper>
    );
};

export default About;