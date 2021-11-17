import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components"
import React, { useState } from 'react';
import { SlidesItems } from '../utils/data';
import { mobile } from "../responsive";


const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
${mobile({ display: "none" })}

`;

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
corsor: pointer;
opacity: 0.5;
z-index: 2;
`;

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props => props.slideIndex * -100}vw)
`;

const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #${props => props.bg}
`;

const ImgContainer = styled.div`
flex: 1;
height: 100%;
`;

const Image = styled.img`
height: #${props => props.height}
`;

const InfoContainer = styled.div`
flex:1;
padding: 50px;
`;

const Title = styled.h1`
font-size: 70px;
`;

const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px
`;

const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
    if (direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
    }
    console.log('slideIndex', slideIndex)
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick('left')}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex} >
                {SlidesItems.map(({bg, img, title, desc, height}) => (
                    <Slide bg={bg}>
                    <ImgContainer>
                        <Image src={img} height={height}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>
                           {title}
                        </Title>
                        <Desc>
                            {desc}
                        </Desc>
                        <Button>
                            SHOP NOW
                        </Button>
                    </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick('right')}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
