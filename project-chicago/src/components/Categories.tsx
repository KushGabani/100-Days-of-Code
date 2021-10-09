import React from "react";
import styled from "styled-components";
import mobile from "../responsive";
import CategoryItem from "./CategoryItem";
import { categories } from "../data";

const Container = styled.div`
  display: flex;
  padding: 1.2rem;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })};
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((cat: { id: number; img: string; title: string }) => (
        <CategoryItem item={cat} key={cat.id} />
      ))}
    </Container>
  );
};

export default Categories;
