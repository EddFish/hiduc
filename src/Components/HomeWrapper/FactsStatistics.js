import React, {useState} from 'react';
import styled from 'styled-components';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FactsStatisticsWrapper = styled.div`
    height: 40%;
    font-family: "Heebo",sans-serif;
    font-size: 1.325rem;
    line-height: 1.54;
    color:  #354358;
    text-align: left;

    h1{
        margin-top: 4vw;    
    }

    @media (max-width: 1200px){
        font-size: 2.5vh;

        h1 {
            text-align: center !important;
        }
    } 
`;

const CounterField = styled.div`
    margin: 6vw;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
`;

const Counter = styled.div`
    @media (max-width: 1200px){
    margin: 5vw 0; 
    } 
`;

const CounterBody = styled.div``;

const CounterValue = styled.div`
    font-size: 3vw;   
     
    span {
        margin: 0.3vw;
    }

    @media (max-width: 1200px){
        font-size: 3vh;
    } ;
`;

const CounterPostfix = styled.span``;

const CounterTitle = styled.span``;

const Line = styled.div`
    height: 0.3vh;
    background-color: orange;
`;

const FactsStatistics = () => {

    const [focus, setFocus] = useState(false);
    let start = focus ? 0 : null;

    return (
        <FactsStatisticsWrapper className='container-fluid'>
            <Line/>
            <h1>Facts & Statistics</h1>
            <CounterField className='row'>
                <Counter className='col-6 col-md-3 col-lg-3'>
                    <CounterBody>
                        <CounterValue h1>
                            <CountUp start={start} end={100} delay={0.3} duration={4} redraw={true}>
                                {({countUpRef}) => (
                                    <VisibilitySensor onChange={(isVisible) => {
                                        if (isVisible) {
                                            setFocus(true);
                                        }
                                    }}>
                                        <span ref={countUpRef}/>
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            <CounterPostfix>K</CounterPostfix>
                        </CounterValue>
                        <CounterTitle>Registered users</CounterTitle>
                    </CounterBody>
                </Counter>
                <Counter className='col-6 col-md-3 col-lg-3'>
                    <CounterBody>
                        <CounterValue h1>
                            <CountUp start={start} end={150} delay={0.3} duration={4} redraw={true}>
                                {({countUpRef}) => (
                                    <VisibilitySensor onChange={(isVisible) => {
                                        if (isVisible) {
                                            setFocus(true);
                                        }
                                    }}>
                                        <span ref={countUpRef}/>
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            <CounterPostfix>K</CounterPostfix>
                        </CounterValue>
                        <CounterTitle>Solved exersises</CounterTitle>
                    </CounterBody>
                </Counter>
                <Counter className='col-6 col-md-3 col-lg-3'>
                    <CounterBody>
                        <CounterValue h1>
                            <CountUp start={start} end={100} delay={0.3} duration={4} redraw={true}>
                                {({countUpRef}) => (
                                    <VisibilitySensor onChange={(isVisible) => {
                                        if (isVisible) {
                                            setFocus(true);
                                        }
                                    }}>
                                        <span ref={countUpRef}/>
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            <CounterPostfix>%</CounterPostfix>
                        </CounterValue>
                        <CounterTitle>Positive reviews</CounterTitle>
                    </CounterBody>
                </Counter>
                <Counter className='col-6 col-md-3 col-lg-3'>
                    <CounterBody>
                        <CounterValue h1>
                            <span>15</span>
                            <CounterPostfix/>
                        </CounterValue>
                        <CounterTitle>Team members</CounterTitle>
                    </CounterBody>
                </Counter>
            </CounterField>
        </FactsStatisticsWrapper>
    );
};

export default FactsStatistics;