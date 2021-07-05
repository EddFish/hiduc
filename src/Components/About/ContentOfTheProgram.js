import React from 'react';
import styled from 'styled-components';
import theoryPic from '../../Images/Theory_section.jpg' ;
import exercisePic from '../../Images/Exercise_section.jpg';
import examPic from '../../Images/Exam_section.jpg';


const ContentOfTheProgramWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 50%;
    font-family: Oswald, sans-serif;
    letter-spacing: 2px;
    text-align: center;
    padding: 16px;

    h1 {
        padding: 5vw;
        font-size: 3vh;

        @media(max-width: 768px) {
          font-size: 2.5vh;
        } 
}

`;

const Leaning = styled.ul`
`;


const SectionTask = styled.div` 
    padding: 4vw;
    box-shadow: 20px 20px 20px grey;

    p {
      text-align: justify;
    }

    img {
        margin: 1vw;
        width: 20vw;
        height: 20vw;
    }

    .pic {
        width: 22vw;
    }

    @media(max-width: 1050px) {
      box-shadow:none;
    }

`;


const ContentOfTheProgram = () => {
    return (
        <ContentOfTheProgramWrapper>
            <h1>hiDucation offers a set of applications that teach students step by step higher math materials,
                it is divided into 3 crucial steps,, each of them is designed in a form of gaming actions using moving
                elements,
                puzzle solutions, dragging and dropping, etc.</h1>
            <Leaning className='row no-gutters'>
                <SectionTask className='col-sm-12 col-md-12 col-lg-4'>
                    <img src={theoryPic} alt='pic'/>
                    <h2>Theory section</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet dignissimos,
                        dolorem ducimus itaque maxime possimus quidem vitae. Adipisci, alias cumque deserunt.</p>
                </SectionTask>
                <SectionTask className='col-sm-12 col-md-12 col-lg-4'>
                    <img className='pic' src={exercisePic} alt='pic'/>
                    <h2>Exercise section</h2>
                    <p> Four levels of tasks with different difficultiesb. Each level contains 3 – 5 tasks</p>
                </SectionTask>
                <SectionTask className='col-sm-12 col-md-12 col-lg-4'>
                    <img src={examPic} alt='pic'/>
                    <h2>Exam section</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet dignissimos,
                        dolorem ducimus itaque maxime possimus quidem vitae. Adipisci, alias cumque deserunt .</p>
                </SectionTask>
            </Leaning>
        </ContentOfTheProgramWrapper>
    );
};

export default ContentOfTheProgram;