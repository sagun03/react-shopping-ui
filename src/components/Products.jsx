import styled from "styled-components";
import React from 'react'
import { popularProducts } from '../utils/data';
import Product from './Product';

const Container = styled.div`
display: flex;
padding: 20px;
flex-wrap: wrap;
justify-content: space-between;
`;

const Products = () => {
    return (
        <Container>
            {  popularProducts.map((item) => 
            <Product {...item} key={item.id }/>
            )}
        </Container>
    )
}

export default Products;
