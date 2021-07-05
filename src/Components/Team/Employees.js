import React from 'react';
import styled from "styled-components";

const EmployeeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Oswald, sans-serif;
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 3vh;
    text-align: center;
    color:#039be5;
`;

const EmployeePhoto = styled.div`
    img{
    margin-bottom: 2vw;
    width: 19vw;
    height: 25vw;
    border-radius: 5%;
    box-shadow: 20px 20px 20px grey;
    
        @media(max-width: 450px){
            height: 40vw;
            width: 35vw;
        }
    }
`;

const EmployeeDescription = styled.div`
    color: #354358;
    font-weight: bold;
`;

const Employees = (props) => {
    return (
        <EmployeeWrapper className='col-sm-12 col-md-4 col-lg-4'>
            <EmployeePhoto><img src={props.employeePic} alt='employee'/></EmployeePhoto>
            <EmployeeDescription>{props.employeeName}</EmployeeDescription>
        </EmployeeWrapper>
    );
};

export default Employees;