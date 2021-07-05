import React, {useState} from 'react';
import styled from "styled-components";

const SignInWrapper = styled.div`
    position: absolute;
    padding: 15vh 2.2vw 0 2.2vw;
    border-left: 2px solid #33beb3;
    background-color: #f8f8f8;
    height: 100vh;
    width: 42vh;
    font-family: Oswald, sans-serif;
    font-weight: bold;
    right: 0;
    z-index: 6000;
    color: #354358;
    letter-spacing: 2px;
    text-align: center; 
           
    animation:${({openBlock}) => openBlock};
    -webkit-animation:${({openBlock}) => openBlock};
    -moz-animation:${({openBlock}) => openBlock};
    -o-animation: ${({openBlock}) => openBlock};
    transition: ease-out;
    -webkit-transition:ease-out;
    -moz-transition:ease-out;
    -o-transition:ease-out;
    opacity: 0;
       
    @keyframes slideRight {
        0% {
            transform: translateX(100%);
            -webkit-transform: translateX(100%);
            -moz-transform: translateX(100%);
            -ms-transform: translateX(100%);
            -o-transform: translateX(100%);
        }
        100% {
            transform: translateX(0%);
            -webkit-transform: translateX(0%);
            -moz-transform: translateX(0%);
            -ms-transform: translateX(0%);
            -o-transform: translateX(0%);
            opacity: 1;
        }
    }
    
    @keyframes slideLeft {
        100% {
            transform: translateX(100%);
            -webkit-transform: translateX(100%);
            -moz-transform: translateX(100%);
            -ms-transform: translateX(100%);
            -o-transform: translateX(100%);
        }
        0% {
            transform: translateX(0%);
            -webkit-transform: translateX(0%);
            -moz-transform: translateX(0%);
            -ms-transform: translateX(0%);
            -o-transform: translateX(0%);
            opacity: 1;
        }
    }
    
    
    legend {
        font-size: 4vh;
        font-weight: bold;
    }
    
    label {
        font-size: 2.5vh;
        font-weight: bold;
        padding-bottom: 1rem;
        
    }
    `;

const StyledBurger = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 3vh;
    right: 3vh;
    z-index: 7000;
    
    div{
        width: 2rem;
        height: 0.25rem;
        background-color: ${({open}) => open ? '#33beb3': '#33beb3'};
        border-radius: 10px;
        transform-origin: 5px;
    
        &:nth-child(1) {
            transform: rotate(45deg);
        }
           
        &:nth-child(2) {
            transform:rotate(-45deg)};
        }
    }
`;

const ButtonSocialNetworks = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 2vh;
    width: 100%;
    height: 5.5vh;
    font-size: 2.1vh;
    font-weight: bold;
    letter-spacing: 1.5px;
    color: #33beb3;
    border: 2px solid #33beb3;
    background-color: white;
      
    i {
        text-align: center;
        margin-left: 1vh;
        font-size: 3vh;
    }

    #appleIcon {
        margin-left: -0.5vh;
        font-size: 4vh;
    }

    &:hover {
        color: white;
        background-color: #33beb3;
    }
`;

const ButtonSignIn = styled(ButtonSocialNetworks)`
        color: white;
        background-color: #33beb3;
        
        &:hover {
        color: #33beb3;
        background-color: white;
        }
    `;

const SignIn = (props) => {

    console.log(props.setFromSignIn);
    const [open, setOpen] = useState(false);
    let openBlock = (open || props.setFromSignIn === true) ?  ' slideLeft 2s forwards' : ' slideRight 1s forwards';
    const handleOnClose = () => {
        setOpen(false);
        props.setFromSignIn();
    }

    return (
        <SignInWrapper openBlock = {openBlock} >
            <StyledBurger open={open} onClick={() => handleOnClose()}>
                <div/>
                <div/>
            </StyledBurger>
            <form title='SignIn'>
                <fieldset>
                    <legend>Sign In</legend>
                    <div className="form-group">
                        <label>Your email</label>
                        <input className="form-control w-100" name='email' type='email' placeholder='Email'/>
                    </div>
                    <div className="form-group">
                        <label>Your password</label>
                        <input className="form-control w-100" name='password' formMethod='post'
                               type='password' placeholder='Password'/>
                    </div>
                    <ButtonSignIn>Sign In</ButtonSignIn>
                    <ButtonSocialNetworks><i className="fab fa-google "/>Continue with Google</ButtonSocialNetworks>
                    <ButtonSocialNetworks><i className="fab fa-facebook-square "/>Continue with
                        FaceBook</ButtonSocialNetworks>
                    <ButtonSocialNetworks><i id='appleIcon' className="fab fa-apple"/>Continue with
                        Apple</ButtonSocialNetworks>
                </fieldset>
            </form>
        </SignInWrapper>
    );
};

export default SignIn;