import React, {useState} from 'react';
import styled from 'styled-components';


const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 7000;

   
        
    @media(max-width: 1100px){
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    
    }
    
    
    div{
    width: 2rem;
    height: 0.25rem;
    background-color: #33beb3;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    
    &:nth-child(1) {
        transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
        transform: ${({open}) => open ? 'translateX(100)' : 'translateX(0)'};
        opacity: ${({open}) => open ? 0 : 2};
    }
    
    &:nth-child(3) {
        transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
    }
`;


const BurgerMenu = (props) => {
    const [open, setOpen] = useState(props.burgerMenu.openBurgerMenu);
    return (
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div/>
                <div/>
                <div/>
            </StyledBurger>
    );
};

export default BurgerMenu;