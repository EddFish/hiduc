import React from 'react';
import styled from 'styled-components';
import {employeePic} from "../../Utils/Constants";
import {employeeName} from "../../Utils/Constants";
import Employees from "./Employees";


const TeamWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    font-family: Oswald, sans-serif;
    letter-spacing: 2px;
    font-weight: bold;

    h1 {
        margin-top: 5vw;
        height: 5vh;
        color: #354358;
        text-align: center;
        text-justify: unset;
    }

    @media(max-width: 1200px){
        margin-top: 10vw;
        flex-direction: column;
    }
`;

const Team = () => {
    const createImagesByArray = () => {
        let val = [];
        for (let i = 0; i < employeePic.length; i++) {
            val.push({"pic": employeePic[i], "text": employeeName[i]});
        }
        return val;
    }
    let values = createImagesByArray().map((v, i) => <Employees key={i} employeePic={v.pic} employeeName={v.text}/>);

    return (
        <TeamWrapper className='row no-gutters'>
            <h1>Our Team</h1>
            {values}
        </TeamWrapper>
    );
};
export default Team;