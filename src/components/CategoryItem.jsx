import React from 'react'
import styled from 'styled-components'

const Cointainer = styled.div`
margin: 2px;
padding: 5px;
width: 32%;
height: 70vh;
position: relative;
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
opacity: 0.9;
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
