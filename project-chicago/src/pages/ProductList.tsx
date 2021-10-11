import React from "react";
import styled from "styled-components";
import Navbar from "../components/NavBar";
import Announcement from "../components/Announcement";
import mobile from "../responsive";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem;
  ${mobile({width: "0px 20px", display: "flex", flexDirection: "column"})}
`;

const FilterText = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  margin-right: 1.2rem;
  ${mobile({marginRight: "0px"})}
`;

const Select = styled.select`
  padding: 0.5rem 0.8rem;
  margin-right: 1.2rem;
  ${mobile({margin: "0.8rem 0px"})}
`;

const Option = styled.option`
    font-size: 0.9rem;
`;

const ProductList = ():React.ReactElement => {
    return <Container>
        <Navbar/>
        <Announcement/>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products: </FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>;
}

export default ProductList;