import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";

const Cointainer = styled.div`
  flex: 1;
  margin: 3px;
  min-width: 400px;
  height: 70vh;
  position: relative;
  transition: all .3s ease-in-out;

  &:hover {
      box-shadow: rgba(0, 0, 0, 0.22) 2px 19px 43px;
    transform: translate3d(0px, -10px, 0px);
  }
  `;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
`;

const Title = styled.h1`
color: white;
margin-bottom: 20px;
`;

const Button = styled.button`
border: none;
cursor: pointer;
color: gray;
font-weight: 600;
padding: 10px;
background-color: white
`;

const CategoryItem = ({img, title}) => {
    return (
        <Cointainer>
          <Image src={img} />
          <Info>
            <Title>{title}</Title> 
            <Button>SHOP NOW</Button> 
        </Info>  
        </Cointainer>
    )
}

export default CategoryItem
