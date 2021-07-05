import React from 'react';
import styled from 'styled-components';
import {cardsExercises} from "../../Utils/Constants";
import CardsWithExercises from "./CardsWithExercises";

const ProductsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 13vw 0 0 0;
    width: 100vw;
    height: 100%;
    text-align: center;
    font-family: Oswald, sans-serif;
    font-size: 3.5vh;
    letter-spacing: 2px;

    h1 {
        font-size: 6vh;
    }

    @media(max-width: 1200px) {
        margin-top: 15vh;
    }
`;

const Menu = styled.div`
    @media(min-width: 1200px){
        width: 45%;
    }
`;

const CategoryName = styled.div`  
    margin: 2vw 0;
    &:hover {
        color: #33beb3;
        font-weight: bold;
    }   
`;

const CardsWithEx = styled.div`
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Products = () => {

    let values = cardsExercises.map((v, i) => <CardsWithExercises key={i} cardId={v.id}
                                                                  cardName={v.name} cardTitle={v.title}
                                                                  cardCategory={v.category}
                                                                  cardDescription={v.description}/>);

    return (
        <ProductsWrapper className='row no-gutters'>
            <h1>Our Products</h1>
            <Menu className='row no-gutters'>
                <CategoryName className='col-12 col-md-4 col-lg-4'>Math</CategoryName>
                <CategoryName className='col-12 col-md-4 col-lg-4'>Programming</CategoryName>
                <CategoryName className='col-12 col-md-4 col-lg-4'>Physics</CategoryName>
            </Menu>
            <CardsWithEx className='row no-gutters'>
                {values}
            </CardsWithEx>
        </ProductsWrapper>
    );
};

export default Products;