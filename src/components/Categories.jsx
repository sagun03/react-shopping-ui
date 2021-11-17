import React from 'react'
import styled from 'styled-components';
import { categories } from '../utils/data';
import CategoryItem from './CategoryItem';

const Cointainer = styled.div`
display: flex;
padding: 20px;
justify-content: center;
flex-wrap: wrap;
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
