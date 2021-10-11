import React from "react";
import styled from "styled-components";
import Navbar from "../components/NavBar";
import Announcement from "../components/Announcement";
import mobile from "../responsive";
import {Add, Remove} from "@material-ui/icons";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 2.8rem;
  display: flex;
  ${mobile({padding: "10px", flexDirection: "column"})}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  ${mobile({height: "40vh"})}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 3rem;
  ${mobile({padding: "0.8rem"})}
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 3rem;
`;

const Desc = styled.p`
  margin: 1.2rem 0;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 2rem;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 1.8rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobile({width: "100%"})}
`;

const Filter = styled.div`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 1.2rem;
  padding: 0.5rem;
  font-weight: 500;
`;

const FilterColor = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 0.2rem;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 0.8rem;
  padding: 0.2rem;
`;

const FilterSizeOption = styled.option`
  font-size: 0.9rem;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width: "100%"})}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 0.2rem;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
`;

const Button = styled.button`
  margin: 0 5rem;
  padding: 1rem;
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  transition: 0.2s all ease-in;
  &:hover {
    background-color: teal;
    color: white;
    border: 2px solid teal;
  }
`;

const ProductPage = (): React.ReactElement => {
    return <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>
                    Get maxing out your wardrobe with this style. Featuring indigo blue denim high waist, halter neck
                    jumpsuit. Dress it up with heels and a sling for a perfect off-duty look.
                </Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>;
}

export default ProductPage;