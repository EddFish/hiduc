import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {NavLink, useLocation} from "react-router-dom";
import {aboutUsPage, contactPage, homePage, productsPage, teamPage} from "../../Utils/Constants";
import SignIn from "../SignIn/SignIn";

const UL = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: Oswald, sans-serif;
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 1.8vw;
    flex-flow: row nowrap;

    
    a {
        margin-left: 2.5vw;
        height: 7vh;
        justify-content: space-around;
        color: ${({colornav}) => colornav};
        text-decoration: none;
        Letter-spacing: 1px;
        border: 2px solid transparent;
        white-space: nowrap;

        &:hover {
            -webkit-transform: scale(1.2);
            -ms-transform: scale(1.2);
            transform: scale(1.2);
        }

        &:active {
            color: #33beb3; 
        }   
    }

        @media(max-width: 1100px) {
            flex-flow: column nowrap;
            background-color: #f8f8f8;
            text-align: justify;
            transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};   
            top: 0;
            right: 0;
            height: 100vh;
            width: 100vw;
            padding-top: 3.5rem;
            transition: transform 0.3s ease-in-out;
    
            li {
                color: #33beb3;
                font-size: 2rem;
            } 
        }
    }
`;

const NavigationBlock = styled.div`
    margin-top: 2vw;

    @media(min-width: 1100px){
        display: flex;
        margin-left: 48vw;
        flex-direction:row;
        align-items: center;
        justify-content: space-around;
    }
`;

const RightNav = (props) => {
    const [colorNav, setColorNav] = useState('#33beb3');
    let location = useLocation();
    const [isVisible, setVisibility] = React.useState(false);
    let setFromSignIn = () => {
        setVisibility(false);
    }


    useEffect(() => {
        if (location.pathname === '/' || location.pathname === '/home') {
            setColorNav('white');
        } else {
            if (props.scroll === true) {
                setColorNav('white');
            } else {
                setColorNav('#33beb3');
            }
        }
    }, [location, props.scroll]);

    return (
        <div>
            {isVisible ? <SignIn setFromSignIn={setFromSignIn}/> : ''}
            <UL colornav={colorNav} open={props.open}>
                <NavigationBlock>
                    <NavLink className='colorNav' to={`/${homePage}`}>
                        <li>home</li>
                    </NavLink>
                    <NavLink className='colorNav' to={`/${productsPage}`}>
                        <li>products</li>
                    </NavLink>
                    <NavLink className='colorNav' to={`/${aboutUsPage}`}>
                        <li>about us</li>
                    </NavLink>
                    <NavLink className='colorNav' to={`/${teamPage}`}>
                        <li>team</li>
                    </NavLink>
                    <NavLink className='colorNav' to={`/${contactPage}`}>
                        <li>contact</li>
                    </NavLink>
                    <NavLink className='colorNav' to={`#`}>
                        <li onClick={() => setVisibility(true)}>sign in</li>
                    </NavLink>
                </NavigationBlock>
            </UL>
        </div>
    );
}

export default RightNav;