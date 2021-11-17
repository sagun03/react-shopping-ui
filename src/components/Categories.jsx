import React from 'react'
import styled from 'styled-components';
import { mobile } from "../responsive";
import { categories } from '../utils/data';
import CategoryItem from './CategoryItem';

const Cointainer = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
flex-wrap: wrap;
${mobile({ padding: "0px", flexDirection:"column" })}

`;

const Categories = () => {
    return (
        <Cointainer>
            {categories.map(item => (
                <CategoryItem {...item}/>
            ))}
        </Cointainer>
    )
}

export default Categories;
