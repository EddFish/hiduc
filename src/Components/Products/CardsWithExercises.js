import React from 'react';
import styled from "styled-components";
import mathPic from "../../Images/Math.jpeg";
import physicsPic from "../../Images/Physics.jpeg"
import programmingPic from "../../Images/Programming.jpeg"

const CardsWithExercisesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vh;
    height: 65vh;
    border: 1px solid black;
    margin: 3vw;
    border-radius: 5%;
    box-shadow: 20px 20px 20px grey; 
    font-size: 2vh;
    
    &:hover {
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
    }
`;

const TitlCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 0.5vw 1.5vw;
        
    img {
    height: 15vh;
    width: 15vh;
    padding: 0.5vw;
    border: 1.5px solid orange;
    border-radius: 50%;
    margin: 2vh;
    }
`;

const CardTitle = styled.div`
    font-weight: bold;
    margin-left: 3vh;
    
    h2 {
      font-size: 2.2vh;
    }  
`;

const CardDescription = styled.div`
  height: 30vh;
  width: 40vh;
  text-align: justify;
`;

const ButtonPurchase =styled.button`
    padding: 0.7vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #33beb3;
    text-align: center;
    width: 25vh;
    height: 8vh;
    border-radius: 7.2em;
    font-size: 2.5vh;
    letter-spacing: 2px;
    font-weight: bold;
    border: none;
    color: white;

    &:hover,
    &:active,
    &:focus{
        background-color: #ffa100;
        outline: none !important;
    }
`;

const CardsWithExercises = (props) => {
    let picCategory = '';
    if(props.cardCategory === 'Math') {
        picCategory = mathPic;
    }
    if(props.cardCategory === 'Physics') {
        picCategory = physicsPic;
    }
    if(props.cardCategory === 'Programming') {
        picCategory = programmingPic;
    }

    return (
        <CardsWithExercisesWrapper className = 'col-12 col-md-4 col-lg-4'>
            <TitlCard className = 'col-12 col-md-12 col-lg-12'>
                <div className = 'col-3 col-md-3 col-lg-3'><img src = {picCategory} alt='category'/></div>
                <CardTitle className = 'col-9 col-md-9 col-lg-9' ><h2 >{props.cardTitle}</h2></CardTitle>
            </TitlCard>
            <CardDescription className = 'col-12 col-md-12 col-lg-12'>
                <p>{props.cardDescription}</p>
            </CardDescription>
            <ButtonPurchase>Purchase</ButtonPurchase>
        </CardsWithExercisesWrapper>
    );
};

export default CardsWithExercises;