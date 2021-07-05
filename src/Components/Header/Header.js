import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Burger from "./Burger";


const Nav = styled.nav`
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 10vw;
    display: flex;
    font-size: 2.3vw;
    justify-content: space-between;

    .head_active {
        @media(min-width: 1100px){
        margin-top: 0.8vw;
        height: 7vw;
        width: 100%;
        color: white;
        background-color:  #33beb3;
        animation: slideHeader 3s forwards;
        -webkit-animation: slideHeader 3s forwards;
        -moz-animation: slideHeader 3s forwards;
        -o-animation: slideHeader 3s forwards;
        
            @keyframes slideHeader {
                0% {     
                  opacity: 0;               
                }
                100% {
                opacity: 1;           
            }
        }
    }
           
        @media (max-width: 1200px) {
            font-size: 2.5vw;
        }
    }
`;


    const Header = (props) => {
        const [scroll, setScroll] = useState(false);

        useEffect(() => {
            window.addEventListener("scroll", () => {
                setScroll(window.scrollY > 50);
            });
        }, []);
        let scroll_flag = scroll ? ' head_active' : '';

        return (
        <Nav>
            <div className={scroll_flag}>
            <Burger scroll={scroll} burgerMenu = {props.burgerMenu} />
            </div>
        </Nav>
    );
};

export default Header;