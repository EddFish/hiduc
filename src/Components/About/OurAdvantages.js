import React  from 'react';
import styled from 'styled-components';
import pic1 from '../../Images/Advantages1.jpeg';
import pic2 from '../../Images/Advantages2.jpeg';




const OurAdvantagesWrapper = styled.div`
    text-align: center;
    font-family: Oswald, sans-serif;
    width: 100vw;
    height: 130%;  
    padding: 20px;
    font-size: 2.5vh;
    
    h2 {
      font-size: 3vh;
    }
    
    p {
      text-align: justify;
    }
    
    img {
      width: 10vw;
      height: 10vw;
    }
    
    `;

const OneSection = styled.div`
    padding: 1vw;
    
    @keyframes SlideRight {
        0% {
        transform: translateX(100%);
        -webkit-transform: translateX(100%);
        -moz-transform: translateX(100%);
        -ms-transform: translateX(100%);
        -o-transform: translateX(100%);
    
    }
    50%,
    80%,
    90%{
        border: 2px solid #ffa100;
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
    animation: SlideRight 3s forwards;
    -webkit-animation: SlideRight 3s forwards;
    -moz-animation: SlideRight 3s forwards;
    -o-animation: SlideRight 3s forwards;
    transition: ease-out;
    -webkit-transition:ease-out;
    -moz-transition:ease-out;
    -o-transition:ease-out;
    opacity: 0;
    `;

const TwoSection = styled.div`
    @keyframes run {
    0% {
        left: 0;
        transform:translateX(-100%);
        -webkit-transform: translateX(-100%);
        -moz-transform: translateX(-100%);
        -ms-transform: translateX(-100%);
        -o-transform: translateX(-100%);
    }
    }
    100% {
      left: 100%;
    }
    
    animation: run linear 3s forwards;
    -webkit-animation: run linear 3s forwards;
    -moz-animation: run linear 3s forwards;
    -o-animation: run linear 3s forwards;
    `;



const OurPartners = styled.div`
  height: 30vh;
`

const OurAdvantages = () => {
    return (
        <OurAdvantagesWrapper>
            <h1>By choosing us you get</h1>
            <OneSection className="  row no-gutters ">
                <div className='col-sm-12 col-md-2 col-lg-2'><img src={pic1} alt='pic'/></div>
                <div className='col-sm-12 col-md-10 col-lg-10'>
                    <div><h2>The best experts in the field of mathematics are involved in the design of the
                        exercises</h2></div>
                    <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam architecto aut
                        consectetur cum delectus, dolore dolorum ducimus eius eveniet explicabo ipsum, maxime modi
                        molestiae
                        molestias perspiciatis placeat, quam quasi quibusdam reiciendis repudiandae sapiente tempora
                        tempore ut
                        tenetur ullam! Ad architecto deserunt inventore itaque?</p></div>
                </div>
            </OneSection>
            <TwoSection className="twoSection row no-gutters">
                <div className='col-sm-12 col-md-10 col-lg-10'>
                    <div><h2>The best experts in the field of mathematics are involved in the design of the
                        exercises</h2></div>
                    <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias aperiam
                        assumenda
                        beatae culpa cumque, et facilis hic id incidunt ipsa ipsam ipsum labore laboriosam magnam, magni
                        maxime molestias nam nisi odit perferendis quae quia quibusdam quod recusandae repellendus
                        reprehenderit
                        sed similique sunt, tempora totam unde veniam veritatis vitae! Accusamus aliquam aut deleniti
                        doloremque
                        dolores, exercitationem iusto laboriosam, magni odit officia provident qui quisquam quo
                        velit.</p></div>
                </div>
                <div className='col-sm-12 col-md-2 col-lg-2'><img src={pic1} alt='pic'/></div>
            </TwoSection>
            <OneSection className=" row no-gutters">
                <div className='col-sm-12 col-md-2 col-lg-2'><img src={pic2} alt='pic'/></div>
                <div className='col-sm-12 col-md-10 col-lg-10'>
                    <div><h2>The best experts in the field of mathematics are involved in the design of the
                        exercises</h2></div>
                    <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci alias aliquam aperiam
                        at autem consequuntur debitis deleniti deserunt dignissimos doloremque doloribus eveniet fugit
                        hic
                        illum magnam molestias natus neque nesciunt odit optio, perspiciatis praesentium quam
                        repudiandae
                        unde voluptas voluptates voluptatibus? Expedita iste iure minus? Architecto et laborum modi
                        tenetur at.
                        Asperiores consequuntur, dolore doloremque dolorum ea laboriosam laudantium magnam numquam, odio
                        provident
                        quidem voluptatum.</p></div>
                </div>
            </OneSection>
            <OurPartners>
                <h1>Our Partners</h1>
                <div>
                    <p>These companies are our important partners whose efforts support our goals.</p>
                </div>
            </OurPartners>
        </OurAdvantagesWrapper>
    );
};

export default OurAdvantages;