import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = (): React.ReactElement => {
  return (
    <Container>
      {popularProducts.map((prod: { id: number; img: string }) => (
        <Product prod={prod} key={prod.id} />
      ))}
    </Container>
  );
};

export default Products;
